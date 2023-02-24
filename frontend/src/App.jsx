import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>MERN APP SETUP</h1>
      <Navbar>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Navbar>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
