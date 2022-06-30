import Home from "./components/Home";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
