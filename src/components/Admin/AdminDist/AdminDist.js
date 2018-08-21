/* BlisS was here */
import React, { Component } from 'react';
import { Card, Button , message } from 'antd';
import {connect} from 'react-redux'
import Buscador from './Buscador';
import {ListaDist} from './ListaDist';
import {Link} from 'react-router-dom'
import {getDistri} from "../../../redux/actions/distActions";


class AdminDist extends Component {

  state = {
    data: [],
    loading: false,
    hasMore: true,
    busqueda:''
  };

  componentWillMount() {
    this.props.getDistri();
  };

  handleInfiniteOnLoad = () => {
    let data = this.props.distribuidores;
    this.setState({
      loading: true,
    });
    if (data.length > 0) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    // this.getData((res) => {
    //   data = data.concat(res);
    //   this.setState({
    //     data,
    //     loading: false,
    //   });
    // });
  };

  buscar=(informacion)=>{
    this.setState({busqueda:informacion})
  };


  render() {

    let {busqueda} = this.state;
    let data = this.props.distribuidores;
    let regEx = new RegExp(busqueda, 'i')
    data = data.filter(i=> regEx.exec(i.razonSocial) || regEx.exec(i.username))
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title="Lista de Distribuidores" style={{margin:'20px', width: '80%' }}>
        <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexGrow:'1', flexDirection: 'row' }}>
        <Buscador busqueda={this.buscar}/>
            <Link to={'/admin/dist/new'}>
              <Button type="primary">Añadir Distribuidor</Button>
            </Link>
        </div>
      <br/><br/>
        <ListaDist {...this.state} lista={data} handleInfiniteOnLoad={this.handleInfiniteOnLoad}/>
      </Card>
  </div>
    );
  }
}

function mapStateToProps(state){
  return {
    distribuidores: state.distribuidores
  }
}

export default connect(mapStateToProps,{getDistri})(AdminDist);