import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import React from 'react';
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
      </header>
    </div> 
    </BrowserRouter>

    
    
  );
}

export default App;
