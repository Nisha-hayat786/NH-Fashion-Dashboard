import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import UserList from "./Routes/UserList";
import User from "./Routes/User";
import ProductList from "./Routes/ProductList";
import Product from "./Routes/Product";
import NewProduct from "./Routes/NewProduct";
import LogIn from "./Routes/LogIn";

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
              <Route exact path="/userList" element={<UserList />} />
              <Route exact path="/productList" element={<ProductList />} />
              <Route exact path="/user/:id" element={<User/>} />
              <Route exact path="/product/:id" element={<Product/>} />
              <Route exact path="/newProduct" element={<NewProduct/>} />
              <Route exact path="/logIn" element={<LogIn/>} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
