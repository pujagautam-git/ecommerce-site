import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password1: Yup.string()
    .min(6, 'Minimum 6 characters with a name and a letter')
    .max(12, 'Too Long!')
    .required('Required'),
  password2: Yup.string()
  .required('Required'),
});

const register = () => (
  <div>
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password1:'',
        password2:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
           
          <div className='form-validation'>
          <label for="fname">First name</label><br/>
          <input placeholder="Enter your firstname" name="firstName" type="text" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}<br/>
          <label for="lname">Last name</label><br/>
          <input placeholder="Enter your last name"name="lastName" type="text" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}<br/>
          <label for="email">Email</label><br/>
          <input  placeholder="Enter your email"name="email" type="email" />
          {errors.email && touched.email ?(
             <div>{errors.email}</div>
           ) : null}<br/>
           <label for="password">Password</label><br/>
          <input  placeholder="Enter password"name="password1" type="password" />
          {errors.password1 && touched.password1 ?(
             <div>{errors.password1}</div>
           ) : null}<br/>
           <label for="confirm password">Confirm Password</label><br/>
         <input placeholder="Confirm password"name="password2" type="password" />
          {errors.password2 && touched.password2 ?(
             <div>{errors.password2}</div>
           ) : null}<br/>

          <button type="submit">SIGN UP</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
export default register