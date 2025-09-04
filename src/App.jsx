import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <div
        id="ending"
        className="page-section"
        style={{
          width: "100vw",
          margin: 0,
          backgroundColor: "white",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
