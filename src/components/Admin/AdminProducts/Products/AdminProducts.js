import React from 'react';
import { Button, Modal, Icon, Table } from 'antd';
import toastr from 'toastr';
import {ModalForm} from "./ModalForm";
import {createProduct, getProducts, updateProduct, removeProduct} from '../../../../services/productService'

const { Column, ColumnGroup } = Table;

class AdminProducts extends React.Component{

  state = {
    products: [],
    visible: false,
    product:{}
  }

  showModal = () => {
    this.setState({visible: true, editing:false, product:{}});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleOk = () => {
    const {product} = this.state
    createProduct(product)
    .then(p=>{
      const {products} = this.state
      products.unshift(p)
      this.setState({products, visible:false})
      toastr.success("Se agregó un producto nuevo")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo crear")
    })
  };

  onChange = (e) => {
    const {product} = this.state
    const field = e.target.name
    const value = e.target.value
    product[field] = value
    this.setState({product})
  }

  componentWillMount(){
    this.getProducts()
  }

  getProducts = () => {
    getProducts()
    .then(products=>{
      this.setState({products})
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudieron cargar")
    })
  }

  editProduct = (product) => {
    this.setState({product, visible:true, editing:true})
  }

  updateProduct = () => {
    const {product} = this.state
    updateProduct(product)
    .then(prod=>{
      let {products} = this.state
      products = products.map(p=>{
        if(p._id===prod._id) return prod
        return p
      })
      this.setState({products, visible:false})
      toastr.info("Se actualizó")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo crear")
    })
  }

  deleteProduct = (product) => {
    if(!window.confirm("¿Esta segur@ de borrar?")) return
    removeProduct(product)
    .then(()=>{
      let {products} = this.state
      products = products.filter(p=>p._id!==product._id)
      this.setState({products})
      toastr.warning("Se borró")
    })
    .catch(e=>{
      console.log(e)
      toastr.error("No se pudo borrar")
    })
  }

  render(){
    const {visible, products, product, editing} = this.state;
    return(
        <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
          <div className="pedidos">
            <h2>Productos</h2>
            <br/>
            <Table rowKey="_id" dataSource={products}>
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
                        render={(data, o)=><Icon onClick={()=>this.editProduct(o)} type="edit" />}
                        
                    />
                    <Column
                        title="Eliminar"
                        dataIndex="remove"
                        key="remove"
                        render={(data, o)=><button onClick={()=>this.deleteProduct(o)} >Eliminar</button>}
                    />
                </Table>
        <Button className='btn_float' onClick={this.showModal} type="primary" style={{marginBottom: 20}}>Crear Nuevo Producto</Button>

        <Modal visible={visible} title="Crear nuevo producto" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button type='danger' key="cancel" onClick={this.handleCancel}>Cancelar</Button>,
            <Button type='primary' key="submit" onClick={editing ? this.updateProduct:this.handleOk}>{editing ? "Actualizar":"Crear producto"}</Button>
          ]}
        >
          <ModalForm {...product} onChange={this.onChange} />
        </Modal>
      </div>
        </div>
    )
  }
}



export default AdminProducts;