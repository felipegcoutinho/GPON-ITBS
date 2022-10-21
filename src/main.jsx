import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMain from './AppMain'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Global/Header';
import App from './App';

ReactDOM.createRoot(document.getElementById('main')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<AppMain />} />
        <Route path="/G16/" element={<AppMain />} />
        <Route path="/G08/" element={<AppMain />} />
        <Route path="/8820i/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
