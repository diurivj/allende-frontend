import React, { Component } from 'react';
import './Admin.css';
import { Table, Button, Modal } from 'antd';
import {Icon} from 'antd';
import {DistribuidorNewPedido} from './forms/DistribuidorNewPedido';

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
    state = { visible: false }

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
        return (
            <div className="pedidos">
                <h2>Mis pedidos</h2>
                <br/>
                <div className="box_pedidos">
                    <div className="pedido">
                        <h3>Distribuidor Bajio</h3>
                        <p>Tu crédito es de: </p>
                        <p>Tu plazo de pago es de: </p>

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
                    <DistribuidorNewPedido />
                </Modal>
            </div>
        );
    }
}

export default DistribuidorPedidos;
