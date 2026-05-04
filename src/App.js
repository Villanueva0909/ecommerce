import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./auth/Home"
import Login from './auth/Login'
import Register from './auth/Register'
import Header from './components/nav/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <ToastContainer />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
)

export default App;
