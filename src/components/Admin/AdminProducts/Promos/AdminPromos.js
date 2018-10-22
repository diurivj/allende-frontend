import React from 'react';
import { Button, Modal, Icon, Table } from 'antd';
import toastr from 'toastr';
import {ModalFormPromo} from "./ModalFormPromo";
import {createPromo, getPromos, updatePromo, removePromo} from '../../../../services/promoService'

const { Column, ColumnGroup } = Table;

class AdminPromos extends React.Component{

  state = {
    promos: [],
    visible: false,
    promo:{},
    editing:false
  }

  showModal = () => {
    this.setState({visible: true, editing:false, promo:{}});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleOk = () => {
    const {promo} = this.state
    createPromo(promo)
    .then(p=>{
      const {promos} = this.state
      promos.unshift(p)
      this.setState({promos, visible:false})
      toastr.success("Se agregó un producto nuevo")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo crear")
    })
  };

  onChange = (e) => {
    const {promo} = this.state
    const field = e.target.name
    const value = e.target.value
    promo[field] = value
    this.setState({promo})
  }

  componentWillMount(){
    this.getPromos()
  }

  getPromos = () => {
    getPromos()
    .then(promos=>{
      this.setState({promos})
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudieron cargar")
    })
  }

  editPromo = (promo) => {
    this.setState({promo, visible:true, editing:true})
  }

  updatePromo = () => {
    const {promo} = this.state
    updatePromo(promo)
    .then(prom=>{
      let {promos} = this.state
      promos = promos.map(p=>{
        if(p._id===prom._id) return prom
        return p
      })
      this.setState({promos, visible:false})
      toastr.info("Se actualizó")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo crear")
    })
  }

  deletePromo = (promo) => {
    if(!window.confirm("¿Esta segur@ de borrar?")) return
    removePromo(promo)
    .then(()=>{
      let {promos} = this.state
      promos = promos.filter(p=>p._id!==promo._id)
      this.setState({promos})
      toastr.warning("Se borró")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo borrar")
    })
  }

  render(){
    const {visible, promos, promo, editing} = this.state;
    return(
        <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
          <div className="pedidos">
            <h2>Promociones</h2>
            <br/>
            <Table rowKey="_id" dataSource={promos}>
                    <Column
                        title="ID"
                        dataIndex="_id"
                        key="_id"
                        render={(data="")=>data.slice(-3)}
                    />
                    <Column
                        title="Nombre"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="Precio"
                        dataIndex="price"
                        key="price"
                    />
                     <Column
                        title="Stock"
                        dataIndex="stock"
                        key="stock"
                    />
                    <Column
                        title="Editar"
                        dataIndex="edit"
                        key="edit"
                        render={(data="", o)=><Icon onClick={()=>this.editPromo(o)} type="edit" />}
                        
                    />
                    <Column
                        title="Eliminar"
                        dataIndex="remove"
                        key="remove"
                        render={(data, o)=><Button type="primary" onClick={()=>this.deletePromo(o)} >Eliminar</Button>}
                    />
                </Table>
        <Button className='btn_float' onClick={this.showModal} type="primary" style={{marginBottom: 20}}>Crear Nueva Promoción</Button>

        <Modal visible={visible} title="Crear nueva promoción" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button type='danger' key="cancel" onClick={this.handleCancel}>Cancelar</Button>,
            <Button type='primary' key="submit" onClick={editing ? this.updatePromo:this.handleOk}>{editing ? "Actualizar":"Crear promoción"}</Button>
          ]}
        >
          <ModalFormPromo {...promo} onChange={this.onChange} />
        </Modal>
      </div>
        </div>
    )
  }
}



export default AdminPromos;