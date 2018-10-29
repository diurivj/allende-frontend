import React from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, Button, Icon, Table} from 'antd';
import FontAwesome from "react-fontawesome"
const { Column, ColumnGroup } = Table;

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(value) {
    console.log('changed', value);
}
function onChange(date, dateString) {
    console.log(date, dateString);
}

export const DistribuidorNewPedido  = ({products=[]}) => {
    console.log(products)
    return(
        <div >
            <Form >
                <h4>Distribuidor</h4>
                {/* <FormItem label="Fecha de entrega requerida">
                    <DatePicker  onChange={onChange} />
                </FormItem> */}
                <p>Genera tu pedido</p>
                <div className="flexito">
                    
                    <FormItem label="Producto">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            {products.map((p,i)=><Option key={i} value={p._id}>{p.name}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem label="Caja(24pzas)">
                       <InputNumber  min={1} max={100} defaultValue={10} onChange={onChange} />
                    </FormItem>
                    <FormItem label="Precio u">
                       <InputNumber  defaultValue={10}  />
                    </FormItem>
                    <FormItem label=" ">
                       <Button type="primary">Agregar</Button>
                    </FormItem>
                </div>
                <div className="flexito">
                    
                    <FormItem label="Promoción">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Pieza">
                       <InputNumber  defaultValue={10} disable />
                    </FormItem>
                    <FormItem label="Precio u">
                       <InputNumber  defaultValue={10}  />
                    </FormItem>
                    <FormItem label=" ">
                       <Button type="primary">Agregar</Button>
                    </FormItem>
                </div>
                <Table rowKey="_id" >
                        <Column
                            title="Nombre"
                            dataIndex="name"
                            key="name"
                        />
            
                        <Column
                            title="Cantidad"
                            dataIndex="num"
                            key="num"
                        />
                        <Column
                            title="Precio/u"
                            dataIndex="price"
                            key="price"
                        />
                          <Column
                            title="Total"
                            dataIndex="total"
                            key="total"
                        />
                        <Column
                            title="Eliminar"
                            dataIndex="remove"
                            key="remove"
                            render={(data, o)=><Button type="primary" onClick={()=>this.deleteDistributor(o)} >Eliminar</Button>}
                        />



                    </Table>




                <FormItem >Total: $400.00</FormItem>

                <FormItem label="Comentarios">
                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                </FormItem>
                <span style={{fontSize:"10px"}}>Recuerda que tu fecha limite de pago es: </span>

            </Form>

        </div>
    );
}
