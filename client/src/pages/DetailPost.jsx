import React from "react";

export default function DetailPost() {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
      <div className="w-full mx-auto space-y-4 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase">#ẨmThựcĐàNẵng</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">Top 5 món ăn ngon ở thành phố Đà Nẵng</h1>
        <p className="text-sm dark:text-gray-600">
          bởi
          <a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-600">
            <span itemprop="name">Nguyễn Văn A</span>
          </a>{" "}
          vào
          <time dateTime="2024-05-31">31 tháng 5, 2024</time>
        </p>
      </div>
      <div className="dark:text-gray-800">
        <p>
          Đà Nẵng không chỉ nổi tiếng với cảnh đẹp mà còn thu hút du khách bởi ẩm thực đa dạng và phong phú. Dưới đây là
          top 5 món ngon bạn nên thử khi đến Đà Nẵng:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="https://source.unsplash.com/600x400/?mi-quang"
              alt="Mì Quảng"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">Mì Quảng</h2>
            <p>
              Mì Quảng là món ăn đặc trưng của Đà Nẵng với sợi mì to, dai kết hợp với tôm, thịt gà, thịt heo và nước lèo
              đậm đà.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?banh-xeo"
              alt="Bánh Xèo"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">Bánh Xèo</h2>
            <p>
              Bánh xèo Đà Nẵng được làm từ bột gạo, nhân tôm, thịt, giá đỗ và ăn kèm với rau sống và nước mắm chua ngọt.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?cao-lau"
              alt="Cao Lầu"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">Cao Lầu</h2>
            <p>
              Cao Lầu là món ăn đặc sản Hội An nhưng cũng rất phổ biến ở Đà Nẵng, với sợi mì dai ngon, thịt heo, rau
              sống và nước dùng đặc biệt.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?bun-cha-ca"
              alt="Bún Chả Cá"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">Bún Chả Cá</h2>
            <p>
              Bún chả cá Đà Nẵng nổi tiếng với chả cá thơm ngon, nước dùng ngọt thanh và các loại rau ăn kèm tươi ngon.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?che-sau-rieng"
              alt="Chè Sầu Riêng"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">Chè Sầu Riêng</h2>
            <p>
              Chè sầu riêng là món tráng miệng hấp dẫn với vị ngọt thanh của chè, vị béo ngậy của sầu riêng và các loại
              trái cây khác.
            </p>
          </div>
        </div>
        <p className="mt-6">
          Khám phá những món ngon của Đà Nẵng và thưởng thức những món ăn hấp dẫn này để có một trải nghiệm đáng nhớ!
        </p>
      </div>
      <div className="pt-12 border-t dark:border-gray-300">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt="Tác giả"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Nguyễn Văn A</h4>
            <p className="dark:text-gray-600">
              Nguyễn Văn A là một người đam mê ẩm thực và viết văn, đặc biệt là đam mê với ẩm thực Việt Nam. Anh ấy có
              nhiều năm kinh nghiệm viết về ẩm thực và du lịch.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
