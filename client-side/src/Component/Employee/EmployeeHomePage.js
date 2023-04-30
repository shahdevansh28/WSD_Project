import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function EmployeeHomePage() {
  const [details, setDetails] = useState({});
  
  const id = localStorage.getItem("empId");
  console.log(id);
  const getData = () => {
    axios.get(`https://localhost:7226/api/Employees/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
    <AppBar></AppBar>
      <Button>
        <Link to="/employee/apply-leave">Apply For a Leave</Link>
      </Button>
      <h1>Employee Home Page</h1>
      <h1>Name:- {details.name}</h1>
      <p>Email:- {details.email}</p>
      <p>Join Date:- {details.join_Date}</p>
      <p>Address:- {details.address}</p>
    </div>
  );
}

export default EmployeeHomePage;
