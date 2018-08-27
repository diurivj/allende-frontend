import React, { Component } from 'react';
import './Admin.css';
import { Table } from 'antd';
import {Icon} from 'antd';

const columns = [
    { title: '#Pedido',
        dataIndex: 'id',
        key: 'id' },
    { title: 'Cliente',
        dataIndex: 'cliente',
        key: 'cliente' },
    { title: 'Fecha Pedido',
        dataIndex: 'date',
        key: 'date' },
    { title: 'Total',
        dataIndex: 'total',
        key: 'total' },
    { title: 'Status',
        dataIndex: 'status',
        key: 'x', render: () => <Icon type="pushpin" /> },

];
const data = [
    { key: 1, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', cliente:"brendi", arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];


class DistribuidorOrden extends Component {
    render() {
        return (
            <div className="pedidos">
                <h2>Mis pedidos</h2>
                <br/>
                <div className="box_pedidos">
                    <div className="pedido">
                        <h3>Distribuidor Bajio</h3>
                        <p>Ordenes en proceso: </p>
                        <p>Ordenes finalizadas: </p>

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
            </div>
        );
    }
}

export default DistribuidorOrden;
