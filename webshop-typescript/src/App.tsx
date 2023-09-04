import React from 'react';
import ThreadListView from './components/ThreadListView';
import ThreadDetailsView from './components/ThreadDetailsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.png";





function App() {
  return (
    <>
    
      <Router>
        <div className="App">
          <img src={logo} alt="Beer Logo" />
          <Routes>
            <Route path="/" Component={ThreadListView} />
            <Route path="/thread/:id" Component={ThreadDetailsView} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
