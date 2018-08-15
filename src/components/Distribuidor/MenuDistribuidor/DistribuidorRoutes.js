import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import DistribuidorContainer from '../DistribuidorContainer';
import DistribuidorDashboard from '../DistribuidorDashboard';
import DistribuidorPedidos from '../DistribuidorPedidos';
import {PedidoDetailDisplay} from '../PedidoDetailDisplay';
import DistribuidorOrden from '../DistribuidorOrden';
import DistribuidorClientes from '../DistribuidorClientes';

class AdminRoutes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/dist' component={DistribuidorDashboard} />
                <Route exact path="/dist/pedidos" component={DistribuidorPedidos}/>
                <Route path="/dist/pedidos/id" component={PedidoDetailDisplay}/>
                <Route path="/dist/ordenes" component={DistribuidorOrden}/>
                <Route path="/dist/clientes" component={DistribuidorClientes}/>
            </Switch>
        )
    }
}

export default AdminRoutes;