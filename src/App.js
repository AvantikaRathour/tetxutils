import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import About from './component/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
    }
  }
  return (
    <>
      {/* <Router>  */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
{/* 
         <Routes>
          <Route path="/About" element={<About/>}></Route>  */}
          <TextForm heading="Enter the text" mode={Mode} showAlert={showAlert} />
          {/* <Route path="/" element={}> */}
          {/* </Route> */}
        {/* </Routes>  */}
      </div>
      {/* </Router>  */}
    </>
  );
}

export default App;