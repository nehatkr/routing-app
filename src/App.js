import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Dasboard from "./components/dasboard"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dasboard" element={<Dasboard />} />


              {/* <Route path="product" element={<Product />} /> */}
              {/* <Route path="news" element={<News />} /> */}
              {/* <Route path="about" element={<About />} /> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="school" element={<School />}> */}
              {/* <Route path="teacher" element={<Teacher />} /> */}
              {/* <Route path="student" element={<Student />} /> */}
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
