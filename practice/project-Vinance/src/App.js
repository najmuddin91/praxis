import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Daftar from './Components/Daftar';
import Login from './Components/Login';

function App() {
  return (
    <header>
      <h1>menjajal</h1>
      <Router>
        <Routes>
          <Route path='Daftar' element={<Daftar/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
