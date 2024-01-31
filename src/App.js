import React from "react";
import TellUsForm from "./pages/TellUsForm";
import StartupForm from "./pages/StartupForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TellUsForm />} />
        <Route path="/step2" element={<StartupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
