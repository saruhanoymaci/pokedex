import Home from "./components/Home";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
