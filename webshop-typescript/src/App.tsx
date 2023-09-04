import React from 'react';
import ThreadListView from './components/ThreadListView';
import logo from "./assets/logo.png";
import Nav from './components/Nav/Nav';




function App() {
  return (
    <div className="App">
      <Nav />
       <img src={logo} alt="Beer Logo" className="img-fluid" />
      

      <h1>Webshop</h1>
      <p>Hello2</p>

      <ThreadListView />
      </div>
      
  );
}

export default App;
