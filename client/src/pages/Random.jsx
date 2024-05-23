import React, { useState } from "react";

export default function Random() {
  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    select3: "",
  });
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

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

      const response = await fetch(`/api/dishes/random?${categoryQueryString}`, {
        headers: {
          Accept: "application/json",
          // Add other headers if needed
        },
      });

      const data = await response.json();

      if (response.ok) {
        setDishes(data);
        setError(null);
        setSuggestion(null);
      } else {
        setDishes([]);
        setError(data.message);
        setSuggestion(data.suggestion);
      }
    } catch (err) {
      setError(err.message);
      setSuggestion(null);
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
              <option value="664b31917170b98018eddf49">Món Nước</option>
              <option value="664b31757170b98018eddf47">Món Khô</option>
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
              <option value="664b32707170b98018eddf4c">Món Chay</option>
              <option value="664b32857170b98018eddf4e">Món Mặn</option>
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
              <option value="664b357c7170b98018eddf50">Món Chiên</option>
              <option value="664b359a7170b98018eddf52">Không Dầu</option>
              <option value="664b36017170b98018eddf54">Món Nướng</option>
              <option value="664b373e7170b98018eddf56">Món Hấp</option>
              <option value="664b374c7170b98018eddf58">Món Luộc</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Tìm món ăn ngày
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {dishes.length > 0 && (
        <div className="mt-8">
          <ul className="space-y-4">
            {dishes.map((dish) => (
              <li key={dish._id} className="p-4 bg-gray-100 rounded-lg shadow flex space-x-4">
                {dish.image && <img src={dish.image} alt={dish.name} className="w-24 h-24 object-cover rounded-lg" />}
                <div>
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p>{dish.description}</p>
                  <p className="text-sm">Nhà Hàng: {dish.restaurant_id.name}</p>
                  <p className="text-sm">Địa Chỉ: {dish.restaurant_id.address}</p>
                  <p className="text-sm">Thành phần: {dish.ingredients.join(", ")}</p>
                  <p className="text-sm">Giá tiền: {dish.price} VND</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {suggestion && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Gợi Ý Món Ăn</h2>
          <div className="p-4 bg-gray-100 rounded-lg shadow flex space-x-4">
            {suggestion.image && (
              <img src={suggestion.image} alt={suggestion.name} className="w-24 h-24 object-cover rounded-lg" />
            )}
            <div>
              <h3 className="text-xl font-semibold">{suggestion.name}</h3>
              <p>{suggestion.description}</p>

              <p className="text-sm">Nhà Hàng: {suggestion.restaurant_id.name}</p>
              <p className="text-sm">Địa Chỉ: {suggestion.restaurant_id.address}</p>
              <p className="text-sm">Thành phần: {suggestion.ingredients.join(", ")}</p>
              <p className="text-sm">Giá tiền: {suggestion.price} VND</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
