import React, {Component} from 'react';
import { Button, Form, Input, Checkbox} from 'antd';
import {Link} from 'react-router-dom';
import toastr from 'toastr';
const FormItem = Form.Item;
const { TextArea } = Input;

class DistribuidorDetailDisplay extends Component {

  state = {
    dist: {}
  };

  handleInput = (e) => {
    const {dist} = this.state;
    const field = e.target.name;
    dist[field] = e.target.value;
    this.setState({dist});
  };

  handleSubmit = () => {
    const {dist} = this.state;
    console.log(dist);
    fetch('https://backendallende.herokuapp.com/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dist)
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        toastr.success('¡Distribuidor creado!');
        return this.props.history('/admin/dist')
      })
      .catch(err => console.log(err))
  };

  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  };

  render() {
    return (
      <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1',
        flexDirection: 'column' }}>

        <div className="pedidos" >
          <h2>Nombre del Distribuidor</h2>

          <br/>

          <Form style={{textAlign:"left"}}>

            <div className="form_flex">
              <FormItem label="Nombre o Razón Social"></FormItem>
              <Input placeholder="Nombre"
                     type='text'
                     name='business_name'
                     onChange={this.handleInput}/>

              <FormItem label="RFC"></FormItem>
              <Input placeholder="18 digitos"
                     type='text'
                     name='rfc'
                     onChange={this.handleInput}/>
            </div>

            <div className="form_flex">
              <FormItem label="Correo Electrónico"></FormItem>
              <Input placeholder="Email"
                     type='email'
                     name='email'
                     onChange={this.handleInput}/>

              <FormItem label="Nombre de contacto"></FormItem>
              <Input placeholder="Nombre"
                     type='text'
                     name='contact_name'
                     onChange={this.handleInput}/>

              <FormItem label="Teléfono"></FormItem>
              <Input placeholder="Teléfono"
                     type='text'
                     name='phone'
                     onChange={this.handleInput}/>

            </div>


            <div className="form_flex">
              <FormItem label="Linea de credito:"></FormItem>
              <Input placeholder="Cantidad"
                     type="number"
                     name='credit_amount'
                     onChange={this.handleInput}
              />

              <FormItem label="Dias de credito:"></FormItem>
              <Input placeholder="Dias"
                     type="number"
                     name='credit_days'
                     onChange={this.handleInput}
              />

              <FormItem label="Porcentaje de descuento"></FormItem>
              <Input placeholder="%"
                     type="number"
                     name="discount"
                     onChange={this.handleInput}
              />
            </div>

            <FormItem label="Direccion Fiscal">
              <div className="form_flex">
                <Input placeholder="Calle"
                       type="text"
                       name="business_address_street"
                       onChange={this.handleInput}
                />
                <Input placeholder="Número"
                       type="number"
                       name="business_address_number"
                       onChange={this.handleInput}
                />
                <Input placeholder="Interior"
                       type="number"
                       name="business_address_int"
                       onChange={this.handleInput}
                />
              </div>
              <div className="form_flex">
                <Input placeholder="CP"
                       type='number'
                       name="business_address_zip_code"
                       onChange={this.handleInput}
                />
                <Input placeholder="Colonia"
                       type='text'
                       name="business_address_neighborhood"
                       onChange={this.handleInput}
                />
                <Input placeholder="Estado"
                       type='text'
                       name="business_address_state"
                       onChange={this.handleInput}
                />
              </div>
            </FormItem>

            <Checkbox onChange={this.onChange}>Utilizar también como dirección de enterga</Checkbox>

            <FormItem label="Direccion Entrega">
              <div className="form_flex">
                <Input placeholder="Calle"
                       type="text"
                       name="delivery_address_street"
                       onChange={this.handleInput}
                />
                <Input placeholder="Número"
                       type="number"
                       name="delivery_address_number"
                       onChange={this.handleInput}
                />
                <Input placeholder="Interior"
                       type="number"
                       name="delivery_address_int"
                       onChange={this.handleInput}
                />
              </div>

              <div className="form_flex">
                <Input placeholder="CP"
                       type='number'
                       name="delivery_address_zip_code"
                       onChange={this.handleInput}
                />
                <Input placeholder="Colonia"
                       type='text'
                       name="delivery_address_neighborhood"
                       onChange={this.handleInput}
                />
                <Input placeholder="Estado"
                       type='text'
                       name="delivery_address_state"
                       onChange={this.handleInput}
                />
              </div>
            </FormItem>

            <FormItem label="Comentarios">
              <TextArea onChange={this.handleInput} name='comments' autosize={{ minRows: 2, maxRows: 6 }} placeholder="Horarios de entrega, comentarios generales, y más..."/>
            </FormItem>

            <br/>

            <div style={{float:"right"}}>
              <Link to="/admin/dist">
                <Button style={{marginRight:"20px"}}>Cancelar</Button>
              </Link>
              <Button onClick={this.handleSubmit} type="primary">Guardar</Button>
            </div>

          </Form>

        </div>
      </div>
    )
  }
}

export default DistribuidorDetailDisplay;