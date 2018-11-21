import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import request from '../api/request';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class NewUserForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    // this.getDataFromDb();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        request.postDataNew("/api/putData",values);

      }else{
        console.error(err);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const messageError = isFieldTouched('message') && getFieldError('message');
    const idError = isFieldTouched('age') && getFieldError('age');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={messageError ? 'error' : ''}
          help={messageError || ''}
        >
          {getFieldDecorator('message', {
            rules: [{ required: true, message: 'Please input your message!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="message" />
          )}
        </FormItem>
        <FormItem
          validateStatus={idError ? 'error' : ''}
          help={idError || ''}
        >
          {getFieldDecorator('id', {
            rules: [{ required: true, message: 'Please input your id!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="id" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            New
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewUserForm = Form.create()(NewUserForm);

export default class NewUser extends Component {

  render() {
    return (
      <div>
        <h2>New Message:</h2>
        <WrappedNewUserForm/>
      </div>
    )
  }

}