import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-state-200">
      <div className=" flex justify-between items-center mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth app</h1>
        </Link>
        <ul className=" flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Random</li>
          <li>Policies</li>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
}
