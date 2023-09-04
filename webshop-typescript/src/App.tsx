import React from 'react';
import ThreadListView from './components/ThreadListView';
import ThreadDetailsView from './components/ThreadDetailsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




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
  );
}

export default App;
