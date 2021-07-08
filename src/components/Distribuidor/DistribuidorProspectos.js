import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import {Icon, Switch} from 'antd';
import { Modal, Button } from 'antd';
import {NewProspectoModal} from './NewProspectoModal';


const { Column, ColumnGroup } = Table;

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
                    <Table rowKey="_id" >
                        <Column
                            title="ID"
                            dataIndex="_id"
                            key="_id"
                            render={(data="", o)=><Link to={`/dist/clientes/${o._id}`}>{data.slice(-3)}</Link>}
                        />
                        <Column
                            title="Nombre"
                            dataIndex="business_name"
                            key="business_name"
                        />
                        <Column
                            title="RFC"
                            dataIndex="rfc"
                            key="rfc"
                        />
                        <Column
                            title="Activa"
                            dataIndex="active"
                            key="active"
                            render={(data, o)=><Switch checked={data} onChange={(bool)=>this.changeActive(bool, o)} />}

                        />
                        <Column
                            title="Eliminar"
                            dataIndex="remove"
                            key="remove"
                            render={(data, o)=><Button type="primary" onClick={()=>this.deleteDistributor(o)} >Eliminar</Button>}
                        />



                    </Table>
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
