import React, { Component } from 'react';
import './Administrador.css';
import { Table } from 'antd';
import {Icon} from 'antd';
import { Button, Switch } from 'antd';
import {Link} from 'react-router-dom';
import {getAdminDistributors, updateDistributor, removeDistributor} from '../../services/distributorService'
import toastr from 'toastr'

const { Column, ColumnGroup } = Table;


class AdminDistribuidores extends Component {
    state = { 
        dists:[],
        visible: false
     }

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

    componentWillMount(){
        getAdminDistributors()
        .then(dists=>{
            //console.log(dists)
            this.setState({dists})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudieron traer")
        })
    }

    changeActive = (bool, dist) => {
        console.log(bool, dist)
        dist.active = bool
        updateDistributor(dist)
        .then(res=>{
            console.log(res)
           let {dists} = this.state
           dists = dists.map(a=>{
               if(a._id === dist._id) return dist
               return a
           }) 
           toastr.info("El distribuidor se actualizó")
           this.setState({dists})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudo modificar")
        })
    }

    
    deleteDistributor = (dist) => {
        if(!window.confirm("¿Estas segur@ de borrar?")) return
        removeDistributor(dist)
        .then(()=>{
            let {dists} = this.state
            dists = dists.filter(a=>a._id !== dist._id) 
            this.setState({dists})
            toastr.warning("Se eliminó")
         })
         .catch(e=>{
             console.log(e)
             toastr.error("No se pudo borrar")
         })
    }

    render() {
        const {dists} = this.state
        return (
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Distribuidores</h2>
                <br/>
                <div className="table">
                <Table rowKey="_id" dataSource={dists}>
                    <Column
                        title="ID"
                        dataIndex="_id"
                        key="_id"
                        render={(data="", o)=><Link to={`/admin/dist/${o._id}`}>{data.slice(-3)}</Link>}
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
                        render={(data, o)=><button onClick={()=>this.deleteDistributor(o)} >Eliminar</button>}
                    />



                </Table>
                </div>
                <Link to="/admin/dist/new">
                    <Button className='btn_float' type="primary" >Agregar Distribuidor</Button>
                </Link>
            </div>
            </div>
        );
    }
}

export default AdminDistribuidores;
