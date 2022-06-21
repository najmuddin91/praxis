// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Routes, Route, } from 'react-router-dom';
import Daftar from './Components/Daftar';
import Login from './Components/Login';
import Register from './Components/Register';
import FormDisabledDemo from './Components/FormDisabledDemo';
import Data from './Components/Data';

function App() {
  return (
    <header>
      <h2>Halaman Pertama Saya</h2>
      <button>Masuk</button>
      <p >apaan siii</p>
      <Router>
        <Routes>
        <Route path="daftar" element={<Daftar/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="formDisabledDemo" element={<FormDisabledDemo/>}/>
        <Route path="data" element={<Data/>}/>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
