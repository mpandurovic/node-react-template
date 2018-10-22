import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import Button from '../../components/Buton/Button';
import './Signup.scss';

export default () => (
  <div className="row justify-content-md-center">
    <Form className="signup-form">
      <FormGroup>
        <Label htmlFor="signup-email">Email:</Label>
        <Input field="email" id="signup-email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="signup-password">Password:</Label>
        <Input type="password" field="password" id="signup-password" />
      </FormGroup>
      <Button className="btn-block" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);
