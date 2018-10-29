import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import AdminRoutes from "./AdminRoutes";

class AdminContainer extends Component{

  componentWillMount() {
    if (!localStorage.getItem('user')){
      return this.props.history.push('/');
    }
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user.role !== 'ADMIN') return this.props.history.push('/dist');
  }

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.props.history.push('/')
  };

  render(){
    return(
      <div style={{ display: 'flex'}}>
        <AdminPanel />
        <AdminRoutes logOut={this.logOut} />
      </div>
    )
  }
}

export default AdminContainer;