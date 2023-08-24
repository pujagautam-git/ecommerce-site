import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { setUserDetails } from "../redux/reducerSlices/userSlice"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password1: Yup.string()
    .required('Required'),

});

const login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoggedIn } = useSelector((state) => state.user);

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if(result.success) {
        dispatch(setUserDetails(result));
        setResponseMsg({
            msgLabel: "Login successful, Welcome!",
            msgType: "success",
          });
          router.push('/profile')
      }else {
        setResponseMsg({ msgLabel: result.msg, msgType: "error" });
      }
      
    } catch (error) {
      setResponseMsg({ msgLabel: "error.msg", msgType: "error" });
      console.error("Error posting data:", error);
    }
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',

          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            handleLogin(values);
            router.push('/profile')
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='form'>
                <Field placeholder="Enter your email or user" name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}<br />
                <Field placeholder="Password" name="password" type="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}<br />
                <p style={{color:'grey',paddingTop:'14px',paddingLeft:'4px',paddingBottom:'4px'}}>By signing in or creating an account, you agree with our <span style={{color:'black'}}>Terms & Conditions</span> and <span style={{color:'black'}}>Privacy Statement</span></p>
                <button type="submit">Login</button>
                <p>Forgot password?</p>
                <div style={{ height: '1px', backgroundColor: 'white', paddingTop: '9px' }} onClick={() => router.push("./register")}>
                  <p style={{ paddingTop: '1px' }}>Don't have an account/Sign Up</p>
                </div>
                </div>
                  <p style={{color:'black',marginBottom:'29px'}}>All rights reserved. Copyright 2023 – Vashh.com™ </p>
                
              
            
        
        </Form>
      )}
      </Formik>
    </div >
    </>
)
};
export default login;