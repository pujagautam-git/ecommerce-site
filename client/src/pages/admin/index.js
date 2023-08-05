import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const register = () => {
    const handleAddProducts = (values)=>{
      fetch('http://localhost:8080/products', 
      {method:'POST',
       headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify(values)})
    }
    return(
  <div>
    <h1>Add Product</h1>
    <Formik
      initialValues={{
        productName: '',
        productCategory:'',
        productPrice: '',
        productDescription:''
      }}
     
      onSubmit={values => {
        // same shape as initial values
        handleAddProducts(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
           
          <div className='form-validation'>
          <label for="pname">ProductName</label><br/>
          <input placeholder="productname" name="productname" type="text" />
          {errors.productName && touched.productName ? (
            <div>{errors.productName}</div>
          ) : null}<br/>
          <label for="pcategory">Product Category</label><br/>
          <input placeholder="productCategory"name="productCategory" type="text" />
          {errors.productCategory && touched.productCategory ? (
            <div>{errors.productCategory}</div>
          ) : null}<br/>
          <label for="productPrice">productPrice</label><br/>
          <input  placeholder="Enter your productPrice"name="productPrice" type="productPrice" />
          {errors.productPrice && touched.productPrice ?(
             <div>{errors.productPrice}</div>
           ) : null}<br/>
           
           <label for="pdescription">product Description</label><br/>
          <input  placeholder="description"name="productDescription" type="textarea" />
          {errors.productDescription && touched.productDescription ?(
             <div>{errors.productDescription}</div>
           ) : null}<br/>
           

          <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)
          }
export default register