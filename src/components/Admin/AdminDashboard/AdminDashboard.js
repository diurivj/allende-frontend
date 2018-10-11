import React, { Component } from 'react';
import ChartContainer from './ChartContainer';
import { Card, Icon } from 'antd';


class AdminDashboard extends Component {
  render() {
    return (

      <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
        <div className="pedidos">
          <h2>Resumen</h2>
          <br/>
          <div className="bx" style={{width:"90%"}}>
            <div className="tops">
              <Card
                  hoverable

                  title="Producto más vendido" bordered={true} style={{ width:"100%", height:"280px" }}>
                <ChartContainer />
              </Card>
            </div>
            <div className="tops" style={{ height:"280px",    overflowY: "scroll"}}>
              <div className="noti flex" style={{justifyContent:"center"}}>
                <h3 >Notificaciones</h3>
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
              </div>
              <div className="single">
                <Icon className="i" type="exclamation-circle-o" />

                pollin
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

                  title="Clientes frecuente" bordered={true} style={{ width:"100%", height:"280px" }}>
                <ChartContainer />
              </Card>
            </div>
            <div className="tops">
              <Card
                  hoverable

                  title="Ventas" bordered={true} style={{ width:"100%", height:"280px" }}>
                <ChartContainer />
              </Card>
            </div>

          </div>
        </div>




      </div>
    );
  }
}

export default AdminDashboard;