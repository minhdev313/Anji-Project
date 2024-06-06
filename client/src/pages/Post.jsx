import React from "react";

export default function Post() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Blog Ẩm Thực</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            AnJi là một trang web công nghệ giúp cuộc phiêu lưu ẩm thực của bạn trở nên dễ dàng và thú vị hơn với những
            gợi ý bất ngờ và ngon miệng!!
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          <div>
            <a href="detail-post" title="" className="block">
              <div className="h-60 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://cafebatdongsan.com.vn/uploads/image/images/Hiyori-Garden-tower-da-nang-1.jpg"
                  alt=""
                />
              </div>
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
              Món Ăn
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="detail-post" title="" className="text-black">
                Top 5 món ăn ngon ở thành phố Đà Nẵng
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Các món ngon Đà Nẵng không chỉ thu hút du khách đến những bãi biển đẹp và các điểm du lịch hấp dẫn mà còn
              bởi vô số món ăn đặc trưng của ẩm thực miền Trung.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . 12 Tháng 5, 2024
            </span>
          </div>

          <div>
            <a href="detail" title="" className="block">
              <div className="h-60 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://th.bing.com/th/id/OIP.yIS9WI-x61ivXya700SBrwHaEU?rs=1&pid=ImgDetMain"
                  alt=""
                />
              </div>
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              Quán Ăn
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="detail" title="" className="text-black">
                TOP 5 quán ăn bạn có thể ghé thử (Quận Ngũ Hành Sơn)
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Quận Ngũ Hành Sơn, Đà Nẵng là một trong những khu vực ăn uống và giải trí đông đúc nhất của thành phố, bao
              gồm các quán nhậu sôi động mỗi đêm. Bạn muốn tìm một quán nhậu ở quận Ngũ Hành Sơn nhưng chưa biết chọn
              quán nào?
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . 12 Tháng 5, 2024
            </span>
          </div>

          <div>
            <a href="detail-post" title="" className="block">
              <div className="h-60 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://media.doanhnghiephoinhap.vn/uploads/2023/07/02/cau-da-nang2-1688261044.jpg"
                  alt=""
                />
              </div>
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              Quán Ăn
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="text-black">
                Top 9 nhà hàng, quán ăn ngon nhất Quận Liên Chiểu, Đà Nẵng
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Đến với Liên Chiểu, Đà Nẵng, bạn chắc chắn không thể bỏ lỡ cơ hội thưởng thức những món ăn ngon tại nơi
              đây. Nắm bắt nhu cầu đó...
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . 12 Tháng 5, 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
