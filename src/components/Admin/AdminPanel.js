import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../assets/logoallende.png';



class AdminPanel extends Component{

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

  render(){
    return(
        <div style={{ width: 200 , height:'100%'}}>
          <Menu mode="inline" theme="dark" inlineCollapsed={false} defaultSelectedKeys={['1']} style={{ height: '100vh' }}>
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
              <img src={logo} alt="allende" width="70%" />
            </div>
            <Menu.Item  key="1">
              <Link to="/admin">
                <div className='menuItem'>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="2">
              <Link to="/admin/dist">
                <div className='menuItem'>
                  <Icon type="team" />
                  <span>Distribuidores</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="3">
              <Link to="/admin/pedidos">
                <div className='menuItem'>
                  <Icon type="inbox" />
                  <span>Pedidos</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="4">
              <Link to="/admin/profile">
                <div className='menuItem'>
                  <Icon type="appstore" />
                  <span>Productos</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="5">
              <Link to="/admin/profile">
                <div className='menuItem'>
                  <Icon type="user" />
                  <span>Perfil</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item onClick={this.logOut} key="6">
              <Link to="/">
                <div className='menuItem'>
                  <Icon type="poweroff" />
                  <span>Logout</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
      </div>
    )
  }
}

export default AdminPanel;