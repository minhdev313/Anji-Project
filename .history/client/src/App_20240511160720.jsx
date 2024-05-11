import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
