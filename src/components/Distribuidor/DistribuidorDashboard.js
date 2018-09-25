import React, { Component } from 'react';
import { Card, Icon } from 'antd';

class DistribuidorDashboard extends Component {
    render() {
        return (
            <div className="pedidos">
                <h2>Resumen</h2>
                <br/>
                 <div className="bx" style={{width:"90%"}}>
                <div className="tops">
                    <Card
                        hoverable

                        title="Producto más vendido" bordered={true} style={{ width:"100%", height:"300px" }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className="tops">
                    <div className="noti flex" style={{justifyContent:"center"}}>
                        <h3 >Notificaciones</h3>
                    </div>
                    <div className="single">
                        <Icon className="i" type="exclamation-circle-o" />

                        pollin
                    </div>
                </div>
            </div>
                <div className="bx" style={{width:"90%"}}>
                    <div className="tops">
                        <Card
                            hoverable

                            title="Cliente frecuente" bordered={true} style={{ width:"100%", height:"250px" }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                    <div className="tops">
                        <Card
                            hoverable

                            title="Compras" bordered={true} style={{ width:"100%", height:"250px" }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>

                </div>
            </div>
        );
    }
}

export default DistribuidorDashboard;
