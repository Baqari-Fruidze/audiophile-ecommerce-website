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
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import LargeHeader from "./components/LargeHeader";

function StaticPerson() {
  const location = useLocation();
  return location.pathname !== "/checkout" ? <Person /> : null;
}
export const Context = createContext<TuserContext>({
  yellow: true,
  setYellow: () => {},
  list: {},
  setList: () => {},
  burgerShow: false,
  setBurgerShow: () => {},
  setCartShow: () => {},
  cartShow: false,
  setShowList: () => {},
  showList: false,
  scrollToTop: () => {},
});
function App() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  const [showList, setShowList] = useState<boolean>(false);
  const [cartShow, setCartShow] = useState<boolean>(false);
  const [burgerShow, setBurgerShow] = useState<boolean>(false);
  const [yellow, setYellow] = useState<boolean>(true);
  const [list, setList] = useState({});
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const data = localStorage.getItem("buyList");
    if (data) {
      const parsed = JSON.parse(data);
      setList(parsed);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        yellow,
        setYellow,
        list,
        setList,
        burgerShow,
        setBurgerShow,
        cartShow,
        setCartShow,
        showList,
        setShowList,
        scrollToTop,
      }}
    >
      <BrowserRouter>
        {desktop ? <LargeHeader /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <StaticPerson />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
