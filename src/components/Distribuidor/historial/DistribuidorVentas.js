import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import { Table } from 'antd';
import reqwest from 'reqwest';
import { DatePicker, Select } from 'antd';

const {  RangePicker } = DatePicker;
const Search = Input.Search;

const columns = [
    {
        title: '#Cliente',
        dataIndex: 'id_cliente',
         width: '10%',
    } ,{
        title: 'Fecha',
        dataIndex: 'date',
        sorter: true, width: '15%',
    }, {
        title: 'Cliente',
        dataIndex: 'cliente',
        width: '20%',
        sorter: true,
    }, {
        title: 'Total',
        dataIndex: 'total',
       width: '20%',
    } ,
    {
        title: 'Factura',
        dataIndex: 'bill',
        width: '20%',
    } ,
    {
        title: 'Status',
        dataIndex: 'status',
        sorter: true,
        width: '15%',
        key: 'x', render: () => <Icon type="pushpin" />

    }


];

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}function onChange(date, dateString) {
    console.log(date, dateString);
}

class DistribuidorVentas extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 7,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 70;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }


    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <div className="pedidos">
                <h2>Compras</h2>
                <br/>
                <div className="filtros flex" style={{justifyContent:"space-between"}}>
                    <label htmlFor="">Buscar Proyecto</label>
                    <RangePicker onChange={onChange} />
                    <br />
                    <label htmlFor="">Cerveza</label>
                    <Select defaultValue="golden-ale" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="golden-ale">GOLDEN ALE</Option>
                        <Option value="brown-ale">BROWN ALE</Option>
                        <Option value="agave-lager">AGAVE LAGER</Option>
                        <Option value="ipa">IPA</Option>
                    </Select>
                    <Search
                        placeholder="Cliente"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />

                </div>
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
        );
    }
}

export default DistribuidorVentas;
