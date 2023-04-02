import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast ,ToastContainer} from "react-toastify";
import { TextField, Button, getCollapseUtilityClass } from "@mui/material";
// import { DEFAULT_ATTRIBUTE } from "@mui/system/cssVars/getInitColorSchemeScript";
import Box from "@mui/material/Box";

function LoginPage() {
  const Navigate = useNavigate();
  const [details, setDetails] = useState({ username: "", password: "" });
  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );

  const handleSubmit = async (event) => {
    if (details.username === "admin" && details.password === "admin") {
      Navigate('/admin');
    } else {
      event.preventDefault();
      try {
        const res = await axios.post("https://localhost:7226/api/Auth/Login", {
          username: details.username,
          password: details.password,
        });
        console.log(res.data.token)

        // const token=localStorage.setItem("token" ,res.data.token)
        if (res.data.token.username && res.data.token.password) {
          localStorage.setItem("empId",res.data.token.id);
          localStorage.setItem("Username", res.data.token.username);
          localStorage.setItem("Password", res.data.token.password);
          localStorage.setItem("Token", res.data.token);
          alert("Thanks!! Your SuccessFully Login");
          Navigate('employee');
        } else {
          alert("Invalid Credentials");
        }

        setDetails("");
      } catch (err) {
        alert(err);
      }
    }
  };

  // async function Login(event) {
  //   // localStorage.clear()
  //   event.preventDefault();
  //   try {
  //     if (details.username == "" || details.password == "") {
  //       alert("Fill required field!")
  //     } else {
  //       const res = await axios.post(
  //         "https://localhost:7226/api/Auth/Login",
  //         details
  //       );
  //       // console.log(res.data);
  //       if (res.data.status === 200) {
  //         console.log(res.data);
  //         localStorage.setItem("token-id", res.data.token.id);
  //         localStorage.setItem("authenticated", true);
  //         setAuthenticated(true);
  //         Navigate('employee')
  //       } else if (res.data.status == 400) {
  //         console.log("Error: " + res.data.status);
  //       }
  //       //   setDetails("");
  //       //   alert("Thanks!! Your Profile is being Created Succesfully");
  //     }

  //     // Load();
  //   } catch (err) {
  //     if (
  //       err.response.status == 400 &&
  //       err.response.data == "Incorrect Password"
  //     ) {
  //       console.log(err.response.data);
  //     }
  //   }
  //   // event.preventDefault();
  // }

  let name, value;
  const onChangeInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name, value);
    setDetails({ ...details, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          required
          label="Username"
          name="username"
          variant="outlined"
          value={details.username}
          onChange={onChangeInput}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Password"
          name="password"
          required
          variant="outlined"
          onChange={onChangeInput}
          value={details.password}
        />
        <br />
        <Button type= "submit" required variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </div>
  );
}
export default LoginPage;
