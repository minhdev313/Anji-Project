import React, { useState, useEffect } from "react";

export default function Random() {
  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    select3: "",
  });
  const [dishes, setDishes] = useState([]);
  const [showDishes, setShowDishes] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Fetch dishes after form submission
    try {
      const response = await fetch("/api/dishes"); // Replace with your API endpoint
      const data = await response.json();
      setDishes(data);
      setShowDishes(true);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
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

      {showDishes && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Dishes</h2>
          {dishes.length > 0 ? (
            <ul>
              {dishes.map((dish) => (
                <li key={dish._id} className="mb-2 p-2 border border-gray-300 rounded-lg">
                  <h3 className="text-lg font-medium">{dish.name}</h3>
                  <p>{dish.description}</p>
                  <p>Price: {dish.price}</p>
                  <p>Category: {dish.category_id.name}</p>
                  <p>Restaurant: {dish.restaurant_id.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No dishes found.</p>
          )}
        </div>
      )}
    </form>
  );
}
