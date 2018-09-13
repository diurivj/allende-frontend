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
          <Menu mode="inline" theme="dark" inlineCollapsed={false} defaultSelectedKeys={['1']} style={{ height: '100vh' }} inlineIndent={'24'} >
            <div style={{ marginTop: '30px', marginBottom: '30px', textAlign: 'center' }}>
              <img src={logo} alt="allende" width="70%" />
            </div>
            <Menu.Item key="1">
              <Link to="/admin">
                <div className='menuItem'>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/admin/alertas">
                <div className='menuItem'>
                  <Icon type="sound"/>
                  <span>Alertas</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/admin/ventas">
                <div className='menuItem'>
                  <Icon type="area-chart"  />
                  <span>Ventas</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="4">
              <Link to="/admin/pedidos">
                <div className='menuItem'>
                  <Icon type="inbox" />
                  <span>Pedidos</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item  key="5">
              <Link to="/admin/dist">
                <div className='menuItem'>
                  <Icon type="team" />
                  <span>Distribuidores</span>
                </div>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Catalogo</span></span>}>
              <Menu.Item key="6">
                <Link to="/admin/productos">
                  <div className='menuItem'>
                    <span>Productos</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/admin/promos" >
                  <div className='menuItem'>
                    <span>Promociones</span>
                  </div>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item  key="8">
              <Link to="/admin/profile">
                <div className='menuItem'>
                  <Icon type="user" />
                  <span>Perfil</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item onClick={this.logOut} key="9">
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