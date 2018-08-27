import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../../assets/logoallende.png';
const { SubMenu } = Menu;

class AdminPanel extends Component{

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

  render(){
    return(
        <div style={{ width: 200 , height:'100vh', textAlign: 'left' }}>
          <Menu mode="inline" theme="dark" inlineCollapsed={false} defaultSelectedKeys={['1']} style={{ height: '100vh' }} >

            <Menu.Item key="/admin" style={{height: '100px', textAlign: "center", marginTop: '50px', marginBottom: '50px'}} >
              <Link to="/admin">
                <img src={logo} alt="allendelogo" width="70%"/>
              </Link>
            </Menu.Item>

            <Menu.Item key="1">
              <Link to="/admin">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>

            <Menu.Item  key="2">
              <Link to="/admin/dist">
                <Icon type="team" />
                <span>Distribuidores</span>
              </Link>
            </Menu.Item>

            <Menu.Item  key="3">
              <Link to="/admin/pedidos">
                <Icon type="inbox" />
                <span>Pedidos</span>
              </Link>
            </Menu.Item>

            <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Productos</span></span>}>
              <Menu.Item key="4">
                <Link to="/admin/products">
                  <span>Todos los Productos</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/admin/promos" >
                  <span>Promociones</span>
                </Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item  key="6">
              <Link to="/admin/profile">
                <Icon type="user" />
                <span>Perfil</span>
              </Link>
            </Menu.Item>

            <Menu.Item onClick={this.logOut} key="7">
              <Link to="/">
                <Icon type="poweroff" />
                <span>Logout</span>
              </Link>
            </Menu.Item>

          </Menu>
      </div>
    )
  }
}

export default AdminPanel;