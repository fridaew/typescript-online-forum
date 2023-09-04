import React from 'react';
import ThreadListView from './components/ThreadListView';
import ThreadDetailsView from './components/ThreadDetailsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.png";




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={ThreadListView} />
          <Route path="/thread/:id" Component={ThreadDetailsView} />
        </Routes>
      </div>
    </Router>
    <div className="App">
       <img src={logo} alt="Beer Logo" className="img-fluid" />
      

      <h1>Webshop</h1>
      <p>Hello2</p>

      <ThreadListView />
      </div>
      

  );
}

export default App;
