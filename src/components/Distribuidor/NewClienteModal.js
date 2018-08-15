import React, {Component} from 'react';
import {Button, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

const FormItem = Form.Item;




class NewClienteModal extends Component {

    render() {

        return (
            <div>
                <Form >
                    <FormItem label="Nombre o Razón Social">
                            <Input />
                    </FormItem>
                    <FormItem label="Calle">
                        <Input />
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default NewClienteModal;