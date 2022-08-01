import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import CreateSet from './Pages/CreateSet';
import Learn from './Pages/Learn';



function App() {

  const [data, setData] = useState();

  const fetchData = (d) => {
    let shuffled = d
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    setData(shuffled);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CreateSet exportData={fetchData}/>} />
          <Route path="/learn" element={<Learn data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
