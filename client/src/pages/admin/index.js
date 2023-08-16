import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const register = () => {

    const handleAddProducts=(values)=>{
      fetch('http://localhost:8080/products',
     {method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(values)})
     }
  
return(

  <div>
    
    <Formik 
      initialValues={{
        productName: '',
        productCategory: '',
        productPrice: '',
        productDescription:''
  
      }}
      onSubmit={values => {
        handleAddProducts(values)
      }}
    >     
      {({ errors, touched }) => (
        <Form>
          <div className='form-validation'>
          <label for="pname">Product Name</label><br/>
          <Field placeholder="Enter your productName" name="productName"  />
          {errors.productName && touched.productName ? (
            <div>{errors.productName}</div>
          ) : null}<br/>
          <label for="pcategory">Product Category</label><br/>
          <Field placeholder="Enter your productCategory "name="productCategory"  />
          {errors.productCategory && touched.productCategory ? (
            <div>{errors.productCategory}</div>
          ) : null}<br/>
          <label for="pprice">Product Price</label><br/>
          <Field placeholder="Enter your productPrice"name="productPrice" />
          {errors.productPrice && touched.productPrice ?(
             <div>{errors.productPrice}</div>
           ) : null}<br/>
           <label for="pdescription">Product Description</label><br/>
          <Field  placeholder="Description"name="productDescription" textarea />
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