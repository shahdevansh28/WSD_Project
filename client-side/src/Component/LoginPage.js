import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, getCollapseUtilityClass } from "@mui/material";
// import { DEFAULT_ATTRIBUTE } from "@mui/system/cssVars/getInitColorSchemeScript";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function LoginPage() {
  const Navigate = useNavigate();
  const [details, setDetails] = useState({ username: "", password: "" });
  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );

  const handleSubmit = async (event) => {
    if (details.username === "admin" && details.password === "admin") {
      Navigate("/admin");
    } else {
      event.preventDefault();
      try {
        const res = await axios.post("https://localhost:7226/api/Auth/Login", {
          username: details.username,
          password: details.password,
        });
        console.log(res.data.token);

        // const token=localStorage.setItem("token" ,res.data.token)
        if (res.data.token.username && res.data.token.password) {
          localStorage.setItem("empId", res.data.token.id);
          localStorage.setItem("Username", res.data.token.username);
          localStorage.setItem("Password", res.data.token.password);
          localStorage.setItem("Token", res.data.token);
          alert("Thanks!! Your SuccessFully Login");
          Navigate("employee");
        } else {
          alert("Invalid Credentials");
        }

        setDetails("");
      } catch (err) {
        alert(err);
      }
    }
  };
  const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={details.username}
              onChange={onChangeInput}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={details.password}
              onChange={onChangeInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  //   <div>
  //     <h1>Login</h1>
  //     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  //       <TextField
  //         style={{ width: "200px", margin: "5px" }}
  //         type="text"
  //         required
  //         label="Username"
  //         name="username"
  //         variant="outlined"
  //         value={details.username}
  //         onChange={onChangeInput}
  //       />
  //       <br />
  //       <TextField
  //         style={{ width: "200px", margin: "5px" }}
  //         type="text"
  //         label="Password"
  //         name="password"
  //         required
  //         variant="outlined"
  //         onChange={onChangeInput}
  //         value={details.password}
  //       />
  //       <br />
  //       <Button type= "submit" required variant="contained" color="primary">
  //         Login
  //       </Button>
  //     </Box>
  //   </div>
  // );
}
export default LoginPage;
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
