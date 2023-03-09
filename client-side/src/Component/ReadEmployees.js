import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ReadEmployees() {
  const [detail, setDetail] = useState([]);

  // const [department, setDepartment] = useState('');
  useEffect(() => {
    axios.get("https://localhost:7226/api/Employees").then((response) => {
      console.log(response.data);
      setDetail(response.data);
    });
  }, []);
  /*
address
department
departmentId
dob
email
gender
id
join_Date
name
password
phone
username
*/
  const setData = (data) => {
    // console.log(data);
    let {
      address,
      department,
      departmentId,
      dob,
      email,
      gender,
      id,
      join_Date,
      name,
      password,
      phone,
      username,
    } = data;
    console.log(data);
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);
    localStorage.setItem("Email", email);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Address", address);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("DepartmentId", departmentId);
    localStorage.setItem("Join_Date", join_Date);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Department",department);
  };
  //   setDepartment()
  // const getdeptName = (id) => {
  //   axios.get(`https://localhost:7226/api/Departments/${id}`)
  //   .then((res) => {
  //     console.log('Hello')
  //     console.log(res.data);
  //     setDepartment(res.data);
  //   });
  // };

  // useEffect(()=>getdeptName,[getdeptName]);
  //setDepartment(department);
  // console.log(department)
  return (
    <div>
      <h3>Employees Details</h3>
      <ul>
        <li>
          <Link to="/employee/create">Create</Link>
        </li>
      </ul>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone No.</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Joining Date</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detail.map((data) => {
            return (
              <TableRow>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.departmentId}</TableCell>
                <TableCell>{data.join_Date}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.dob}</TableCell>
                <Link to="/employee/update">
                  <TableCell>
                    <Button onClick={() => setData(data)}>update</Button>
                  </TableCell>
                </Link>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReadEmployees;
