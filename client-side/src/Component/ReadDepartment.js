import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

function Read() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7226/api/Departments')
    .then((response) => {
        console.log(response.data)
        setDetail(response.data);
    })
  },[])
  const setData = (data) => {
    // console.log(data);
    let {id, name,description} = data;
    localStorage.setItem('Id',id);
    localStorage.setItem('Name',name);
    localStorage.setItem('Description',description);
  }
  const getData = () => {
    axios.get('https://localhost:7226/api/Departments')
    .then((getData)=>{
      setDetail(getData.data);
    })
  }
  const onDelete = (id) =>{
    alert("Are you sure you want to delete?")
    axios.delete(`https://localhost:7226/api/Departments/${id}`)
    .then(()=>{
      getData();
    })
  } 
  console.log(detail.forEach(data => console.log(data.id)) );
  return (
    <div>
      <h3>Departments</h3>
      <ul>
        <li> <Link to="/department/create">Create</Link></li>
      </ul>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                detail.map(
                    (data) =>{ 
                        return (
                        <TableRow>
                            <TableCell>{data.id}</TableCell>  
                            <TableCell >{data.name}</TableCell>
                            <TableCell >{data.description}</TableCell>
                            <Link to ='/department/update'>
                            <TableCell ><Button onClick={()=>setData(data)}>update</Button></TableCell>
                            </Link>
                            <TableCell ><Button onClick={()=>onDelete(data.id)}>Delete</Button></TableCell>
                        </TableRow>
                        )
                    }
                )
            }
          </TableBody>
        </Table>
    </div>
  );
}

export default Read;
