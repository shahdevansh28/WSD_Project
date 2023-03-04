import React from "react";
import { TextField,Button } from "@mui/material";
import axios from "axios";
import {useState} from "react";

function Create(){
    const [details,setDetail]=useState({
        Id:"",Name:"",Description:""
      })
      async function Save(event) {
      /*public long Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Description { get; set; } */
        event.preventDefault();
        try {
          await axios.post("https://localhost:7226/api/Departments", {
            Name: details.Name,
            Description: details.Description,
          });
          alert("Thanks!! Your Profile is being Created Succesfully");
          setDetail("");
          
        
          // Load();
        } catch (err) {
          alert(err);
        }
      }
      let name,value;
      const onChangeInput=(e)=>{
         name=e.target.name;
        value=e.target.value;
        setDetail({...details,[name]:value});
      }

    return(
        <div>
            <h1>Create</h1>
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
              type="text"
              label="Name"
              name="Name"
              variant="outlined"
              value={details.Name}
              onChange={onChangeInput}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Description"
              name="Description"
              variant="outlined"
              onChange={onChangeInput}
              value={details.Description}
              />
            <br />
            <Button variant="contained" color="primary" onClick={Save}>
              Add Departments
            </Button>
        </div>
    )
}

export default Create;