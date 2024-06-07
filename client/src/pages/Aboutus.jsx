import React from "react";

export default function AboutUs() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Câu chuyện của chúng tôi: <br /> Tìm món ăn hoàn hảo một cách dễ dàng
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Việc lựa chọn món ăn phù hợp thường là một nhiệm vụ khó khăn. Với vô số lựa chọn và hương vị đa dạng, thật
            dễ dàng để cảm thấy choáng ngợp. Đó chính là lúc Anji xuất hiện. Người sáng lập của chúng tôi, Anji, lớn lên
            trong một gia đình bận rộn, nơi mỗi bữa ăn đều là một sự kiện, và bàn ăn là nơi của niềm vui và sự gắn kết.
            Tuy nhiên, cô thường nhận thấy gia đình và bạn bè của cô khó khăn như thế nào để thống nhất về việc nên ăn
            gì. Số lượng lựa chọn quá nhiều thường dẫn đến sự do dự, và đôi khi là thất vọng. Tại Anji, chúng tôi tin
            rằng mọi bữa ăn đều phải là một trải nghiệm thú vị. Đội ngũ chuyên gia ẩm thực và những người đam mê công
            nghệ của chúng tôi làm việc không biết mệt mỏi để tuyển chọn một thực đơn đa dạng, đưa ra các khuyến nghị
            được cá nhân hóa và đảm bảo rằng mỗi món ăn đều đáp ứng các tiêu chuẩn cao về hương vị và chất lượng của
            chúng tôi. Cho dù bạn đang thèm một món ăn mới hay đang tìm kiếm một món ăn yêu thích đáng tin cậy, Anji
            luôn ở đây để giúp bạn khám phá bữa ăn hoàn hảo cho mọi dịp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div className="flex justify-center">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://i.pinimg.com/564x/cd/5b/44/cd5b44f986edd6ea1dd2fbe70a595921.jpg"
              alt="Anji"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://i.pinimg.com/564x/05/94/a7/0594a7f71b02c28ff6a5aad2a3019b95.jpg"
              alt="Anji"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://i.pinimg.com/564x/8d/c9/5d/8dc95de834fe155568d5620ae465a114.jpg"
              alt="Anji"
            />
          </div>
        </div>
        <br />
        <div className="flex items-center justify-center mt-8 text-center md:mt-0">
          <a
            href="#"
            title="Join our team"
            className="inline-flex items-center items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Tham gia cùng chúng tớ
          </a>
        </div>
      </div>
    </section>
  );
}
