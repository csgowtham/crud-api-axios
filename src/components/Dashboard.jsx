import AxiosService from '../utils/AxiosService'
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import "../index.css";

function Dashboard() {
  const [data, setData] = useState([]);
  let navigate = useNavigate()

  const getData = async () => {
    try {
      let response = await AxiosService.get(ApiRoutes.CRUD_APP.path);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Internal Server Error");
    }
  };

  let handleDelete=async(id)=>{
    try {
      let response = await AxiosService.delete(`${ApiRoutes.CRUD_APP.path}/${id}`)
      if(response.status===200){
        getData()
        toast.success("User Deleted Successfully!!")
      }
    } 
    catch (error) {
      toast.error(error.response?.data?.message || "Internal Server Error");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container table-responsive" style={{ overflowX: "auto" }}>
  <Table striped bordered hover className="table" style={{ minWidth: "1000px" , }}>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Mobile No</th>
        <th>Address</th>
        <th>Website Link</th>
        <th>Company Name</th>
        <th>Catch Phrase</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((e, i) => (
        <tr key={i}>
          <td style={{ width: "50px" }} data-label="S.No">{i + 1}</td>
          <td data-label="Name">{e.name}</td>
          <td data-label="Username">{e.username}</td>
          <td data-label="Email">{e.email}</td>
          <td data-label="Mobile No">{e.phone}</td>
          <td data-label="Address" className="wrap">
            {`${e.address.street}, ${e.address.city}, ${e.address.zipcode}`}
          </td>
          <td data-label="Website Link">{e.website}</td>
          <td data-label="Company Name">{e.company.companyName}</td>
          <td data-label="Catch Phrase">{e.company.catchPhrase}</td>
          <td data-label="Actions">
            <EditIcon onClick={() => navigate(`/user/${e.id}`)} />
            <DeleteIcon onClick={() => handleDelete(e.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

    </>
  );
}

export default Dashboard;
