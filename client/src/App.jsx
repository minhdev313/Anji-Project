import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageUser from "./pages/ManageUser";
import Policies from "./pages/Policies";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Random from "./pages/Random";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import PrivateRoute from "./components/PrivateRoute";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/random" element={<Random />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
