import React from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function ApplyForLeave() {
  const [details, setDetail] = useState({
    Id: "",
    Start_Date: "",
    End_Date: "",
    Reason: "",
    Status: "",
    EmployeeId: "",
  });

  async function Apply(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7226/api/Leaves", {
        start_Date: details.Start_Date,
        end_Date: details.End_Date,
        reason: details.Reason,
        status: "Not Granted",
        employeeId: localStorage.getItem("empId"),
      });
      setDetail("");
      alert("Your Leave has been added");

      // Load();
    } catch (err) {
      alert(err);
    }
  }
  let name, value;
  const onChangeInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name, value);
    setDetail({ ...details, [name]: value });
  };

  return (
    <div>
      <h1>Apply for Leave</h1>
      <input
        type="text"
        className="form-control"
        id="id"
        name="id"
        hidden
        value={details.Id}
        onChange={onChangeInput}
      />

      <TextField
        style={{ width: "200px", margin: "5px" }}
        fullWidth
        type="text"
        label="Reason"
        name="Reason"
        variant="outlined"
        value={details.Reason}
        onChange={onChangeInput}
      />
      <br />
      <TextField
        style={{ width: "500px", margin: "5px" }}
        type="date"
        name="Start_Date"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Start_Date}
      />
      <br />
      <TextField
        style={{ width: "500px", margin: "5px" }}
        type="date"
        name="End_Date"
        variant="outlined"
        onChange={onChangeInput}
        value={details.End_Date}
      />
      <br />
      {/* <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Description"
        name="Description"
        variant="outlined"
        onChange={onChangeInput}
        value={details.Description}
      /> */}
      <br />
      <Button variant="contained" color="primary" onClick={Apply}>
        Apply For Leave
      </Button>
    </div>
  );
}

export default ApplyForLeave;
