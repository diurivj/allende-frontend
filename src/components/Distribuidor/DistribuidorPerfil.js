import React, { Component } from 'react';
import './Admin.css';
import { Card, Icon, Avatar, Tooltip, Modal } from 'antd';
import { Divider } from 'antd';
import toastr from 'toastr'
import {getSelfProfile, updateSelfProfile} from '../../services/distributorService'
import DistEdit from './forms/DistEdit'


const { Meta } = Card;

class DistribuidorPerfil extends Component {

    state = {
        profile:{},
        user:{},
        open:false
    }

    handleInput = (e) => {
        const {profile} = this.state;
        const field = e.target.name;
        profile[field] = e.target.value;
        this.setState({profile});
      };

      handleCancel = () => {
        this.setState({open:false})
        window.location.reload()
      }

    handleSubmit = () => {
        const {profile} = this.state
        updateSelfProfile(profile)
        .then(profile=>{
            toastr.info("Tus datos se han actualizado")
            this.setState({open:false})
        })
    }

    componentWillMount(){
        //2.- pedir los datos del usuario
        getSelfProfile()
        .then(user=>{
            this.setState({profile:user.distributor})
            this.setState({user})
        })
        .catch(e=>{
            toastr.error("No se pudieron cargar tus datos")
        })
    }

    render() {
        const {profile, user} = this.state
        return (
            <div className="pedidos">
                <h2>Perfil</h2>
                <br/>
                <div className="box_pedidos">

                    <br/>
                    <div className="bx">
                        <Card
                            style={{ width:"70%", margin:"0 auto" }}
                            actions={[ <Tooltip title="Descargar código QR">
                            <a href={user.QR} download="qrCode.jpg">
                                <Icon type="download" />
                            </a>
                            </Tooltip>, <Tooltip title="Editar">
                                <Icon onClick={()=>this.setState({open:true})} type="edit" />
                            </Tooltip>]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={profile.business_name}
                            />
                            <img src={user.QR} alt="qr" />
                            <br/>
                            <div style={{textAlign:"left"}}>
                                <Divider/>
                                <h2>Información general</h2>
                                <p>Dirección: {profile.business_address_street} #{profile.business_address_number} </p>
                                <p>C.P: {profile.business_address_zip_code} </p>
                                <p>Ciudad: {profile.business_address_city}</p>
                                <p>Estado: {profile.business_address_state}</p>
                                <p>País: México</p>
                                <Divider/>
                                <h2>Datos de contacto</h2>
                                <p>Nombre del encargado: {profile.contact_name}</p>
                                <p>Teléfono: {profile.phone}</p>
                                <p>Email: {profile.email}</p>
                                <Divider/>
                                <h2>Comentarios de entrega</h2>
                                <p>{profile.comments}</p>
                            </div>

                            <Modal 
                                footer={null}
                                width="100%"
                                visible={this.state.open}
                                onCancel={()=>this.setState({open:false})}
                            >
                                <DistEdit 
                                handleSubmit={this.handleSubmit}
                                handleCancel={this.handleCancel}
                                handleInput={this.handleInput}
                                dist={profile} />
                            </Modal>
                        
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default DistribuidorPerfil;