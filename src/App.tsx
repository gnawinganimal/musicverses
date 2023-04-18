import React from 'react';
import { Routes } from "react-router";
import { BrowserRouter, Route } from 'react-router-dom';


import { Arena } from './pages/Arena';
import { Vote } from './pages/Vote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="arena/:id"
            element={<Arena />}
          />
          <Route 
            path="arena/:id/vote"
            element={<Vote />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
