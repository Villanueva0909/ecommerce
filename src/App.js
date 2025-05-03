import { Routes, Route, useRoutes, BrowserRouter, Router } from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" component={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
