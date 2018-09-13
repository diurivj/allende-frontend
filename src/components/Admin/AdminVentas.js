import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import { Table } from 'antd';
import reqwest from 'reqwest';
import { DatePicker, Select } from 'antd';

const {  RangePicker } = DatePicker;
const Search = Input.Search;

const columns = [
   {
        title: 'Mes',
        dataIndex: 'month',
        sorter: true, width: '15%',
    }, {
        title: 'Golden Ale',
        dataIndex: 'golden',
        width: '15%'
    }, {
        title: 'Brown Ale',
        dataIndex: 'brown',
        width: '15%',
    } ,
    {
        title: 'Agave',
        dataIndex: 'agave',
        width: '15%',
    } ,
    {
        title: 'IPA',
        dataIndex: 'IPA',
        width: '15%',
    } ,
    {
        title: 'Total',
        dataIndex: 'total',
        width: '25%',
    }



];

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}function onChange(date, dateString) {
    console.log(date, dateString);
}

class AdminVentas extends Component {
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
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Ventas</h2>
                <br/>
                <div className="filtros flex" style={{justifyContent:"space-between"}}>
                    <label htmlFor="">Buscar Proyecto</label>
                    <RangePicker onChange={onChange} />
                    <br />
                </div>
                <h3 style={{float:"left"}}>Total del período: </h3>

                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />

            </div>
            </div>
        );
    }
}

export default AdminVentas;
