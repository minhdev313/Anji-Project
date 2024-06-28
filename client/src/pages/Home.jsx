import React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 Chúng tôi <br className="block sm:hidden" />
              Anji
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Hãy để chúng tôi làm cho trải nghiệm ăn uống của bạn thêm thú vị với những gợi ý ẩm thực bất ngờ và được
              cá nhân hóa. Khám phá thế giới hương vị và biến mỗi bữa ăn thành một cuộc phiêu lưu thú vị với ANJI
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Có một câu hỏi? </span>
              </span>
              <br className="block sm:hidden" />
              Hỏi chúng tôi trên{" "}
              <a
                href="https://www.facebook.com/AnJi358pro"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                FanPage
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-20 -translate-x-1/2 left-1/2 small-screen"
              src="https://images.squarespace-cdn.com/content/v1/639b7e13518990603a3ecf7a/c1dc4f01-76d4-4192-a879-733fbcc8ac73/Blobs+02.png?format=1500w"
              alt=""
            />

            <img
              className="w-full max-w-[800px] md:max-w-5xl lg:max-w-lg mx-auto origin-bottom scale-100 sm:scale-100 md:scale-100 lg:scale-100"
              src="https://gcdnb.pbrd.co/images/Jad9wTReM8BA.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="py-20 bg-gradient-to-r sm:py-16"></section>

      <div>
        <section className="py-10 bg-gradient-to-r from-red-200 to-red-600 sm:py-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
              {currentUser ? (
                <>
                  {currentUser.level !== "Premium" ? (
                    <form
                      action="https://anji-5vgz.onrender.com/payment"
                      style={{
                        background: "#6e8efb",
                        padding: "20px",
                        borderRadius: "15px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#fff", marginRight: "1rem" }}>
                        Nhận quyền truy cập đầy đủ vào Anji
                      </h2>
                      <button
                        type="submit"
                        id="create-payment-link-btn"
                        style={{
                          padding: "10px 20px",
                          fontSize: "1.25rem",
                          fontWeight: "600",
                          color: "#333",
                          background: "#ffcc00",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "background 0.3s ease-in-out",
                        }}
                      >
                        Nâng cấp
                      </button>
                    </form>
                  ) : (
                    <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "#fff" }}>
                      Chào mừng {currentUser.userName} đã quay trở lại với Anji
                      <span role="img" aria-label="Wave Emoji">
                        😘
                      </span>
                    </h2>
                  )}
                </>
              ) : (
                <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "#fff" }}>
                  Chào mừng bạn đã đến với Anji
                  <span role="img" aria-label="Wave Emoji">
                    😘
                  </span>
                </h2>
              )}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <svg
                    className="text-blue-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Thanh toán an toàn</h3>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                  <svg
                    className="text-orange-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Thao tác đơn giản</h3>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                  <svg
                    className="text-green-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 003 11c0 4.694 3.37 8.574 7.818 8.958a5.502 5.502 0 0110.928 0 2 2 0 01-1.78 2.842H6.5a2 2 0 110-4h13a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Nhanh chóng tiện lợi</h3>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-pink-100 rounded-full">
                  <svg
                    className="text-pink-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 15a4 4 0 001.828 3.416l.742.371a8 8 0 004.577 0l.742-.371A4 4 0 0015 15V9a4 4 0 00-2.828-3.416l-.742-.371a8 8 0 00-4.577 0l-.742.371A4 4 0 003 9v6z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Tiện lợi dễ dàng</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 text-center lg:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <div className="p-8 xl:px-10 xl:py-9">
                  <img
                    className="flex-shrink-0 object-cover mx-auto rounded-lg w-28 h-28"
                    src="https://cdn.ontariocolleges.ca/static/media/ontariocolleges-green-block.b95cfc0c.jpg"
                    alt=""
                  />
                  <p className="mt-8 text-lg font-semibold text-black">Spicy BBQ Sandwich</p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">Quick & easy recipes for spicy BBQ sandwich</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <div className="p-8 xl:px-10 xl:py-9">
                  <img
                    className="flex-shrink-0 object-cover mx-auto rounded-lg w-28 h-28"
                    src="https://cdn.ontariocolleges.ca/static/media/ontariocolleges-green-block.b95cfc0c.jpg"
                    alt=""
                  />
                  <p className="mt-8 text-lg font-semibold text-black">Veggie Pizza</p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">Quick & easy recipes for veggie pizza</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <div className="p-8 xl:px-10 xl:py-9">
                  <img
                    className="flex-shrink-0 object-cover mx-auto rounded-lg w-28 h-28"
                    src="https://cdn.ontariocolleges.ca/static/media/ontariocolleges-green-block.b95cfc0c.jpg"
                    alt=""
                  />
                  <p className="mt-8 text-lg font-semibold text-black">Chocolate Cake</p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">Quick & easy recipes for chocolate cake</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <div className="p-8 xl:px-10 xl:py-9">
                  <img
                    className="flex-shrink-0 object-cover mx-auto rounded-lg w-28 h-28"
                    src="https://cdn.ontariocolleges.ca/static/media/ontariocolleges-green-block.b95cfc0c.jpg"
                    alt=""
                  />
                  <p className="mt-8 text-lg font-semibold text-black">Fruit Salad</p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">Quick & easy recipes for fruit salad</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-4">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2837034065889987"
          data-ad-slot="2741116572"
          data-ad-format="auto"
        ></ins>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </section>
  );
}
