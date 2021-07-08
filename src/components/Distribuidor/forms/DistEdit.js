import React, {Component} from 'react';
import { Button, Form, Input, Checkbox} from 'antd';
import {Link} from 'react-router-dom';
import toastr from 'toastr';
//import {createDistributor, updateDistributor, getOneDistributor} from '../../services/distributorService'

const FormItem = Form.Item;
const { TextArea } = Input;


class DistEdit extends Component {

  state = {
    dist: {},
    updating: false
  };

//   getDistributor = (id) => {
//     return getOneDistributor(id)
//     .then(dist=>dist)
//     .catch(e=>{})
//   }

  handleInput = (e) => {
    this.props.handleInput(e)
  };

//   handleSubmit = () => {
//     const {dist} = this.state;
//     console.log(dist);
//     createDistributor(dist)
//     .then(d=>{
//       console.log(d)
//       toastr.success("Distribuidor creado")
//       //redireccionar a la lista
//       this.props.history.push("/admin/dist")
//     })
//     .catch(e=>{
//       console.log(e)
//       toastr.error("No se pudo crear")
//     })
//   };

//   handleUpdate = () => {
//     const {dist} = this.state;
//     updateDistributor(dist)
//     .then(d=>{
//       console.log(d)
//       toastr.success("Distribuidor Actualizado")
//       //redireccionar a la lista
//       this.props.history.push("/admin/dist")
//     })
//     .catch(e=>{
//       console.log(e)
//       toastr.error("No se pudo Actualizar")
//     })
//   }

//   onChange = (e) => {
//     const field = e.target.name
//     const value = e.target.value
//     const {dist} = this.state
//     dist[field] = value
//     this.setState({dist})
// }

// componentWillMount(){
//   const id = this.props.match.params.id
//   if(id) {
//     this.getDistributor(id)
//     .then(dist=>{
//       console.log(dist)
//       this.setState({updating:true, dist})
//     })
    
//   }
// }

  render() {
    const {updating, dist} = this.props
    console.log(dist)
    const {business_name, 
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
            comments
          } = dist
    return (
      <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1',
        flexDirection: 'column' }}>

        <div className="pedidos" >
          <h2>Nombre del Distribuidor</h2>

          <br/>

          <Form style={{textAlign:"left"}}>

            <div className="form_flex">
            
              <FormItem label="Nombre o Razón Social"></FormItem>
              <Input placeholder="Razón Social"
                    disabled
                     type='text'
                     name='business_name'
                     onChange={this.handleInput}
                     value={business_name}
                     />

              <FormItem label="RFC"></FormItem>
              <Input placeholder="13 digitos"
                    disabled
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

            {/* <Checkbox onChange={this.onChange}>Utilizar también como dirección de enterga</Checkbox> */}

            <FormItem label="Dirección Entrega">
              <div className="form_flex">
                <Input placeholder="Calle"
                       type="text"
                       name="delivery_address_street"
                       onChange={this.handleInput}
                       value={delivery_address_street}
                />
                <Input placeholder="Número"
                       type="number"
                       name="delivery_address_number"
                       onChange={this.handleInput}
                       value={delivery_address_number}
                />
                <Input placeholder="Interior"
                       type="number"
                       name="delivery_address_int"
                       onChange={this.handleInput}
                       value={delivery_address_int}
                />
              </div>

              <div className="form_flex">
                <Input placeholder="Código Postal"
                       type='number'
                       name="delivery_address_zip_code"
                       onChange={this.handleInput}
                       value={delivery_address_zip_code}
                />
                <Input placeholder="Colonia"
                       type='text'
                       name="delivery_address_neighborhood"
                       onChange={this.handleInput}
                       value={delivery_address_neighborhood}
                />
                <Input placeholder="Estado"
                       type='text'
                       name="delivery_address_state"
                       onChange={this.handleInput}
                       value={delivery_address_state}
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
                <Button onClick={this.props.handleCancel} style={{marginRight:"20px"}}>Cancelar</Button>

                <Button onClick={this.props.handleSubmit} type="primary">Actualizar</Button>
              
            </div>

          </Form>

        </div>
      </div>
    )
  }
}

export default DistEdit;