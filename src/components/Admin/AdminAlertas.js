import React, { Component } from 'react';
import { Transfer, Button, Modal } from 'antd';
import './Administrador.css';
import {AlertaModal} from './AlertaModal';
import { Table, Switch, Icon } from 'antd';
import { Form, Input } from 'antd';
//services
import { createAlert, getAdminAlerts, updateAlert, removeAlert } from '../../services/alertService';
import toastr from 'toastr'


const FormItem = Form.Item;
const { TextArea } = Input;


const { Column } = Table;


const data = [{
    key: '1',
    texto:"hola",
    status: () => <Icon type="download" />
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],

}];


class AdminDashboard extends Component {

    state = {
        alerts:[],
        visible: false ,
        newAlert:{}
    }

    componentWillMount(){
        this.getAlerts()
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {newAlert} = this.state
        newAlert[field] = value
        this.setState({newAlert})
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        
        createAlert(this.state.newAlert)
        .then(alert=>{
            const {alerts} = this.state
            alerts.unshift(alert)
            this.setState({alerts, visible:false})
        })
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    getAlerts = () => {
        getAdminAlerts()
        .then(alerts=>{
            this.setState({alerts})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudieron cargar")
        })
    }

    changeActive = (bool, alert) => {
        alert.active = bool
        updateAlert(alert)
        .then(()=>{
           let {alerts} = this.state
           alerts = alerts.map(a=>{
               if(a._id === alert._id) return alert
               return a
           }) 
           this.setState({alerts})
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudieron cargar")
        })
    }

    deleteAlert = (alert) => {
        if(!window.confirm("¿Estas segur@ de borrar?")) return
        removeAlert(alert)
        .then(()=>{
            let {alerts} = this.state
            alerts = alerts.filter(a=>a._id !== alert._id) 
            this.setState({alerts})
         })
         .catch(e=>{
             console.log(e)
             toastr.error("No se pudieron cargar")
         })
    }


    render() {
        const {alerts} = this.state;
        return (
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Alertas</h2>
                <br/>
                <Table dataSource={alerts}>
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
                        title="Texto"
                        dataIndex="text"
                        key="text"
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
                        render={(data, o)=><Button type="primary" onClick={()=>this.deleteAlert(o)} >Eliminar</Button>}
                    />



                </Table>
                
                <Button className='btn_float' type="primary"  onClick={this.showModal}>Agregar Alerta</Button>
                <Modal
                    title="Agrega una nueva alerta"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                     <Form >
                        <FormItem label="Contenido de la Alerta">
                            <Input placeholder="Nombre de la alerta" onChange={this.onChange} name="name" />
                            <TextArea maxLength="80" placeholder="Texto de la alerta" onChange={this.onChange} name="text" autosize={{ minRows: 2, maxRows: 6 }} />
                        </FormItem>
                    </Form>
    
                </Modal>

            </div>
            </div>
        );
    }
}

export default AdminDashboard;