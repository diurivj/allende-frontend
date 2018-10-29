import React, { Component } from 'react';
import './Admin.css';
import { Table, Button, Modal } from 'antd';
import {Icon} from 'antd';
import {DistribuidorNewPedido} from './forms/DistribuidorNewPedido';
import {getSelfProfile} from '../../services/distributorService'
import toastr from 'toastr'
import { getProducts } from '../../services/productService';


const columns = [
    { title: '#Pedido',
        dataIndex: 'id',
        key: 'id' },
    { title: 'Total',
        dataIndex: 'total',
        key: 'total' },
    { title: 'Fecha Pedido',
        dataIndex: 'date',
        key: 'date' },
    { title: 'Fecha Entrega',
        dataIndex: 'arrive',
        key: 'arrive' },
    { title: 'Status',
        dataIndex: 'status',
        key: 'x', render: () => <Icon type="pushpin" /> },

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
        selected:[]
     }

    addProduct = (id, quantity) => {
        if(!quantity || quantity<1) return
        const product = this.state.products.find(p=>p._id === id)
        product.quantity = quantity
        console.log(quantity)
        console.log(product)
        const {selected} = this.state
        selected.unshift(product)
        this.setState({selected})
    }

    componentWillMount(){
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
        //getPromos()
    }

    getProducts = () => {
        getProducts()
        .then(products=>{
            console.log(products)
            this.setState({products})
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        const {profile, products, selected} = this.state
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
                            <strong> ${profile.credit_amount.toLocaleString(2, { minimumFractionDigits: 2 })} MXN </strong>
                        </p>
                        <p>Tu plazo de pago es de: 
                            <strong>{profile.credit_days} días</strong>
                        
                        </p>

                    </div>
                    <br/>
                    <div className="table">
                        <Table
                            columns={columns}
                            expandedRowRender={record => <p style={{ margin: 0,  width:"100%" }}>{record.description}</p>}
                            dataSource={data}
                        />
                    </div>
                </div>
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Agregar Pedido</Button>
                <Modal
                    title="Realiza un nuevo pedido"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <DistribuidorNewPedido 
                        products={products}
                        addProduct={this.addProduct}
                        selected={selected}
                    />
                </Modal>
            </div>
        );
    }
}

export default DistribuidorPedidos;
