import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import  About  from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";


function App() {

  return <ShoppingCartProvider>
  <Navbar />
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </Container>
  </ShoppingCartProvider>
}

export default App
