import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import MobileCoversPage from "./pages/MobileCoversPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
      <>
      <Router>
      <Header />
       
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/mobile-covers" element={<MobileCoversPage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
