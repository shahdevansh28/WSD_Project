import { MenuItem, Select, InputLabel, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import React from "react";
function UpdateEmployee() {
  //For Department
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7226/api/Departments").then((res) => {
      setDepartment(res.data);
    });
  }, []);
  //For Employees
  const [id, setId] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [join_Date, setJoin_Date] = useState("");
  const [gender, setGender] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setUsername(localStorage.getItem("Username"));
    setPassword(localStorage.getItem("Password"));
    setEmail(localStorage.getItem("Email"));
    setGender(localStorage.getItem("Gender"));
    setAddress(localStorage.getItem("Address"));
    setDob(localStorage.getItem("DOB"));
    setDepartmentId(localStorage.getItem("DepartmentId"));
    setJoin_Date(localStorage.getItem("Join_Date"));
    setPhone(localStorage.getItem("Phone"));
    // setDepartment(localStorage.getItem("Department"));
  }, []);
  const updateData = () => {
    axios.put(`https://localhost:7226/api/Employees/${id}`, {
      Id: localStorage.getItem("Id"),
      Name: name,
      // Description:description,
      //Id:localStorage.getItem('Id'),
      //Name:name,
      Username: username,
      Password: password,
      Email: email,
      Gender: gender,
      Address: address,
      DOB: dob,
      DepartmentID: departmentId,
      Join_Date: join_Date,
      Phone: phone,
      //Department: department,
      //localStorage.setItem("Username", username);
      //localStorage.setItem("Password", password);
      //localStorage.setItem("Email", email);
      //localStorage.setItem("Gender", gender);
      //localStorage.setItem("Address", address);
      // localStorage.setItem("DOB", dob);
      // localStorage.setItem("DepartmentId", departmentId);
      // localStorage.setItem("Join_Date", join_Date);
      // localStorage.setItem("Phone", phone);
      // localStorage.setItem("Department",department);
    });
  };
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
  return (
    <div>
      <h3>Update Employee</h3>
      {/* <input
        type="text"
        className="form-control"
        id="id"
        name="id"
        hidden
        value={details.Id}
        onChange={onChangeInput}
      /> */}
      {/* Username */}
      <TextField
        required
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="text"
        label="Username"
        name="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setGender(e.target.value)}
        value={gender}
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
        onChange={(e) => setAddress(e.target.value)}
        value={address}
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
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <br />  
      {/* DOB */}
      <TextField
        fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="date"
        name="DOB"
        variant="outlined"
        onChange={(e) => setDob(e.target.value)}
        value={dob}
      />
      <br />
      {/* Department Number */}
      <InputLabel id="department-name">Department</InputLabel>
      <Select
        required
        fullWidth
        disabled
        style={{ width: "500px", margin: "5px" }}
        labelId="department-name-select-label"
        id="department-name-select"
        value={departmentId}
        label="Department"
        name="DepartmentId"
        onChange={(e) => setDepartmentId(e.target.value)}
      >
        {department.map((data) => {
          return <MenuItem value={data.id}>{data.name}</MenuItem>;
        })}
      </Select>
      <br />
      {/* Join_Date */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField', 'DateField']}>
        <DateField
          label="Controlled field"
          value={join_Date}
          onChange={(e) => setJoin_Date(e.target.value)}
        />
      </DemoContainer>
    </LocalizationProvider> */}
      <TextField
        //   fullWidth
        style={{ width: "500px", margin: "5px" }}
        type="date"
        name="Join_Date"
        variant="outlined"
        onChange={(e) => setJoin_Date(e.target.value)}
        value={join_Date}
      />
      <br />
      <Button variant="contained" color="primary" onClick={updateData}>
        Update Employee
      </Button>
    </div>
  );
}

export default UpdateEmployee;
