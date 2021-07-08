import React, {Component} from 'react';
import { Button, Form, Input, Checkbox} from 'antd';
import {Link} from "react-router-dom"
import toastr from 'toastr'
import swal from 'sweetalert2'
import {saveClient, getOneClient, getClients} from '../../services/clienteService'

const FormItem = Form.Item;
const { TextArea } = Input;
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class ClienteDetailDisplay extends Component{
   state = {
       client : {}
   }

componentWillMount(){
       const id = this.props.match.params.id
       if(id){
             this.getClient(id)
       }
}

getClient = (id) => {
    getOneClient(id)
    .then(client=>{
        console.log(client)
        this.setState({client})
    })
    .catch(e=>{
            toastr.error("No se pudo cargar el cliente")
    })
}

handleInput = (e) => {
       const {client} = this.state
       client[e.target.name] = e.target.value
       this.setState({client})
}

submitClient = () => {
       const {client} = this.state
       swal({
              title: '¿Está todo bien?',
              text: "Asegurate de que todos los datos sean correctos",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, Guardar!'
            }).then((result) => {
              if (result.value) {
                saveClient(client)
                .then(client=>{
                     swal(
                            'Actualizado!',
                            'Tu lista de clientes se ha actualizado.',
                            'success'
                          )
                          this.props.history.push('/dist/clientes')
                })
                .catch(e=>{
                     swal(
                            'Oops!',
                            'No pudimos guardar tu cliente, intenta de nuevo',
                            'error'
                          )   
                })
               
              }
            })

}



     
 render(){
        const { 
               business_name, 
              rfc,
              phone,
              email,
              contact_name,
              credit_amount,
              credit_days,
              discount,
              delivery_address_street,
              delivery_address_number,
              delivery_address_int,
              delivery_address_neighborhood,
              delivery_address_zip_code,
              delivery_address_state,
              delivery_address_city,
              business_address_street,
              business_address_number,
              business_address_int,
              business_address_neighborhood,
              business_address_zip_code,
              business_address_state,
              business_address_city,
              comments} = this.state.client
    return(
        <div className="pedidos" >
            <h2>Nombre del cliente</h2>
            <br/>
            <Form style={{textAlign:"left"}}>

            <div className="form_flex">
            
              <FormItem label="Nombre o Razón Social"></FormItem>
              <Input placeholder="Razón Social"
                     type='text'
                     name='business_name'
                     onChange={this.handleInput}
                     value={business_name}
                     />

              <FormItem label="RFC"></FormItem>
              <Input placeholder="13 digitos"
                     type='text'
                     name='rfc'
                     onChange={this.handleInput}
                     value={rfc}
                     />
            </div>

            <div className="form_flex">
              <FormItem label="Correo Electrónico"></FormItem>
              <Input placeholder="Email"
                     type='email'
                     name='email'
                     onChange={this.handleInput}
                     value={email}
                     />

              <FormItem label="Nombre de contacto"></FormItem>
              <Input placeholder="Nombre"
                     type='text'
                     name='contact_name'
                     onChange={this.handleInput}
                     value={contact_name}
                     />

              <FormItem label="Teléfono"></FormItem>
              <Input placeholder="Teléfono"
                     type='text'
                     name='phone'
                     onChange={this.handleInput}
                     value={phone}
                     />

            </div>


            <FormItem label="Dirección Fiscal">
              <div className="form_flex">
                <Input placeholder="Calle"
                       type="text"
                       name="business_address_street"
                       onChange={this.handleInput}
                       value={business_address_street}
                />
                <Input placeholder="Número"
                       type="number"
                       name="business_address_number"
                       onChange={this.handleInput}
                       value={business_address_number}
                />
                <Input placeholder="Interior"
                       type="number"
                       name="business_address_int"
                       onChange={this.handleInput}
                       value={business_address_int}
                />
              </div>
              <div className="form_flex">
                <Input placeholder="Código Postal"
                       type='number'
                       name="business_address_zip_code"
                       onChange={this.handleInput}
                       value={business_address_zip_code}
                />
                <Input placeholder="Colonia"
                       type='text'
                       name="business_address_neighborhood"
                       onChange={this.handleInput}
                       value={business_address_neighborhood}
                />
                <Input placeholder="Estado"
                       type='text'
                       name="business_address_state"
                       onChange={this.handleInput}
                       value={business_address_state}
                />
              </div>
            </FormItem>

          
            
            <FormItem label="Comentarios">
              <TextArea onChange={this.handleInput} name='comments' autosize={{ minRows: 2, maxRows: 6 }} placeholder="Horarios de entrega, comentarios generales, y más..."
              value={comments}
              />
            </FormItem>

            <br/>

            <div style={{float:"right"}}>
              <Link to="/dist/clientes">
                <Button style={{marginRight:"20px"}}>Cancelar</Button>
              </Link>
            
                <Button onClick={this.submitClient} type="primary">Guardar</Button>
            
            </div>

          </Form>


        </div>
    )
}
}

export default ClienteDetailDisplay