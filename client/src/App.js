import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Axios from 'axios'
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/All" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("")
  const [wage, setWage] = useState(0);

  const addEmployee = (e) => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then((response) => 
        {console.log('Employee Data Added');})
  }


  return (
    <div className="App">
      <Navbar />
      <form className="d-flex flex-column">
        <label>Name:</label>
        <input type="text" onChange={(e) => {setName(e.target.value)}}/>
        <label>Age:</label>
        <input type="number" onChange={(e) => {setAge(e.target.value)}}/>
        <label>Country:</label>
        <input type="text" onChange={(e) => {setCountry(e.target.value)}}/>
        <label>Position:</label>
        <input type="text" onChange={(e) => {setPosition(e.target.value)}}/>
        <label>Wage:</label>
        <input type="number" onChange={(e) => {setWage(e.target.value)}}/>
        <div onClick={addEmployee} className="btn btn-primary w-25 m-auto mt-3">Submit</div>
      </form>
    </div>
  );
}

export default App;
