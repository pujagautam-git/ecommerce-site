import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password1: Yup.string()
    .required('Required'),
  
});

const login = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password:'',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
        
          <div className='form'>
          <Field  placeholder="Enter your email or user"name="email" type="email" />
          {errors.email && touched.email ?(
             <div>{errors.email}</div>
           ) : null}<br/>
          <Field placeholder="Password"name="password" type="password" />
          {errors.password && touched.password ?(
             <div>{errors.password}</div>
           ) : null}<br/>
          <button type="submit">Login</button>
          <p>Forgot password?</p>
          </div>
        
        </Form>
      )}
    </Formik>
  </div>
);
export default login