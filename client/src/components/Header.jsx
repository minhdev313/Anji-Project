import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const isPremium = currentUser?.level === "Premium";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-red-500 fixed w-full top-0 z-50">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-gradient-to-r bg-opacity-90">
          <nav className="relative flex items-center justify-between h-14 lg:rounded-md lg:shadow-lg lg:h-20 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <Link to="/" className="flex">
                <img
                  className="w-auto h-5 lg:h-10"
                  src="https://i.pinimg.com/originals/7f/1a/69/7f1a69a7fa1d96b28eb22620960da2be.png"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
              <Link
                to="/"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
              >
                Trang Chủ
              </Link>
              <Link
                to="/aboutus"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
              >
                Về Chúng tôi
              </Link>
              <Link
                to="/mascot"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
              >
                Mascot
              </Link>
              <Link
                to="/post"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
              >
                Bài Đăng
              </Link>
              <Link
                to="/random"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200 underline"
              >
                Random!
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {currentUser ? (
                <div className="flex items-center space-x-2">
                  <span
                    style={{
                      backgroundColor: isPremium ? "gold" : "silver",
                      padding: "5px 10px",
                      borderRadius: "12px",
                      display: "inline-block",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      backgroundImage: isPremium
                        ? "linear-gradient(to right, #ffd700, #ffe033)"
                        : "linear-gradient(to right, #e0e0e0, #f8f8f8)",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {currentUser.level}
                  </span>
                  <span className="text-base font-medium text-white">{currentUser.userName}</span>
                </div>
              ) : (
                <Link
                  to="/signup"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                >
                  Đăng kí
                </Link>
              )}
              <Link
                to="/profile"
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
              >
                {currentUser ? (
                  <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
                ) : (
                  "Đăng Nhập"
                )}
              </Link>
            </div>

            <div className="lg:hidden">
              <button type="button" className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>

          {isMobileMenuOpen && (
            <div className="lg:hidden bg-red-500 p-4 rounded-md shadow-lg mt-2">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trang Chủ
                </Link>
                <Link
                  to="/aboutus"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Về Chúng tôi
                </Link>
                <Link
                  to="/mascot"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mascot
                </Link>
                <Link
                  to="/post"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bài Đăng
                </Link>
                <Link
                  to="/random"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200 underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Random!
                </Link>
                {currentUser ? (
                  <div className="flex flex-col items-start space-y-2">
                    <span
                      style={{
                        backgroundColor: isPremium ? "gold" : "silver",
                        padding: "5px 10px",
                        borderRadius: "12px",
                        display: "inline-block",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundImage: isPremium
                          ? "linear-gradient(to right, #ffd700, #ffe033)"
                          : "linear-gradient(to right, #e0e0e0, #f8f8f8)",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      {currentUser.level}
                    </span>
                    <span className="text-base font-medium text-white">{currentUser.userName}</span>
                  </div>
                ) : (
                  <Link
                    to="/signup"
                    className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Đăng kí
                  </Link>
                )}
                <Link
                  to="/profile"
                  className="text-base font-medium text-white transition-all duration-200 hover:text-blue-200 focus:text-blue-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {currentUser ? (
                    <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
                  ) : (
                    "Đăng Nhập"
                  )}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="pt-24 lg:pt-32">
      </div>
    </>
  );
}
