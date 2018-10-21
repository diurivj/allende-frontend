import React, { Component } from 'react';
import { Transfer, Button, Modal } from 'antd';
import './Administrador.css';
import {AlertaModal} from './AlertaModal';
import { Table, Divider, Tag, Icon } from 'antd';


const { Column, ColumnGroup } = Table;


const data = [{
    key: '1',
    texto:"hola",
    status: () => <Icon type="download" />
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],

}];


class AdminDashboard extends Component {

    state = {

    visible: false }

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
        const state = this.state;
        return (
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Alertas</h2>
                <br/>
                <Table dataSource={data}>
                    <Column
                        title="Texto"
                        dataIndex="texto"
                        key="texto"
                    />
                    <Column
                        title="Status"
                        dataIndex="status"
                        key="status"
                    />
                    <Column
                        title="Eliminar"
                        dataIndex="status"
                        key="status"
                    />

                </Table>
                
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Agregar Alerta</Button>
                <Modal
                    title="Agrega una nueva alerta"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <AlertaModal />
                </Modal>

            </div>
            </div>
        );
    }
}

export default AdminDashboard;