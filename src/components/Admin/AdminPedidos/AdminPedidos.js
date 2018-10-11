import React, { Component } from 'react';
import { Card ,message} from 'antd';
import { ListaPedidos } from './ListaPedidos';
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


class AdminPedidos extends Component {

  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  componentWillMount() {
    this.getData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title="Lista de Pedidos" style={{margin:'20px', height:'auto', width: '80%' }}>
        <ListaPedidos handleInfiniteOnLoad={this.handleInfiniteOnLoad} state={this.state} />
      </Card>
      </div>
    );
  }
}

export default AdminPedidos;