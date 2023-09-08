import React from 'react';
import './App.css';
import Components from './Components/linkedcomponents'
import Login from './Components/login/login'
import Register from './Components/Register/register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/registers" element={<Components />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
