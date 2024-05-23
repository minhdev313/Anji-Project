import React, { useState } from "react";

export default function Random() {
  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    select3: "",
  });
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { select1, select2, select3 } = formData;
      const categories = [select1, select2, select3].filter(Boolean);
      const categoryQueryString = categories.map((category, index) => `category${index + 1}=${category}`).join("&");

      const response = await fetch(`/api/dishes/random?${categoryQueryString}`);
      const data = await response.json();

      if (response.ok) {
        setDishes(data);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-1/3">
            <label htmlFor="select1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 1
            </label>
            <select
              id="select1"
              value={formData.select1}
              onChange={handleChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Chọn một tùy chỉnh</option>
              <option value="Món Nước">Món Nước</option>
              <option value="Món Khô">Món Khô</option>
            </select>
          </div>
          <div className="w-1/3">
            <label htmlFor="select2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 2
            </label>
            <select
              id="select2"
              value={formData.select2}
              onChange={handleChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Chọn một tùy chỉnh</option>
              <option value="Món Chay">Món Chay</option>
              <option value="Món Mặn">Món Mặn</option>
            </select>
          </div>
          <div className="w-1/3">
            <label htmlFor="select3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 3
            </label>
            <select
              id="select3"
              value={formData.select3}
              onChange={handleChange}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Chọn một tùy chỉnh</option>
              <option value="Món Chiên">Món Chiên</option>
              <option value="Không Dầu">Không Dầu</option>
              <option value="Món Nướng">Món Nướng</option>
              <option value="Món Hấp">Món Hấp</option>
              <option value="Món Luộc">Món Luộc</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {dishes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Random Dishes</h2>
          <ul className="space-y-4">
            {dishes.map((dish) => (
              <li key={dish._id} className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p>{dish.description}</p>
                <p className="text-sm text-gray-500">Category: {dish.category_id.name}</p>
                <p className="text-sm text-gray-500">Restaurant: {dish.restaurant_id.name}</p>
                <p className="text-sm text-gray-500">Price: ${dish.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
