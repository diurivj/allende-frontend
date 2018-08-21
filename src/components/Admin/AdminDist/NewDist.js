import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Tooltip, Icon,  Button, AutoComplete, Card} from 'antd';
import {addDistri} from "../../../redux/actions/distActions";


const { TextArea } = Input;
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.addDistri(e);
                console.log('Received values of form: ', values);
            }
        });
    };


    handleEmailChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['@gmail.com','@yahoo.com.mx','.mx', '@hotmail.com', '@yahoo.com'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };


        const mailOptions = autoCompleteResult.map(emails => (
            <AutoCompleteOption key={emails}>{emails}</AutoCompleteOption>
        ));

        return (
            <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
                <Card title="Nuevo Distribuidor" style={{margin:'20px', width: '80%' }}>
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Correo Electronico"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'Este correo no es valido.',
                    },{
                            required: true, message: 'Favor de Introducir Correo'
                        }],
                    })(
                        <AutoComplete
                        dataSource={mailOptions}
                        onChange={this.handleEmailChange}
                        placeholder="A donde se envia la invitación"
                        >
                        <Input />
                        </AutoComplete>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
              Razon Social o Persona Fisica&nbsp;
                            <Tooltip title="Favor de introducir datos como en RFC ">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    {getFieldDecorator('razonSocial', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
              RFC&nbsp;
                            <Tooltip title="Favor de introducir datos como en RFC ">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    {getFieldDecorator('rfc', {
                        rules: [{type:'string', required: false, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Nombre de Contacto"
                >
                    {getFieldDecorator('contactName', {
                        rules: [{ type: 'string', required: true, message: 'Nombre de Contacto Requerido' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
              Dirección Fiscal&nbsp;
                            <Tooltip title="Favor de introducir datos como en RFC ">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    {getFieldDecorator('address', {
                        rules: [{ type: 'string', required: false, message: 'Please select your habitual residence!' }],
                    })(
                        <TextArea placeholder="Dirección como aparece en cedula fiscal" autosize />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Telefono"
                >
                    {getFieldDecorator('phoneNumber', {
                        rules: [{type:'number',  message: 'Solo escribir numeros' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Cantidad de Credito"
                >
                    {getFieldDecorator('creditAmount', {
                        rules: [{ type: 'number', required: false, message: 'Nombre de Contacto Requerido' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Dias de Credito"
                >
                    {getFieldDecorator('creditDays', {
                        rules: [{ type: 'number', required: false, message: 'Nombre de Contacto Requerido' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="% de Descuento"
                >
                    {getFieldDecorator('discount', {
                        rules: [{ type: 'number', required: false, message: 'Nombre de Contacto Requerido' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Crear Nuevo</Button>
                </FormItem>
            </Form>
                </Card>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const NewDist=WrappedRegistrationForm;

export default connect(null,{addDistri})(NewDist);