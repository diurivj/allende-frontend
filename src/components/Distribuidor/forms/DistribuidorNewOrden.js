import React from 'react';
import '../Admin.css';
import { Form, Input, Select, InputNumber, DatePicker } from 'antd';

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

export const DistribuidorNewOrden  = () => {
    return(
            <div >
                <Form >
                    <FormItem label="Cliente">
                        <Select defaultValue="Elige uno de tus clientes" style={{ width:"100%" }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Fecha de entrega">
                        <DatePicker  onChange={onChange} />
                    </FormItem>

                        <div className="flexito">
                        <FormItem label="IPA" style={{ width:"60%" }}>
                            <InputNumber  min={1} max={100} defaultValue={10} onChange={onChange} />
                        </FormItem>
                        <FormItem label="IPA" style={{ width:"60%" }}>
                            <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                        </FormItem>
                        <FormItem label="IPA" style={{ width:"60%" }}>
                            <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                        </FormItem>
                        <FormItem label="IPA" style={{ width:"60%" }}>
                            <InputNumber min={1} max={100} defaultValue={10} onChange={onChange} />
                        </FormItem>
                        </div>
                    <FormItem >Total: $400.00</FormItem>
                    <FormItem label="Forma de pago">
                        <Select defaultValue="Opcion" style={{ width:"100%" }} onChange={handleChange}>
                            <Option value="jack">Efectivo</Option>
                            <Option value="lucy">Transferencia Electrónica</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>

                </Form>

            </div>
        );
    }
