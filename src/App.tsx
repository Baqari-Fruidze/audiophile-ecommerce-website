import { useForm } from "react-hook-form";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import Person from "./components/Person";
import Header from "./components/Header";
import { TuserContext } from "./types/ContextType";

function StaticPerson() {
  const location = useLocation();
  return location.pathname !== "/checkout" ? <Person /> : null;
}
export const Context = createContext<TuserContext>({
  yellow: true,
  setYellow: () => {},
});
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [yellow, setYellow] = useState<boolean>(true);
  return (
    <Context.Provider value={{ yellow, setYellow }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <StaticPerson />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
