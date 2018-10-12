import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {AdminProfile} from "../AdminProfile";
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminDistribuidores from '../AdminDistribuidores';
import AdminPedidos from '../AdminPedidos';
import AdminProducts from "../AdminProducts/Products/AdminProducts";
//import NewDist from "../AdminDist/NewDist";
import AdminPromos from "../AdminProducts/Promos/AdminPromos";
import AdminVentas from '../AdminVentas';
import AdminAlertas from '../AdminAlertas';
import DistribuidorDetailDisplay from "../DistribuidorDetailDisplay";


class AdminRoutes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={AdminDashboard} />
        <Route path="/admin/ventas" component={AdminVentas}/>
        <Route path="/admin/alertas" component={AdminAlertas}/>
        <Route exact path='/admin/profile' component={AdminProfile} />
        <Route exact path='/admin/dist' component={AdminDistribuidores} />
        <Route path="/admin/dist/id" component={DistribuidorDetailDisplay}/>
        <Route exact path='/admin/pedidos' component={AdminPedidos} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route exact path='/admin/productos' component={AdminProducts} />
        <Route exact path='/admin/promos' component={AdminPromos} />
        {/* <Route exact path='/admin/dist/:id' component={NewDist} /> */}
      </Switch>
    )
  }
}

export default AdminRoutes;