import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./auth/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/nav/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
)

export default App;
