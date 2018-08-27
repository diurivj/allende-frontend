import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import DistribuidorDashboard from '../DistribuidorDashboard';
import DistribuidorPedidos from '../DistribuidorPedidos';
import {PedidoDetailDisplay} from '../PedidoDetailDisplay';
import DistribuidorOrden from '../DistribuidorOrden';
import DistribuidorProspectos from '../DistribuidorProspectos';
import DistribuidorPerfil from '../DistribuidorPerfil';
import {OrdenDetailDisplay} from '../OrdenDetailDisplay';
import DistribuidorCompras from '../historial/DistribuidorCompras';
import DistribuidorVentas from '../historial/DistribuidorVentas';
import ProductosContainer from '../catalogo/ProductosContainer';
import PromoContainer from '../catalogo/PromoContainer';
import DistribuidorClientes from '../DistribuidorClientes';
import {ClienteDetailDisplay} from '../ClienteDetailDisplay';

class AdminRoutes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/dist' component={DistribuidorDashboard} />
                <Route exact path="/dist/pedidos" component={DistribuidorPedidos}/>
                <Route path="/dist/pedidos/id" component={PedidoDetailDisplay}/>
                <Route exact path="/dist/ordenes" component={DistribuidorOrden}/>
                <Route  path="/dist/ordenes/id" component={OrdenDetailDisplay}/>
                <Route path="/dist/prospectos" component={DistribuidorProspectos}/>
                <Route path="/dist/perfil" component={DistribuidorPerfil}/>
                <Route path="/dist/compras" component={DistribuidorCompras}/>
                <Route path="/dist/ventas" component={DistribuidorVentas}/>
                <Route path="/dist/productos" component={ProductosContainer}/>
                <Route path="/dist/promos" component={PromoContainer}/>
                <Route exact path="/dist/clientes" component={DistribuidorClientes}/>
                <Route path="/dist/clientes/id" component={ClienteDetailDisplay}/>
            </Switch>
        )
    }
}

export default AdminRoutes;