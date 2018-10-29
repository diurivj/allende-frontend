import React, { Component } from 'react';
import {LoginForm} from "./LoginForm";
import './LoginContainer.css';
import {logIn} from "../../services/authServices";
import toastr from 'toastr';

class LoginContainer extends Component{

  state = {
    isLogged: false
  };

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.setState({isLogged:true});
      if (user.role === 'admin') {
        this.props.history.push('/admin')
      } else if (user.role === 'user') {
        this.props.history.push('/dist')
      }
    } else {
      this.setState({isLogged:false})
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    logIn(auth)
      .then(user => {
        console.log(r)
        toastr.success(`Bienvenido ${user.role}`); //cambiar por username
        if(user.role === 'ADMIN') {
          this.props.history.push('/admin');
        } else {
          this.props.history.push('/dist');
        }
      })
      .catch(error => {
        console.log(error);
        toastr.error('Revisa tu correo y/o contraseña');
      })

  };

  render(){
    const {isLogged} = this.state;
    if(isLogged) toastr.success('Bienvenido de vuelta');
    return (
      <div className="container">
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
}

export default LoginContainer;