import React, { Component } from 'react';
import './Admin.css';
import { Table } from 'antd';
import {Icon} from 'antd';
import { Modal, Button } from 'antd';
import {NewProspectoModal} from './NewProspectoModal';

const columns = [
    { title: 'Razón Social',
        dataIndex: 'cliente',
        key: 'cliente' },
    { title: 'Dirección',
        dataIndex: 'direccion',
        key: 'direccion' },

    { title: 'Editar',
        dataIndex: '',
        key: '', render: () => <Icon type="edit" /> },
    { title: 'Status',
        dataIndex: '',
        key: '', render: () => <Icon type="pushpin" />  },


];
const data = [
    { key: 1, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];

class DistribuidorProspectos extends Component {
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
                <h2>Prospectos</h2>
                <br/>
                <div className="table">
                    <Table
                        columns={columns}
                        expandedRowRender={record => <p style={{ margin: 0,  width:"100%" }}>{record.description}</p>}
                        dataSource={data}
                    />
                </div>
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Agregar Prospecto</Button>
                <Modal
                    title="Completa los datos"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <NewProspectoModal />
                </Modal>
            </div>
        );
    }
}

export default DistribuidorProspectos;
