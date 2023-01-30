import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import PetListingTable from "./components/PetListingTable/PetListingTable";
import AddPetPage from './pages/AddPetPage/AddPetPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pets/add" element={<AddPetPage/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
