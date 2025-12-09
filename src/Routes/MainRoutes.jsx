import { Route, Routes } from "react-router";
import Home from "./Home";
import Product from "./Product";
import Blog from "./Blog";
import Cart from "./Cart";
import TopHeading from "../Components/TopHeading/TopHeading";
import Signup from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";
import ProviderSignup from "../Components/Auth/ProviderSignup";
import UserDashboard from "../Components/Dashboard/UserDashboard";
import ProviderList from "../Components/Services/ProviderList";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:id" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/provider/signup" element={<ProviderSignup />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/providers" element={<ProviderList />} />

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/topheading" element={<TopHeading />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
