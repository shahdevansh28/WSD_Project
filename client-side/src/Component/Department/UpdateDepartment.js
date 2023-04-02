import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";

function Update(){
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [id,setId] = useState(null);
    
    useEffect(()=>{
        setId(localStorage.getItem('Id'));
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
    },[]);

    const updateData = () => {
        axios.put(`https://localhost:7226/api/Departments/${id}`,{
            Id:localStorage.getItem('Id'),
            Name:name,
            Description:description
        })
    }
    return (
        <div>
        <h3>Update</h3>
        {/* <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            hidden
            value={details.Id}
            onChange={onChangeInput}
          /> */}

          
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Name"
              name="Name"
              variant="outlined"
              value={name}
              onChange = {(e) => setName(e.target.value)}  
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Description"
              name="Description"
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              />
            <br />
            <Button variant="contained" color="primary" onClick={updateData}>
              Update Departments
            </Button>
            </div>
    );
}

export default Update;