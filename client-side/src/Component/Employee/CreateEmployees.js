import { MenuItem, Select, InputLabel, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

/*
    Id: "",
    Username: "",
    Email: "",
    Password: "",
    Name: "",
    DOB: "",
    Phone: "",
    Address: "",
    Join_Date: "",
    Gender: "",
    DepartmentId: "",
    Department: "",
*/

function CreateEmployees() {
  const [department, setDepartment] = useState([]);
  //   const [selected] = useState("");

  const [details, setDetail] = useState({
    Id: "",
    Username: "",
    Email: "",
    Password: "",
    Name: "",
    DOB: "",
    Phone: "",
    Address: "",
    Join_Date: "",
    Gender: "",
    DepartmentId: "",
    Department: "",
  });
  //Save Employee details
  async function Save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7226/api/Employees", {
        Username: details.Username,
        Email: details.Email,
        Password: details.Password,
        Name: details.Name,
        DOB: details.DOB,
        Phone: details.Phone,
        Address: details.Address,
        Join_Date: details.Join_Date,
        Gender: details.Gender,
        DepartmentId: details.DepartmentId,
        //Department: details.Department,
      });
      setDetail("");
      alert("Thanks!! Your Profile is being Created Succesfully");

      // Load();
    } catch (err) {
      alert(err);
    }
  }
  //   const handleChange = (event) => {
  //     setSelected(event.target.value);
  //     console.log(event.target.value);
  //   };
  let name, value;
  const onChangeInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(value, name);
    setDetail({ ...details, [name]: value });
  };
  // console.log(selected.data);
  //Fetch Departments
  useEffect(() => {
    axios.get("https://localhost:7226/api/Departments").then((res) => {
      setDepartment(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Create Employee</h3>
      <input
        type="text"
        className="form-control"
        id="id"
        name="id"
        hidden
        value={details.Id}
        onChange={onChangeInput}
      />
      {/* Username */}
      <TextField
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Username"
        name="Username"
        variant="outlined"
        value={details.Username}
        onChange={onChangeInput}
      />
      {/* Email */}
      <br />
      <TextField
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="email"
        label="Email"
        name="Email"
        variant="outlined"
        value={details.Email}
        onChange={onChangeInput}
      />
      <br />
      {/* Password */}
      <TextField
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Password"
        name="Password"
        variant="outlined"
        value={details.Password}
        onChange={onChangeInput}
      />
      <br />
      {/* Name */}
      <TextField
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Name"
        name="Name"
        variant="outlined"
        value={details.Name}
        onChange={onChangeInput}
      />
      <br />
      {/* Gender */}
      <TextField
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Gender"
        name="Gender"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Gender}
      />
      <br />
      {/* Address */}
      <TextField
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Address"
        name="Address"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Address}
      />
      <br />
      {/* Phone Number */}
      <TextField
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Phone Number"
        name="Phone"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Phone}
      />
      <br />
      {/* DOB */}
      <TextField
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="date"
        label=""
        name="DOB"
        variant="outlined"
        onChange={onChangeInput}
        value={details.DOB}
      />
      <br />
      {/* Department Number */}
      <InputLabel id="department-name">Department</InputLabel>
      <Select
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        labelId="department-name-select-label"
        id="department-name-select"
        value={details.DepartmentId}
        label="Department"
        name="DepartmentId"
        onChange={onChangeInput}
      >
        {department.map((data) => {
          return <MenuItem value={data.id}>{data.name}</MenuItem>;
        })}
      </Select>
      <br />
      {/* Join_Date */}
      <TextField
        //   fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="date"
        label=""
        name="Join_Date"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Join_Date}
      />
      <br />
      <Button variant="contained" color="primary" onClick={Save}>
        Add Employee
      </Button>
    </div>
  );
}

export default CreateEmployees;