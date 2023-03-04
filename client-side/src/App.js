// import logo from './logo.svg';
import "./App.css";
import Create from "./Component/Create";
import Update from "./Component/Update";
import Read from "./Component/Read";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        {/* <Read/> */}
      </Routes>
      {/* <Create /> */}
    </div>
  );
}

export default App;
