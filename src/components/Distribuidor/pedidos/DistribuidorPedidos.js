import React, { Component } from 'react';
import '../Admin.css';
import { Table, Button, Modal } from 'antd';
import {Icon} from 'antd';
import {DistribuidorNewPedido} from '../forms/DistribuidorNewPedido';
import PedidoDetail from './PedidoDetail'
import {getSelfProfile} from '../../../services/distributorService'
import toastr from 'toastr'
import { getProducts } from '../../../services/productService';
import {getPromos} from '../../../services/promoService'
import {createOrder, getOrders} from '../../../services/orderService'
import swal from 'sweetalert2'
import moment from 'moment'
import 'moment/locale/es'


const columns = [
    { title: '#Pedido',
        dataIndex: '_id',
        key: '_id' },
    { title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render:(data)=>"$ " + data && data.toFixed(2) + "MXN"
    },
    { title: 'Fecha Pedido',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render:data=>data && moment(data).format("ll") 
    },
    { title: 'Fecha Entrega',
        dataIndex: 'arrivalDate',
        key: 'arrivalDate' },
    { title: 'Status',
        dataIndex: 'status',
        key: 'status', 
        // render: () => <Icon type="pushpin" /> 
    },

];
const data = [
    { key: 1, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];


class DistribuidorPedidos extends Component {

    state = { 
        visible: false,
        user:{},
        profile:{
            credit_amount:0
        },
        products:[],
        promos:[],
        selected:[],
        comments:"",
        orders:[],
        visibleDetail:false,
        pedido:{}
     }

    addProduct = (id, quantity) => {
        if(!quantity || quantity<1) return
        const product = this.state.products.find(p=>p._id === id) || {}
        product.quantity = quantity
        product.total = product.quantity * product.price
        let {selected} = this.state
        const s = selected.find(p=>p._id === product._id)
        if(s) selected = selected.filter(p=>p._id!==s._id)
        selected.unshift(product)
        this.setState({selected})
    }

    addPromo = (id, quantity) => {
        console.log(id, quantity)
        if(!quantity || quantity<1 || !id) return
        const promo = this.state.promos.find(p=>p._id === id) || {}
        promo.quantity = quantity
        promo.total = promo.quantity * promo.price
        let {selected} = this.state
        const s = selected.find(p=>p._id === promo._id)
        if(s) selected = selected.filter(p=>p._id!==s._id)
        selected.unshift(promo)
        this.setState({selected})
    }

    removeProduct = (product) => {
        let {selected} = this.state
        selected = selected.filter(p=>p._id !== product._id)
        this.setState({selected})
    }

    commentsChange = (e) => {
        let {comments} = this.state
        comments = e.target.value
        this.setState({comments})
    }

    submitOrder = () => {
        const {comments, selected} = this.state
        const order = {
            comments,
            products:selected
        }
        createOrder(order)
        .then(o=>{
            console.log(o)
            const {orders} = this.state
            orders.unshift(o)
            this.setState({orders})
            toastr.success("Tu orden se creo")
        })
    }

    componentWillMount(){
        //route for tabs
        // console.log("dupa")
        //localStorage.setItem('match', JSON.stringify(this.props.match))
        //2.- pedir los datos del usuario
        getSelfProfile()
        .then(user=>{
            this.setState({profile:user.distributor})
            this.setState({user})
        })
        .catch(e=>{
            toastr.error("No se pudieron cargar tus datos")
        })
        this.getProducts()
        this.getPromos()
        this.getOrders()
    }

    getOrders = () => {
        getOrders()
        .then(orders=>{
            this.setState({orders})
            console.log(orders)
        })
    }

    getProducts = () => {
        getProducts()
        .then(products=>{
            this.setState({products})
        })
    }

    getPromos = () => {
        getPromos()
        .then(promos=>{
            this.setState({promos})
        })
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        const {selected} = this.state
        const sum = selected.reduce((acc,i)=>acc+i.total,0)
        // console.log(selected, sum)
        // console.log(sum, this.getAvailableCredit())
        if( sum > this.getAvailableCredit()){
            return swal({
                type: 'error',
                title: 'Oops...',
                text: 'Parece que tu credito no es suficiente!',
                footer: '<a href="mailto:contacto@allende.com">¿Necesitas ampliar tu credito?</a>'
              })
        }
        if(selected.length < 1) {
            console.log("ño")
            return
        }
        // this.submitOrder()

        // this.setState({
        //     visible: false,
        // });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    clickRow = (pedido) => {
        this.setState({pedido, visibleDetail:true})
    }

    getAvailableCredit = () => {
        const {orders, profile} = this.state
        const sum = orders.reduce((acc, or)=>acc+or.total,0)
        return profile.credit_amount - sum
    }

    render() {
        
        const {orders, promos, profile={}, products, selected, pedido} = this.state
        console.log(profile)
        return (
            <div className="pedidos">
                <h2>Mis pedidos</h2>
                <br/>
                <div className="box_pedidos">
                    <div className="pedido">
                        <h3>Distribuidor {profile.business_name}</h3>
                        <p>Tu monto de credito es:
                            <strong> ${profile.credit_amount.toLocaleString(2, { minimumFractionDigits: 2 })} MXN </strong>
                            </p>
                        <p>Tu crédito disponible es de: 
                            <strong> ${profile.credit_available && this.getAvailableCredit().toLocaleString(2, { minimumFractionDigits: 2 })} MXN </strong>
                        </p>
                        <p>Tu plazo de pago es de: 
                            <strong>{profile.credit_days} días</strong>
                        
                        </p>

                    </div>
                    <br/>
                    <div className="table">
                        <Table
                        style={{cursor:"pointer"}}
                            onRow={(record) => {
                            return {
                              onClick: ()=>this.clickRow(record),       // click row
                            }}}
                            columns={columns}
                            // expandedRowRender={record => <p style={{ margin: 0,  width:"100%" }}>{record.description}</p>}
                            dataSource={orders}
                        />
                    </div>
                </div>
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Levantar un Pedido</Button>
                <Modal
                    title="Realiza un nuevo pedido"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <DistribuidorNewPedido 
                        products={products}
                        promos={promos}
                        addProduct={this.addProduct}
                        selected={selected}
                        discount={profile.discount}
                        removeProduct={this.removeProduct}
                        addPromo={this.addPromo}
                        commentsChange={this.commentsChange}
                        submitOrder={this.submitOrder}
                    />
                </Modal>

                <Modal
                    title="Detalle de pedido"
                    visible={this.state.visibleDetail}
                    onOk={()=>this.setState({visibleDetail:false})}
                    onCancel={()=>this.setState({visibleDetail:false})}
                    cancelButtonProps={{ disabled: true }}
                >
                    <PedidoDetail 
                        {...pedido}
                    />
                </Modal>
            </div>
        );
    }
}

export default DistribuidorPedidos;
