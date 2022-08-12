import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
