// import logo from './logo.svg';
import "./App.css";
import CreateDepartment from "./Component/Department/CreateDepartment";
import CreateEmployees from "./Component/Employee/CreateEmployees";
import UpdateDepartment from "./Component/Department/UpdateDepartment";
import ReadDepartment from "./Component/Department/ReadDepartment";
import LoginPage from "./Component/LoginPage";
import AdminHomePage from "./Component/AdminHomePage";
import { Routes, Route } from "react-router-dom";
import EmployeeHomePage from "./Component/Employee/EmployeeHomePage";
import ReadEmployees from "./Component/Employee/ReadEmployees";
import UpdateEmployee from "./Component/Employee/UpdateEmployee";
import React from "react";
import ApplyForLeave from "./Component/Leave/ApplyForLeave";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/all-department" element={<ReadDepartment />} />
          <Route path="/department/create" element={<CreateDepartment />} />
          <Route path="/department/update" element={<UpdateDepartment />} />

          <Route path="/employee" element={<EmployeeHomePage />} />
          <Route path="/all-employee" element={<ReadEmployees />} />
          <Route path="/employee/create" element={<CreateEmployees />} />
          <Route path="/employee/update" element={<UpdateEmployee />} />
          <Route path="/employee/apply-leave" element={<ApplyForLeave />} />
        {/* <Read/> */}
      </Routes>
      {/* <Create /> */}
    </div>
  );
}

export default App;
