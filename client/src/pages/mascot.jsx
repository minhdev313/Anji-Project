import React, { useState } from "react";

export default function Mascot() {
  // State to manage visibility of additional content for each section
  const [showMoreMuoi, setShowMoreMuoi] = useState(false);
  const [showMoreAnother, setShowMoreAnother] = useState(false); // Assuming another mascot

  // Function to toggle 'showMoreMuoi' state
  const toggleShowMoreMuoi = () => setShowMoreMuoi(!showMoreMuoi);

  // Function to toggle 'showMoreAnother' state
  const toggleShowMoreAnother = () => setShowMoreAnother(!showMoreAnother);

  return (
    <section>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hãy chọn một Mascot đại diện cho bạn
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Các Mascot được tạo và lấy cảm hứng từ các hương liệu và món ăn truyền thống của Việt Nam.
            </p>
          </div>
        </div>
      </section>

      <section>
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
                        className="object-cover w-full h-full scale-150 "
                        src="https://i.pinimg.com/736x/de/2c/02/de2c02abdc1db797494cf642ed32e6b3.jpg"
                        alt="Bé Muối"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:order-1">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Bé Muối</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    <strong>💫 Họ và tên:</strong> Muối Trắng (mọi người thường gọi là Bé Muối) <br />
                    <strong>💫 Đặc điểm:</strong> Bé Muối có một ngoại hình vô cùng đặc biệt. Dù sinh ra ở biển nhưng
                    cậu không giống như những cư dân khác có mái tóc bạch kim, cậu có mái tóc màu nâu khá đặc biệt. Với
                    nụ cười ấm áp và đôi má lúm đồng tiền, cậu luôn mang lại cảm giác gần gũi và dễ mến cho những người
                    xung quanh. <br />
                    <strong>💫 Sở thích:</strong> Ăn uống là sở thích lớn nhất của cậu. Ngoài ra cậu còn thích khám phá
                    các vùng biển xa xôi, nơi cậu có thể tìm hiểu về cuộc sống của các loài sinh vật biển.
                  </p>
                  {showMoreMuoi && (
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                      <strong>💫 Tính cách:</strong> Hoạt bát, vui vẻ, là cây hài của AnJi <br />
                      <strong>💫 Câu nói yêu thích:</strong> Nước chảy bèo trôi… nước sôi thì nhúng lẩu. <br />
                      <strong>💫 Đồ ăn yêu thích:</strong> Mọi loại lẩu, tôm nướng muối ớt và hoa quả tươi ăn kèm muối
                      tôm <br />
                      <strong>💫 Xếp hạng:</strong> <br />
                      + Độ Đẹp trai: 5/5⭐ (Này Muối tự chấm, AnJi hổng biết j chơn á) <br />
                      + Độ hài hước: 4/5⭐ <br />+ Độ khéo tay hay làm: 3/5⭐ (biết ăn thôi chứ không giỏi làm mấy)
                    </p>
                  )}
                  <button
                    onClick={toggleShowMoreMuoi}
                    className="mt-4 text-blue-600 hover:underline focus:outline-none"
                  >
                    {showMoreMuoi ? "Ẩn bớt" : "Hiện thêm"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div>
          <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                <div className="pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Bé Ớt</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    <strong>😘Họ và tên :</strong> Ớt Cay Cay (𝑩𝒆́ 𝑶̛́𝒕) <br />
                    <strong>🎈 Đặc điểm:</strong> 𝑩𝒆́ 𝑶̛́𝒕 rất thích ăn những món ăn cay. Cô bé còn thích khám phá các nền
                    ẩm thực đa dạng, nơi cô có thể thử thách vị giác của mình với những món ăn mới lạ. Cô cũng rất thích
                    chơi thể thao, đặc biệt là chạy bộ và đá bóng. Vào những ngày rảnh rỗi, cô thường dành thời gian để
                    viết lách và sáng tạo những câu chuyện mới mẻ.
                    <br />
                    <strong>📍 Sở thích:</strong> A brief description of the mascot's interests.
                  </p>
                  {showMoreAnother && (
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                      <strong>🥰Tính cách:</strong> Năng động, nhiệt tình, luôn là nguồn năng lượng tích cực của AnJi
                      <br />
                      <strong>🏆 Câu nói yêu thích:</strong> Hãy sống hết mình, sống thật rực rỡ! <br />
                      <strong>💫 Đồ ăn yêu thích:</strong> DGà nướng ớt cay và Hoa quả nhiệt đới.
                      <br />
                      <strong>📍 Xếp hạng:</strong> <br />
                      📌Độ Đáng yêu: 5/5 ⭐ <br />
                      📌Độ nhiệt huyết: 5/5⭐ ( không ai năng lượng qua 𝑶̛́𝒕 nhà ANJI nhoa) <br />
                      📌Độ sáng tạo: 3/5⭐ (biết tưởng tượng lung tung chớ hông giỏi thực hành mấy)
                    </p>
                  )}
                  <button
                    onClick={toggleShowMoreAnother}
                    className="mt-4 text-blue-600 hover:underline focus:outline-none"
                  >
                    {showMoreAnother ? "Ẩn bớt" : "Hiện thêm"}
                  </button>
                </div>
                <div className="relative md:order-1">
                  <img
                    className="absolute top-6 -right-4 xl:-right-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
                    alt=""
                  />

                  <div className="relative max-w-xs ml-auto">
                    <div className="overflow-hidden aspect-w-3 aspect-h-4">
                      <img
                        className="object-cover w-full h-full scale-150"
                        src="https://i.pinimg.com/736x/35/3f/f6/353ff65dde25f86286412b01c8032c42.jpg"
                        alt="Another Mascot"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
