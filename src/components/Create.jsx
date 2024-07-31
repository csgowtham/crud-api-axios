import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Create() {
  let [name, setName] = useState();
  let [username, setUsername] = useState();
  let [email, setEmail] = useState();
  let [street, setStreet] = useState();
  let [city, setCity] = useState();
  let [zipcode, setZipcode] = useState();
  let [phone, setPhone] = useState();
  let [website, setWebsite] = useState();
  let [companyName, setCompanyName] = useState();
  let [catchPhrase, setCatchPhrase] = useState();
  const address = {
    street,
    city,
    zipcode
  }

  const company = {
    companyName,
    catchPhrase
  }
  let navigate = useNavigate()


  let handleSubmit = async () => {
    try {
      let response = await AxiosService.post(ApiRoutes.CRUD_APP.path,{name,username,email,address,phone,website,company})
      if (response.status === 201) {
        toast.success("User Added successfully!!")
        navigate('/dashboard')
      }
    }
    catch {
      toast.error("Internal Server Error")
    }
  }

  return <>

    <Form className='form-container'>
      <div className="card-header bg-primary text-white" style={{ padding: '8px', marginBottom: '10px', borderRadius: '8px'}}>
        <h4 className="mb-0">User Information Form</h4>
      </div>
      <Form.Group className='flex'>
        <Form.Group className="mb-3 w-100">
          <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Control onChange={(e) => setUsername(e.target.value)} placeholder="Enter UserName" />
        </Form.Group>
      </Form.Group>

      <Form.Group className='flex'>
        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
        </Form.Group>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street" />
      </Form.Group>

      <Form.Group className='flex'>
        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setZipcode(e.target.value)} placeholder="Enter ZipCode" />
        </Form.Group>
      </Form.Group>

      <Form.Group className='flex'>
        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setWebsite(e.target.value)} placeholder="Enter Website Url" />
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Control onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter Company Name" />
        </Form.Group>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Enter CatchPhrase of Company here"
          style={{ height: '100px' }}
          onChange={(e) => setCatchPhrase(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </>

};

export default Create