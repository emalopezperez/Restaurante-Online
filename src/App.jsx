import { FrontPage } from "./components/FrontPage";
import NavBar from "./components/NavBar";
import Foods from "./components/Foods";
import ItemDetail from "./container/ItemDetail";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import MyProvider from "./context/MyProvider";
import Form from "./components/Form";

function App() {
  return (
    <div className="">
      <MyProvider>
        <NavBar />
        <FrontPage />
        <Routes>
          <Route exact path="/" element={<Foods />} />
          <Route exact path="/detalles/:id" element={<ItemDetail />} />
          <Route exact path="/category/Cart" element={<Cart />} />
          <Route exact path="/category/registro" element={<Form/>} />
        </Routes>
      </MyProvider>
    </div>
  );
}

export default App;
