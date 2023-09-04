import React from 'react';
import ThreadListView from './components/ThreadListView';
import ThreadDetailsView from './components/ThreadDetailsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.png";
import Nav from './components/Nav/Nav';
// import Nav from './components/Nav/Nav';





function App() {
  return (
    <>
    
      <Router>
        <Nav />
        <div className="App">
          {/* <img src={logo} alt="Beer Logo" /> */}
          <Routes>
            <Route path="/" element={<ThreadListView />} />

            <Route path="/thread/:id" element={<ThreadDetailsView title='' description='' category='' creator={{userName: ''}} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
