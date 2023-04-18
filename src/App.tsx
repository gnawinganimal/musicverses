import React from 'react';
import { Routes } from "react-router";
import { BrowserRouter, Route } from 'react-router-dom';


import { Arena } from './pages/Arena';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="arena/:id"
            element={<Arena />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
