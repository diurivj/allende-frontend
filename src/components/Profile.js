import React from 'react';
import {Card} from 'antd';

class Profile extends React.Component {

  state = {
    user: {}
  };

  componentWillMount() {
    let id = this.props.match.params.id;
    fetch(`https://backendallende.herokuapp.com/auth/profile/${id}`)
      .then(user => user.json())
      .then(user => {
        console.log(user);
        this.setState({user})
      })
      .catch(err => console.log(err))
  }

  render() {
    const {user} = this.state;
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100vw', height: '100vh'}}>

        <Card style={{width: '40%', margin:'2%'}} title={user.business_name}>
          <h3>Nombre de Contacto: </h3>
          <p>{user.contact_name}</p>
          <h3>Email de Contacto: </h3>
          <p>{user.email}</p>
          <h3>Número de Contacto: </h3>
          <p>{user.phone}</p>
          <h3>RFC: </h3>
          <p>{user.rfc}</p>
        </Card>

        <Card style={{width: '40%', margin:'2%'}} title='Código QR'>
          <img src={user.QR} alt=""/>
        </Card>

      </div>
    )
  }
}

export default Profile;