import React, {Component} from 'react';
import {getPromos} from "../../../../services/productsServices";
import { Button, Modal, Icon, Table, Card } from 'antd';
import {ModalFormPromo} from "./ModalFormPromo";

const { Meta } = Card;

class AdminPromos extends Component{
    state = {
        products: [],
        promos: [],
        visible: false,
        columns: [
            { title: 'ID', dataIndex: 'id', align: 'center', width: 150 },
            { title: 'Nombre', dataIndex: 'name', align: 'center', width: 250 },
            { title: 'Precio', dataIndex: 'price', align: 'center', width: 100,
                render: (i) => `$ ${i}`
            },
            { title: 'Imagen', dataIndex: 'image', align: 'center', width: 300,
                render: () => <img src='https://s3.amazonaws.com/kichink/items_865660_246443_20160104113504_b.jpg' alt='imagen' width='10%' />,
            },
            { title: 'Stock', dataIndex: 'stock', align: 'center', width: 100 },
            { title: 'Editar',
                dataindex: 'editar',
                width: 100,
                align: 'center',
                render: (i, obj) => <a style={{  }} onClick={()=>this.showModal(obj)}> <Icon type="edit" /> </a>
            },
            { title: 'Borrar',
                dataindex: 'action',
                width: 100,
                align: 'center',
                render: (i, obj) => <a style={{ color: 'red' }} onClick={()=>this.showModal(obj)}> <Icon type="delete" /> </a>
            }
        ],
    };

    showModal = (obj) => {
        this.setState({visible: true});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };


    componentWillMount(){

      getPromos()
    .then(promos => {
      this.setState({promos});
    })
    .catch(e => console.log(e))
  }

  render(){
      const {visible, columns} = this.state;
    const {promos} = this.state;
    return(
        <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
          <div className="pedidos">
            <h2>Promociones</h2>
            <br/>
            <Table rowKey="name"  columns={columns} dataSource={promos} style={{width: '100%', maxHeight:"100vh"}} />
            <Button className='btn_float' onClick={this.showModal} type="primary" style={{marginBottom: 20}}>Crear Nuevo Producto</Button>

            <Modal visible={visible} title="Crear nuevo producto" onOk={this.handleOk} onCancel={this.handleCancel}
                   footer={[
                     <Button type='danger' key="cancel" onClick={this.handleCancel}>Cancelar</Button>,
                     <Button type='primary' key="submit" onClick={this.handleOk}>Crear producto</Button>
                   ]}
            >
              <ModalFormPromo/>
            </Modal>

      </div>
        </div>
    )
  }
}

export default AdminPromos;