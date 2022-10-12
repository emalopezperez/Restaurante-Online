import { FrontPage } from "./components/FrontPage";
import NavBar from "./components/NavBar";
import ConteinersCards from "./components/ConteinerCards";
import Foods from "./components/Foods";

function App() {
  return (
    <div className="">
      <NavBar />
      <FrontPage />
      <ConteinersCards/>
      <Foods/>
    </div>
  );
}

export default App;
