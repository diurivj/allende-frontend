import React, { Component } from 'react';
import './Admin.css';
import { Card, Icon, Avatar, Tooltip } from 'antd';
import { Divider } from 'antd';

const { Meta } = Card;

class DistribuidorPerfil extends Component {
    render() {
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
                                <Icon type="download" />
                            </Tooltip>, <Tooltip title="Editar">
                                <Icon type="edit" />
                            </Tooltip>]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Distribuidor Bajío"
                            />
                            <br/>
                            <div style={{textAlign:"left"}}>
                                <Divider/>
                                <h2>Información general</h2>
                                <p>Dirección: Av. Juarez #120</p>
                                <p>C.P: 43740 </p>
                                <p>Ciudad: Guanajuato</p>
                                <p>Estado: Guanajuato</p>
                                <p>País: México</p>
                                <Divider/>
                                <h2>Datos de contacto</h2>
                                <p>Nombre del encargado: David Zavala</p>
                                <p>Teléfono: 775 760 92 76</p>
                                <p>Email: admin@bajio.com</p>
                                <Divider/>
                                <h2>Comentarios de entrega</h2>
                                <p>Solo entregar despues de las 7pm</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default DistribuidorPerfil;