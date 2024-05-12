import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white lg:py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <a href="/" title="" className="flex">
              <img
                className="w-auto h-5 lg:h-10"
                src="https://up-anh.vi-vn.vn/img/1715431808_26c2728e570b20053d6c93b47d9cd087.png"
                alt=""
              />
            </a>
          </div>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <a
              href="/"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Home{" "}
            </a>

            <a
              href="/aboutus"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              About us{" "}
            </a>
            <a
              href="/contactus"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Contact us{" "}
            </a>

            <a
              href="/random"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 underline"
            >
              {" "}
              Random !{" "}
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="/signup"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Sign up{" "}
            </a>
            <a
              href="/signin"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Sign in{" "}
            </a>
          </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <a
            href="/random"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 underline"
          >
            {" "}
            Random !{" "}
          </a>
          <a
            href="/signup"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Sign up{" "}
          </a>
          <a
            href="/signin"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Sign in{" "}
          </a>
        </nav>
      </div>
    </header>
  );
}
