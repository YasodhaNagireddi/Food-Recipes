import About from "./components/About";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RecipeDetailCard from "./components/RecipeDetailCard";
import Footer from "./components/Footer";
import Home from "./components/Home";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/recipes" element={<Body />} />
        <Route path="/recipe/:id" element={<RecipeDetailCard />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
