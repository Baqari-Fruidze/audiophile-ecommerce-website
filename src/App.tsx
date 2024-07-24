import { createContext, useState } from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import CheckOut from "./pages/CheckOut";
import Person from "./components/Person";
import Header from "./components/Header";
import { TuserContext } from "./types/ContextType";
import ProductDetail from "./pages/ProductDetail";
import data from "../src/data.json";

function StaticPerson() {
  const location = useLocation();
  return location.pathname !== "/checkout" ? <Person /> : null;
}
export const Context = createContext<TuserContext>({
  yellow: true,
  setYellow: () => {},
});
function App() {
  const [yellow, setYellow] = useState<boolean>(true);
  return (
    <Context.Provider value={{ yellow, setYellow }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <StaticPerson />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
