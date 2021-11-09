import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigator from "./components/Navigator";
import AboutUs from "./components/AboutUs";
import Fihr from "./components/Fihr";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator/>
        <div className="content">
          <Routes>
            <Route path="/" element={< Fihr/>} />
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/Fihr" element={<Fihr/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
