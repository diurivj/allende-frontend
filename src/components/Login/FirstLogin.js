import React, { Component } from 'react';
import {Spin} from 'antd';

class FirstLogin extends Component{

  componentWillMount() {
    let query = this.props.history.location.search.split('?');
    let email = query[1].split('=');
    let pass = query[2].split('=');
    //consumir servicio aquí de login para redireccionar a cambiar contraseña
    fetch('http://localhost:3000/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email[1], password: pass[1] })
    })
      .then(user => user.json())
      .then(user => {
        const {active, email} = user.user;
        if (!active) return this.props.history.push(`/change_password?email=${email}`);
        return this.props.history.push('/');
      })
      .catch(err => console.log(err))
  }

  state = {
    user: {}
  };

  render() {
    return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Spin />
      </div>
    )
  }
}

export default FirstLogin;