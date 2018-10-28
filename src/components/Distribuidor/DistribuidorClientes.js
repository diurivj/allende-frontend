import React, { Component } from 'react';
import './Admin.css';
import { Table } from 'antd';
import {Icon, Switch} from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom';

const { Column, ColumnGroup } = Table;


const data = [
    { key: 1, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];

class DistribuidorClientes extends Component {
    state = {
        visible: false,
        // clientes:[]
    }



    render() {
        return (
            <div className="pedidos">
                <h2>Clientes</h2>
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
                <Link to="/dist/clientes/id">
                    <Button className='btn_float' type="primary" >Agregar Cliente</Button>
                </Link>
            </div>
        );
    }
}

export default DistribuidorClientes;
