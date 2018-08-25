import React, {Component} from 'react';
import {Button, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;




class NewClienteModal extends Component {

    render() {

        return (
            <div>
                <Form >
                    <FormItem label="Nombre o Razón Social">
                        <Input />
                    </FormItem>
                    <FormItem label="Dirección">
                        <Input />
                    </FormItem>
                    <FormItem label="Teléfono">
                        <Input />
                    </FormItem>
                    <FormItem label="Comentarios">
                        <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>

                </Form>
            </div>
        );
    }
}

export default NewClienteModal;