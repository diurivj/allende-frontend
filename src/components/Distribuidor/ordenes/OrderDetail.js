import React, {Component} from 'react'
import { Form, Input, Select, InputNumber, DatePicker, Button, Table, Modal } from 'antd';
import {getClients, getClientOrder, saveOrder} from '../../../services/clienteService'
import {getProducts} from '../../../services/productService'
import toastr from 'toastr'
import moment from 'moment'

const { Column, ColumnGroup } = Table;
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

class OrderDetail extends Component{

    state = {
        clients:[],
        order:{},
        allProducts:[],
        productSelected:null,
        quantity:null
    }

    componentWillMount(){
        this.getClients()
        this.getOrder()
        this.getProducts()
    }

    selectStatus = (status) => {
        const {order} = this.state
        order.status = status
        this.setState({order})
    }

    selectPayment = (value) => {
        const {order} = this.state
        order.payment = value
        this.setState({order})
    }

    handleInput = (e) => {
        const {order} = this.state
        order[e.target.name] = e.target.value
        this.setState({order})
    }

    selectDate = (date) => {
        const {order} = this.state
        order.date = date
        this.setState({order})
    }

    selectProduct = (productId) => {
        const {allProducts} = this.state
        const product = allProducts.find(p=>p._id === productId)
        this.setState({productSelected:product})
    }

    selectQuantity = (num) => {
        this.setState({quantity:num})
    }

    addProduct = () => {
        const {quantity, productSelected, order} = this.state
        if(!quantity || !productSelected) return
        const s = order.products.find(p=>p._id === productSelected._id)
        if(s) order.products = order.products.filter(p=>p._id !== productSelected._id)
        productSelected.quantity = quantity
        productSelected.total = parseInt(productSelected.quantity) * parseInt(productSelected.price)
        order.products.push(productSelected)
        this.setState({order})
    }

    removeProduct = (product) => {
        const {order} = this.state
        order.products = order.products.filter(p=>p._id !== product._id)
        this.setState({order})
    }


    getProducts = () => {
        getProducts()
        .then(allProducts=>{
            this.setState({allProducts})
        })
    }

    getOrder = () => {
        const orderId = this.props.match.params.id
        getClientOrder(orderId)
        .then(order=>{
            console.log(order)
            this.setState({order})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudo cargar la orden")
        })
    }

    getClients = () => {
        getClients()
        .then(clients=>{
            this.setState({clients})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudieron cargar los clientes")
        })
    }

    selectClient = (clientId) => {
        const {order} = this.state
        order.client = clientId
        this.setState({order})
    }

    onCancel = () => {
        this.props.history.push("/dist/ordenes")
    }

    saveOrder = () => {
        const {order} = this.state
        const total = order.products.reduce((acc,p)=>acc+p.total,0)
        order.total = total
        saveOrder(order)
        .then(o=>{
            console.log(o)
            toastr.success("Tu orden se actualizó")
            this.props.history.push('/dist/ordenes')
            setTimeout(()=>window.location.reload(),1000)
        })
        .catch(e=>{
            console.log(e)
            toastr.error("no se pudo actualizar")
        })
    }

   render(){
       const {clients, order, allProducts} = this.state
       const {products=[], client, date, comments, payment, status} = order
       let total = products.reduce((acc, p)=>{
        return acc + p.total
    },0)
    return(
        <Modal
        title="Detalle de orden"
        visible={true}
        onOk={this.saveOrder}
        onCancel={this.onCancel}
    >
                <Form >
                    <FormItem label="Cliente">
                        <Select value={client} defaultValue="Elige uno de tus clientes" style={{ width:"100%" }} onChange={this.selectClient}>
                            {clients.map((c,i)=>{
                                return <Option key={i} value={c._id}>{c.business_name}</Option>
                            })}
                        </Select>
                    </FormItem>
                    <FormItem label="Fecha de orden">
                        <DatePicker value={moment(date)} onChange={this.selectDate} />
                    </FormItem>

                <div className="flexito">
                    
                    <FormItem label="Producto">
                        <Select style={{ width: 120 }} onChange={this.selectProduct}>
                            {allProducts.map((p,i)=><Option key={i} value={p._id}>{p.name}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="Caja(24pzas)">
                       <InputNumber  min={1} max={100} defaultValue={0} onChange={this.selectQuantity} />
                    </FormItem>

                    <FormItem label=" ">
                       <Button onClick={()=>{this.addProduct()}} type="primary">Agregar</Button>
                    </FormItem>

                    
                </div>
                <Table 
                dataSource={products}
                rowKey="_id" >
                        <Column
                            title="Nombre"
                            dataIndex="name"
                            key="name"
                        />
            
                        <Column
                            title="Cantidad"
                            dataIndex="quantity"
                            key="quantity"
                        />
                        <Column
                            title="Precio/u"
                            dataIndex="price"
                            key="price"
                        />
                          <Column
                            title="Total"
                            dataIndex="total"
                            key="total"
                        />
                        <Column
                            title="Eliminar"
                            dataIndex="remove"
                            key="remove"
                            render={(data, o)=><Button type="primary" onClick={()=>this.removeProduct(o)} >Eliminar</Button>}
                        />



                    </Table>
                    <FormItem >Total: $ {total} MXN</FormItem>
                    <FormItem label="Forma de pago">
                        <Select value={payment} defaultValue={payment} style={{ width:"100%" }} onChange={this.selectPayment}>
                            <Option value="CASH">Efectivo</Option>
                            <Option value="TRANSFER">Transferencia Electrónica</Option>
                            <Option value="CREDIT">Credito</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea value={comments} name="comments" onChange={this.handleInput} autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>
                    <FormItem label="Status">
                        <Select value={status} style={{ width: 120 }} onChange={this.selectStatus}>
                            <Option value={"PENDIENTE"}>Pendiente</Option>
                            <Option value={"APROVADA"}>Aprovada</Option>
                            <Option value={"ENVIADA"}>Enviada</Option>
                            <Option value={"ENTREGADA"}>Entregada</Option>
                        </Select>
                    </FormItem>

                </Form>

            </Modal>
    )
   }

}

export default OrderDetail