import React from 'react';
import ThreadListView from './components/ThreadListView';
import logo from "./assets/logo.png";




function App() {
  return (
    <div className="App">
       <img src={logo} alt="Beer Logo" className="img-fluid" />
      

      <h1>Webshop</h1>
      <p>Hello2</p>

      <ThreadListView />
      </div>
      
  );
}

export default App;
