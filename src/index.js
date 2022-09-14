import React from 'react';
import { BrowserRouter, Route, Routes }
  from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Hook from './Hook';
import Class from './Class';



// import Class from './Class'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="class" element={<Class />} />
      <Route path="hook" element={<Hook />} />

    </Routes>
  </BrowserRouter>
);

