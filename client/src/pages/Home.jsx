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
              className="relative w-full md:max-w-5 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
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
                      action="https://anji-5vgz.onrender.com/payment/?"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Giao diện dễ sử dụng</h3>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                  <svg
                    className="text-red-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Lựa chọn đa dạng</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
              <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                <img
                  className="absolute top-6 -right-4 xl:-right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
                  alt=""
                />

                <div className="relative max-w-xs ml-auto">
                  <div className="overflow-hidden aspect-w-3 aspect-h-4">
                    <img
                      className="object-cover w-full h-full scale-150"
                      src="https://i.pinimg.com/736x/55/0a/75/550a7584d10a441df4ce4b3db148e46d.jpg"
                      alt=""
                    />
                  </div>

                  <div className="absolute bottom-0 -left-16">
                    <div className="bg-yellow-300">
                      <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                        <svg
                          className="w-9 sm:w-14 h-9 sm:h-14"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFF"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl">
                          {" "}
                          3000{" "}
                        </span>
                        <span className="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base">
                          {" "}
                          Món ăn
                          <br />
                          cập nhật liên tục{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:order-1">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Khám phá hương vị ẩm thực địa phương của chúng tôi
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Từ đồ ăn đường phố hấp dẫn đến các món ăn hảo hạng tinh tế, ẩm thực địa phương của chúng tôi mang đến
                  một cuộc phiêu lưu ẩm thực không giống bất kỳ nơi nào khác. Trải nghiệm các loại gia vị sống động,
                  nguyên liệu tươi ngon và công thức nấu ăn lâu đời khiến cho món ăn của chúng tôi trở thành niềm vui
                  thực sự cho các giác quan.
                </p>

                <a
                  href="/"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  <Link to="/post">Bắt đầu tìm hiểu</Link>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
              <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    className="object-cover object-top origin-top scale-150"
                    src="https://i.pinimg.com/564x/64/38/02/6438023d7dcbc0f509ea71e8624fc20d.jpg"
                    alt=""
                  />
                </div>

                <div className="relative">
                  <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                    <img
                      className="object-cover scale-150 lg:origin-bottom-right"
                      src="https://i.pinimg.com/564x/f2/bb/49/f2bb49eaf96afedf59f39fc508650364.jpg"
                      alt=""
                    />
                  </div>

                  <div className="absolute inset-0 grid w-full h-full place-items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                    >
                      <svg
                        className="w-6 h-6 lg:w-8 lg:h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="absolute -translate-x-1/2 left-1/2 -top-16">
                  <img
                    className="w-32 h-32"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-col items-start xl:px-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Những thú vui bất ngờ đang chờ đón vị giác của bạn.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Hãy chuẩn bị để được ngạc nhiên thú vị bởi những món ăn ngon bất ngờ của chúng tôi. Mỗi món ăn được
                  chế biến không chỉ để thỏa mãn cơn đói của bạn mà còn để kích thích vị giác của bạn bằng hương vị độc
                  đáo và thú vị.
                </p>

                <a
                  href="/"
                  title=""
                  className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600"
                  role="button"
                >
                  <Link to="/random">Bắt đầu ngay</Link>
                  <svg
                    className="w-5 h-5 ml-8 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
