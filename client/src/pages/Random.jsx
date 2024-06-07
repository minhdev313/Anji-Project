import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Random() {
  const { currentUser } = useSelector((state) => state.user);
  const isPremium = currentUser?.level === "Premium";

  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    select5: "",
  });
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [selectionCount, setSelectionCount] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isPremium || selectionCount < 5) {
        setSelectionCount((prevCount) => prevCount + 1);
      } else {
        setError("You have reached the limit of random selections. Upgrade to premium for unlimited access.");
        return;
      }

      const { select1, select2, select3, select4, select5 } = formData;
      const categories = [select1, select2, select3, select4, select5].filter(Boolean);
      const categoryQueryString = categories.map((category, index) => `category${index + 1}=${category}`).join("&");

      const response = await fetch(`/api/dishes/random?${categoryQueryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg items-center justify-center content-center">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="w-full">
            <label htmlFor="select1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 1
            </label>
            <select
              id="select1"
              value={formData.select1}
              onChange={handleChange}
              className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Buổi ăn</option>
              <option value="666060a3073d7672437fd726">Sáng</option>
              <option value="666060b4073d7672437fd728">Trưa</option>
              <option value="666060c5073d7672437fd72a">Chiều</option>
              <option value="666060d6073d7672437fd72c">Tối</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="select2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 2
            </label>
            <select
              id="select2"
              value={formData.select2}
              onChange={handleChange}
              className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Lựa chọn cho bữa ăn</option>
              <option value="66606069073d7672437fd722">Ăn No</option>
              <option value="6660608a073d7672437fd724">Ăn Vặt</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="select3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 3
            </label>
            <select
              id="select3"
              value={formData.select3}
              onChange={handleChange}
              className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""> Nước / Khô </option>
              <option value="664b31917170b98018eddf49">Món Nước</option>
              <option value="664b31757170b98018eddf47">Món Khô</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="select4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 4
            </label>
            <select
              id="select4"
              value={formData.select4}
              onChange={handleChange}
              className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""> Chay / Mặn</option>
              <option value="664b32707170b98018eddf4c">Món Chay</option>
              <option value="664b32857170b98018eddf4e">Món Mặn</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="select5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select 5
            </label>
            <select
              id="select5"
              value={formData.select5}
              onChange={handleChange}
              className="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Cách chế biến</option>
              <option value="664b357c7170b98018eddf50">Món Chiên</option>
              <option value="664b359a7170b98018eddf52">Không Dầu</option>
              <option value="664b36017170b98018eddf54">Món Nướng</option>
              <option value="664b373e7170b98018eddf56">Món Hấp</option>
              <option value="664b374c7170b98018eddf58">Món Luộc</option>
            </select>
          </div>
        </div>
        {/* button random */}

        {currentUser ? (
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={!isPremium && selectionCount >= 5}
            >
              Tìm món ăn ngay
            </button>
          </div>
        ) : (
          <Link to="/signin">
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Bạn chưa đặp nhập nhấn vào đây
              </button>
            </div>
          </Link>
        )}
        {!isPremium && selectionCount >= 5 && (
          <div className="text-center mt-2 text-sm text-gray-600">
            <p>You have reached the limit of random selections.</p>
            <p>
              <Link to="https://anji-5vgz.onrender.com/payment/?">Upgrade to premium</Link> for unlimited access.
            </p>
          </div>
        )}
      </form>

      {dishes.length > 0 && (
        <div className="mt-8">
          <ul className="space-y-4">
            {dishes.map((dish) => (
              <li key={dish._id} className="p-4 bg-gray-100 rounded-lg shadow flex space-x-4">
                {dish.image && <img src={dish.image} alt={dish.name} className="w-40 h-40 object-cover rounded-lg" />}
                <div>
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p>{dish.description}</p>
                  <br />
                  <p className="text-ml">
                    Giá tiền :Chỉ từ {dish.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </p>

                  <p className="text-sm">Nhà Hàng: {dish.restaurant_id.name}</p>
                  <p className="text-sm">Địa Chỉ: {dish.restaurant_id.address}</p>
                  <p className="text-sm">Thành phần: {dish.ingredients.join(", ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display suggestion */}
      {suggestion && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Gợi Ý Món Ăn</h2>
          <div className="p-4 bg-gray-100 rounded-lg shadow flex space-x-4">
            {suggestion.image && (
              <img src={suggestion.image} alt={suggestion.name} className="w-40 h-40 object-cover rounded-lg" />
            )}
            <div>
              <h3 className="text-xl font-semibold">{suggestion.name}</h3>
              <p>{suggestion.description}</p>
              <br />
              <p className="text-ml">
                Giá tiền: Chỉ từ {suggestion.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
              </p>
              <p className="text-sm">Nhà Hàng: {suggestion.restaurant_id.name}</p>
              <p className="text-sm">Địa Chỉ: {suggestion.restaurant_id.address}</p>
              <p className="text-sm">Thành phần: {suggestion.ingredients.join(", ")}</p>
            </div>
          </div>
        </div>
      )}

      {/* Display error */}
      {error && <p className="text-red-500 mt-4 text-center text-base">{error}</p>}
    </div>
  );
}
