import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-white lg:py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className="w-auto h-5 lg:h-10"
                src="https://i.pinimg.com/736x/7f/1a/69/7f1a69a7fa1d96b28eb22620960da2be.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/aboutus"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About us
            </Link>

            <Link
              to="/mascot"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Mascot
            </Link>
            <Link
              to="/post"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Post
            </Link>

            <Link
              to="/random"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 underline"
            >
              Random !
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {currentUser ? (
              <span className="text-base font-medium text-black">{`${currentUser.userName}`}</span>
            ) : (
              <Link
                to="/signup"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Sign up
              </Link>
            )}

            <Link
              to="/profile"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {currentUser ? (
                <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
              ) : (
                "Sign in"
              )}
            </Link>
          </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <Link
            to="/random"
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 underline"
          >
            Random !
          </Link>
          <Link
            to="/signup"
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sign up
          </Link>
          <Link
            to="/signin"
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
