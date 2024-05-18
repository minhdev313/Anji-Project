import React from "react";

export default function AboutUs() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Our Story: Finding the Perfect Dish Made Easy
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Choosing the right dish can often be a daunting task. With countless options and diverse flavors, it's easy
            to feel overwhelmed. That’s where Anji comes in. Our founder, Anji, grew up in a bustling household where
            every meal was an event, and the dinner table was a place of joy and connection. However, she often noticed
            how difficult it was for her family and friends to agree on what to eat. The sheer number of choices often
            led to indecision, and sometimes, disappointment. At Anji, we believe that every meal should be a delightful
            experience. Our team of culinary experts and tech enthusiasts work tirelessly to curate a diverse menu,
            provide personalized recommendations, and ensure that each dish meets our high standards of taste and
            quality. Whether you're craving something new or looking for a trusted favorite, Anji is here to help you
            discover the perfect meal for any occasion.
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

          <div className="flex items-center justify-center mt-8 text-center md:mt-0">
            <a
              href="#"
              title="Join our team"
              className="inline-flex items-center items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Join our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
