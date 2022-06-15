// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Daftar from './Components/Daftar';
import Login from './Components/Login';
import Menu from './Components/Menu';
import FormItem from 'antd/lib/form/FormItem';

function App() {
  return (
    <header>
      <h2>Halaman Pertama Saya</h2>
      <Router>
        <Routes>
        <Route path="Daftar" element={<Daftar/>}/>
        <Route path="Menu" element={<Menu/>}/>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
