import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { Alert } from '@mui/material';
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

const register = () => {
  const router = useRouter()
  const [responseMsg, setResponseMsg] = useState({ msgLabel: '', msgType: '' })
  const addNewUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.status) {
        setResponseMsg({ msgLabel: result.msg, msgType: response.status == 409 ? 'error' : 'success' })
      }

    } catch (error) {
      setResponseMsg({ msgLabel: error.msg, msgType: 'error' })
      console.error("Error posting data:", error);
    }
  }
  return (
    <>
      <div className='form-top'>
        {responseMsg.msgType && <Alert severity={responseMsg.msgType} onClose={() => setResponseMsg({ msgLabel: '', msgType: '' })}> {responseMsg.msgLabel} </Alert>}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            addNewUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>

              <div className='form-validation'>
                <label for="fname">First name</label><br />
                <Field placeholder="Enter your firstname" name="firstName" type="text" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}<br />
                <label for="lname">Last name</label><br />
                <Field placeholder="Enter your last name" name="lastName" type="text" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}<br />
                <label for="email">Email</label><br />
                <Field placeholder="Enter your email" name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}<br />
                <label for="password">Password</label><br />
                <Field placeholder="Enter password" name="password1" type="password" />
                {errors.password1 && touched.password1 ? (
                  <div>{errors.password1}</div>
                ) : null}<br />
                <label for="confirm password">Confirm Password</label><br />
                <Field placeholder="Confirm password" name="password2" type="password" />
                {errors.password2 && touched.password2 ? (
                  <div>{errors.password2}</div>
                ) : null}
              <p style={{color:'grey',paddingTop:'14px',paddingLeft:'4px',paddingBottom:'4px'}}>By signing in or creating an account, you agree with our <span style={{color:'black'}}>Terms & Conditions</span> and <span style={{color:'black'}}>Privacy Statement</span></p>
                
                <button type="submit">SIGN UP</button>
                <div style={{height:'1px',backgroundColor:'white',paddingTop:'9px'}} onClick={() => router.push('./login')}>
                  <p style={{paddingTop:'18px'}}>Already have an account/Sign In</p>
                </div>
              
                  
                
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )

};
export default register