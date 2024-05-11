import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageUser from "./pages/ManageUser";
import Policies from "./pages/Policies";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/manage-user" component={ManageUser} />

        <Route path="/policies" component={Policies} />

        <Route path="/profile" component={Profile} />

        <Route path="/signin" component={Signin} />

        <Route path="/signup" component={Signup} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}