// import logo from './logo.svg';
import "./App.css";
import CreateDepartment from "./Component/CreateDepartment";
import CreateEmployees from "./Component/CreateEmployees";
import UpdateDepartment from "./Component/UpdateDepartment";
import ReadDepartment from "./Component/ReadDepartment";
import HomePage from "./Component/HomePage";
import { Routes, Route } from "react-router-dom";
import ReadEmployees from "./Component/ReadEmployees";
import UpdateEmployee from "./Component/UpdateEmployee";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="department" element={<ReadDepartment />} />
          <Route path="/department/create" element={<CreateDepartment />} />
          <Route path="/department/update" element={<UpdateDepartment />} />

          <Route path="employee" element={<ReadEmployees />} />
          <Route path="employee/create" element={<CreateEmployees />} />
          <Route path="employee/update" element={<UpdateEmployee />} />
        {/* <Read/> */}
      </Routes>
      {/* <Create /> */}
    </div>
  );
}

export default App;
