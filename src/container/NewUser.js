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
    request.getData('/api/user/list');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // request.postDataNew('/api/user/test',values)
        request.getData('/api/user/list');
        request.postDataNew('/api/user/new',values);
        // request.postData("/api/user/new",values);

      }else{
        console.error(err);
      }
    });
  }

  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const userAgeError = isFieldTouched('age') && getFieldError('age');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={nameError ? 'error' : ''}
          help={nameError || ''}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
          )}
        </FormItem>
        <FormItem
          validateStatus={userAgeError ? 'error' : ''}
          help={userAgeError || ''}
        >
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your age!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Age" />
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
        <h2>New User:</h2>
        <WrappedNewUserForm/>
      </div>
    )
  }

}