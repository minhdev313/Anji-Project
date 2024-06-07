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
import Post from "./pages/Post";
import TermsEs from "./pages/TermsEs";
import TermsVn from "./pages/TermsVn";
import DetailPost from "./pages/DetailPost";
import Detail from "./pages/123";
import Mascot from "./pages/mascot";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail-post" element={<DetailPost />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/mascot" element={<Mascot />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/random" element={<Random />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/termsEs" element={<TermsEs />} />
        <Route path="/termsVn" element={<TermsVn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
