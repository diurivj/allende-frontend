import React, {Component} from 'react';
import {Card, Icon, Input, Form, Button} from 'antd';

class ChangePassword extends Component {

  componentWillMount() {
    let email = this.props.history.location.search.split('=')[1];
    this.setState({email})
  }

  state = {email: ''};

  handleSubmit = (e) => {
    const {email} = this.state;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {password} = values;
        fetch('http://localhost:3000/auth/change_password', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        })
          .then(r => r.json())
          .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return this.props.history.push('/')
          })
          .catch(e => console.log(e))
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    const greeting = 'Bienvenido';
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh'}}>
        <Card hoverable={true} title={greeting} style={{ width: '300px' }}>
          <p>Actualiza tu password</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="New Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Password" onBlur={this.handleConfirmBlur}/>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Actualizar</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

const WrappedForm = Form.create()(ChangePassword);
export default WrappedForm;