import React, { Component } from 'react';
import '../Admin.css';
import {Link} from 'react-router-dom';
import { Table, Button, Modal } from 'antd';
import {Icon} from 'antd';
import DistribuidorNewOrden from '../forms/DistribuidorNewOrden';
import {getClientsOrders, getClients} from '../../../services/clienteService'
import toastr from 'toastr'
import moment from 'moment'


const columns = [
    { title: '#Pedido',
        dataIndex: '_id',
        key: '_id',
        render:data=>data && data.slice(1,6)
    },
    { title: 'Cliente',
        dataIndex: 'client',
        key: 'client',
        render:data=>data && data.business_name
    },
    { title: 'Fecha Pedido',
        dataIndex: 'date',
        key: 'date',
        render:data=>data && moment(data).format('ll')
    },
    { title: 'Total',
        dataIndex: 'total',
        key: 'total' },
    { title: 'Status',
        dataIndex: 'status',
        key: 'status'
    },

];
const data = [
    { key: 1, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];


class DistribuidorOrden extends Component {
    state = {
         visible: false ,
         orders:[],
         clients:[]
        }

    componentWillMount(){
        this.getOrders()
        this.getClients()
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
        this.setState({
            visible: false,
        });
    }

    getOrders = () => {
        getClientsOrders()
        .then(orders=>{
            console.log(orders)
            this.setState({orders})
        })
        .catch(e=>{
            toastr.error("No se pudieron cargar tus ordenes", e)
        })
    }

    getClients = () => {
        getClients()
        .then(clients=>{
            this.setState({clients})
        })
        .catch(e=>{
            toastr.error("No se pudieron cargar tus Clientes", e)
        })
    }

    updateList = (order) => {
        this.getOrders()
        this.setState({visible:false})
    }

    render() {
        let {orders, clients} = this.state
        orders = orders.reverse()
        console.log(clients)
        return (
            <div className="pedidos">
                <h2>Mis Ordenes</h2>
                <br/>
                <div className="box_pedidos">
                    <div className="pedido">
                        <h3></h3>
                        {/* <p>Ordenes en proceso: </p>
                        <p>Ordenes finalizadas: </p> */}

                    </div>
                    <br/>
                    <div className="table">
                        <Table
                            columns={columns}
                            // expandedRowRender={record => <p style={{ margin: 0,  width:"100%" }}>{record.description}</p>}
                            dataSource={orders}
                        />
                    </div>
                </div>
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Generar Orden</Button>

                   <DistribuidorNewOrden 
                    visible={this.state.visible}
                    clients={clients}
                    handleCancel={this.handleCancel}
                    updateList = {this.updateList}
                   />
            </div>
        );
    }
}

export default DistribuidorOrden;
