import React, {Component} from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, DatePicker, Button, Table, Modal } from 'antd';
import {saveOrder} from '../../../services/clienteService'
import {getProducts} from '../../../services/productService'
import toastr from 'toastr'

const { Column, ColumnGroup } = Table;



const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;


class DistribuidorNewOrden extends Component {

    state = {
        order:{
            date: new Date()
        },
        val:0,
        num:0,
        selected:[],
        products:[]
    }


    componentWillMount(){
        this.getProducts()
    }

    handleInput = (e) => {
        const {order} = this.state
        order[e.target.name] = e.target.value
        this.setState({order})
    }

    handleClient = (clientId) => {
        const {order} = this.state
        order.client = clientId
        this.setState({order})
    }

    changeDate = (value) => {
        const {order} = this.state
        order.date = value
        this.setState({order})
    }

    handleSelect = (value) => {
        const {order} = this.state
        order.payment = value
        this.setState({order})
    }

    addProduct = () => {
        const {val, num} = this.state
        if(!num || num<1) return
        const product = this.state.products.find(p=>p._id === val) || {}
        product.quantity = num
        product.total = num * product.price
        console.log(product)
        let {selected} = this.state
        const s = selected.find(p=>p._id === product._id)
        if(s) selected = selected.filter(p=>p._id!==s._id)
        selected.unshift(product)
        this.setState({selected})
    }


    handleChange = (val) => {
        this.setState({val})
    }

    handleNumber = (num) => {
        this.setState({num})
    }

    removeProduct = (p) => {
        let { selected } = this.state
        selected = selected.filter(pro=>pro._id !== p._id)
        this.setState({selected})
    }

    handleOk =() => {
        if(!this.state.order.client || this.state.selected.length < 1) return
        let total = this.state.selected.reduce((acc, p)=>{
            return acc + p.total
        },0)
        const order = {
            ...this.state.order,
            products: this.state.selected,
            total
        }
        console.log(order)
        saveOrder(order)
        .then(o=>{
            toastr.success("Tu orden se creo con éxito.")
            this.props.updateList(o)
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudo crear")
        })
    }


    getProducts =() => {
        getProducts()
        .then(products=>{
            this.setState({products})
        })
        .catch(e=>{
            console.log(e)
        })
    }

    render(){
        const {clients} = this.props
        const {products, selected} =  this.state
        let total = selected.reduce((acc, p)=>{
            return acc + p.total
        },0)
    return(
        <Modal
        title="Genera una nueva orden"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.handleCancel}
    >
                <Form >
                    <FormItem label="Cliente">
                        <Select defaultValue="Elige uno de tus clientes" style={{ width:"100%" }} onChange={this.handleClient}>
                            {clients.map((c,i)=>{
                                return <Option key={i} value={c._id}>{c.business_name}</Option>
                            })}
                        </Select>
                    </FormItem>
                    <FormItem label="Fecha de orden">
                        <DatePicker  onChange={this.changeDate} />
                    </FormItem>

                <div className="flexito">
                    
                    <FormItem label="Producto">
                        <Select style={{ width: 120 }} onChange={this.handleChange}>
                            {products.map((p,i)=><Option key={i} value={p._id}>{p.name}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="Caja(24pzas)">
                       <InputNumber  min={1} max={100} defaultValue={0} onChange={this.handleNumber} />
                    </FormItem>

                    <FormItem label=" ">
                       <Button onClick={()=>{this.addProduct()}} type="primary">Agregar</Button>
                    </FormItem>
                </div>
                <Table 
                dataSource={selected}
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
                        <Select defaultValue="Opcion" style={{ width:"100%" }} onChange={this.handleSelect}>
                            <Option value="CASH">Efectivo</Option>
                            <Option value="TRANSFER">Transferencia Electrónica</Option>
                            <Option value="CREDIT">Credito</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea name="comments" onChange={this.handleInput} autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>

                </Form>

            </Modal>
        );
    }

}

export default DistribuidorNewOrden