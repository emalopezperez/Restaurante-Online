import { FrontPage } from "./components/FrontPage";
import NavBar from "./components/NavBar";
import ConteinersCards from "./components/ConteinerCards";
import Foods from "./components/Foods";
import ItemDetail from "./container/ItemDetail";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import MyProvider from "./context/MyProvider";

function App() {
  return (
    <div className="">
      <MyProvider>
        <NavBar />
        <FrontPage />
        <ConteinersCards />
        <Routes>
          <Route exact path="/" element={<Foods />} />
          <Route exact path="/detalles/:id" element={<ItemDetail />} />
          <Route exact path="/category/Cart" element={<Cart />} />
        </Routes>
      </MyProvider>
    </div>
  );
}

export default App;
