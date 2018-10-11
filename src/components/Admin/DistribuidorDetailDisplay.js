import React from 'react';
import { Button, Form, Input, Checkbox} from 'antd';
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const { TextArea } = Input;
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
export const DistribuidorDetailDisplay  = () => {
    return(
        <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

        <div className="pedidos" >
            <h2>Nombre del Distribuidor</h2>
            <br/>
            <Form style={{textAlign:"left"}}>
                <div className="form_flex">
                    <FormItem label="Nombre o Razón Social">

                    </FormItem><Input placeholder="Nombre"/>
                    <FormItem label="RFC">

                    </FormItem>  <Input  placeholder="18 digitos"/>
                </div>
                <div className="form_flex">
                    <FormItem label="Linea de credito:">

                    </FormItem>

                    <Input type="number" placeholder="Cantidad"/>
                    <FormItem label="Dias de credito:">

                    </FormItem>  <Input type="number" placeholder="Dias"/>
                    <FormItem label="Porcentaje de descuento">

                    </FormItem>  <Input type="number" placeholder="%"/>
                </div>
                <FormItem label="Direccion Fiscal">
                    <div className="form_flex">
                        <Input  placeholder="Calle"/>
                        <Input  placeholder="Número"/>
                        <Input  placeholder="Interior"/>
                    </div>
                    <div className="form_flex">
                        <Input  placeholder="CP"/>
                        <Input  placeholder="Colonia"/>
                        <Input  placeholder="Pais"/>
                    </div>
                </FormItem>
                <Checkbox onChange={onChange}>Utilizar también como dirección de enterga</Checkbox>

                <FormItem label="Direccion Entrega">
                    <div className="form_flex">
                        <Input  placeholder="Calle"/>
                        <Input  placeholder="Número"/>
                        <Input  placeholder="Interior"/>
                    </div>
                    <div className="form_flex">
                        <Input  placeholder="CP"/>
                        <Input  placeholder="Colonia"/>
                        <Input  placeholder="Pais"/>
                    </div>
                </FormItem>
                <FormItem label="Comentarios">
                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} placeholder="Horarios de entrega, comentarios generales, y más..."/>
                </FormItem>
                <br/>
                <div style={{float:"right"}}>
                    <Link to="/admin/dist">
                        <Button style={{marginRight:"20px"}}>Cancelar</Button>
                    </Link>
                    <Button type="primary">Guardar</Button>
                </div>

            </Form>


        </div>
        </div>
    )
};