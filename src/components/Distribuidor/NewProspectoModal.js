import React, {Component} from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;



export const NewProspectoModal  = ({name, adress, telefono, comments}) => {

        return (
            <div>
                <Form >
                    <FormItem label="Nombre o Razón Social">
                        <Input type="text" name="name" onChange={this.handleInput} value={name} placeholder="Razón Social"/>
                    </FormItem>
                    <FormItem label="Dirección">
                        <Input type="text" name="adress" onChange={this.handleInput} value={adress} placeholder="Dirección completa"/>
                    </FormItem>
                    <FormItem label="Teléfono">
                        <Input type="text" name="telefono" onChange={this.handleInput} value={telefono} placeholder="55 555 55 55"/>
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea type="text" name="comments" onChange={this.handleInput} value={comments} autosize={{ minRows: 2, maxRows: 6 }} placeholder="Comentarios u anotaciones"/>
                    </FormItem>

                </Form>
            </div>
        )
    };
