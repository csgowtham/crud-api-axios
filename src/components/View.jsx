import React, { useState,useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function View() {
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
  let navigate = useNavigate()
  let {id} = useParams()


  const address = {
    street,
    city,
    zipcode
  }

  const company = {
    companyName,
    catchPhrase
  }

  let getData= async(id)=>{
    try {
      let response = await AxiosService.get(`${ApiRoutes.CRUD_APP.path}/${id}`)
      if(response.status===200)
      {
          setName(response.data.name)
          setUsername(response.data.username)
          setEmail(response.data.email)
          setPhone(response.data.phone)
          setStreet(response.data.address.street)
          setCity(response.data.address.city)
          setZipcode(response.data.address.zipcode)
          setWebsite(response.data.website)
          setCompanyName(response.data.company.companyName)
          setCatchPhrase(response.data.company.catchPhrase)
      }
  } catch (error) {
      toast.error(error?.response?.message || "Internal Server Error")
  }
  }

  let handleSubmit = async () => {
    try {
      let response = await AxiosService.put(`${ApiRoutes.CRUD_APP.path}/${id}`,{name,username,email,address,phone,website,company})
      if (response.status === 200) {
        toast.success("User Details Edited Successfully!!")
        navigate('/dashboard')
      }
    }
    catch {
      toast.error("Internal Server Error")
    }
  }

  useEffect(()=>{
    if(id)
      getData(id)
  },[id])

  return <Form className='form-container'>
  <div className="card-header bg-primary text-white" style={{ padding: '8px', marginBottom: '10px', borderRadius: '8px' }}>
    <h4 className="mb-0">User Information Form</h4>
  </div>
  <Form.Group className='flex'>
    <Form.Group className="mb-3 w-100">
      <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
    </Form.Group>

    <Form.Group className="mb-3 w-100">
      <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter UserName" />
    </Form.Group>
  </Form.Group>

  <Form.Group className='flex'>
    <Form.Group className="mb-3 w-50">
      <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
    </Form.Group>

    <Form.Group className="mb-3 w-50">
      <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
    </Form.Group>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Control value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street" />
  </Form.Group>

  <Form.Group className='flex'>
    <Form.Group className="mb-3 w-50">
      <Form.Control value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
    </Form.Group>

    <Form.Group className="mb-3 w-50">
      <Form.Control value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter ZipCode" />
    </Form.Group>
  </Form.Group>

  <Form.Group className='flex'>
    <Form.Group className="mb-3 w-50">
      <Form.Control value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Enter Website Url" />
    </Form.Group>

    <Form.Group className="mb-3 w-50">
      <Form.Control value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter Company Name" />
    </Form.Group>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control
      as="textarea"
      placeholder="Enter CatchPhrase of Company here"
      style={{ height: '100px' }}
      value={catchPhrase}
      onChange={(e) => setCatchPhrase(e.target.value)}
    />
  </Form.Group>

  <Button variant="primary" onClick={()=>handleSubmit()}>
    Update
  </Button>
</Form>
}

export default View