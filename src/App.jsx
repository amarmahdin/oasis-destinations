import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../src/App.css";
import Home from "./Pages/Home";
import About from './Pages/About';
import Destination from './Pages/Destination';
import News from './Pages/News';
import Pantai from './Pages/Pantai/Pantai';
import Gunung from './Pages/Gunung/Gunung';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Descplengkun from './Pages/Pantai/Descplengkung';
import Descarjuno from './Pages/Gunung/Descarjuno';
import Desctumpaksewu from './Pages/Air Terjun/Desctumpaksewu';
import Profile from './Pages/Profile';
import Airterjun from './Pages/Air Terjun/Airterjun';
import Lainnya from './Pages/Lainnya/Lainnya';
import Admindashboard from './Pages/Dashboard/Admindashboard';
import Adminkelolawisata from './Pages/Dashboard/Adminkelolawisata';
import Adminakunpengelola from './Pages/Dashboard/Adminakunpengelola';
import Admintambahwisata from './Pages/Dashboard/Admintambahwisata';
import Payment from './Pages/Payment';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/News" element={<News />} />
        <Route path="/Pantai" element={<Pantai />} />
        <Route path="/Gunung" element={<Gunung />} />
        <Route path="/Airterjun" element={<Airterjun />} />
        <Route path="/Lainnya" element={<Lainnya />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Descplengkung" element={<Descplengkun/>} />
        <Route path="/Descarjuno" element={<Descarjuno/>} />
        <Route path="/Desctumpaksewu" element={<Desctumpaksewu/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Admindashboard" element={<Admindashboard/>} />
        <Route path="/Adminkelolawisata" element={<Adminkelolawisata/>} />
        <Route path="/Adminakunpengelola" element={<Adminakunpengelola/>} />
        <Route path="/Admintambahwisata" element={<Admintambahwisata/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
    </Router>
  );
}

export default App