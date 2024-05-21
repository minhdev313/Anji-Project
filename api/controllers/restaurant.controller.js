import Restaurant from "../models/restaurant.model.js";
import Dish from "../models/dishes.model.js";

// Get all restaurants (continued)
export const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().populate("dishes");
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single restaurant by ID (continued)
export const getRestaurantById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id).populate("dishes");
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new restaurant
export const createRestaurant = async (req, res, next) => {
  const { name, address, district, phone_number, working_hours } = req.body;

  // Validate data (implement your validation logic here)

  try {
    const newRestaurant = new Restaurant({
      name,
      address,
      district,
      phone_number,
      working_hours,
    });

    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a restaurant by ID
export const updateRestaurant = async (req, res, next) => {
  const { id } = req.params;
  const { name, address, district, phone_number, dishes, working_hours } = req.body;

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      id,
      {
        name,
        address,
        district,
        phone_number,
        dishes,
        working_hours,
      },
      { new: true } // This option returns the updated document
    ).populate("dishes"); // Populate dishes to get full details

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }

    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a restaurant by ID
export const deleteRestaurant = async (req, res, next) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findByIdAndDelete(id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found!" });
    }

    // Handle deleting associated dishes (optional)
    // You might want to implement logic to delete or update dishes associated with the deleted restaurant

    res.status(200).json({ message: "Restaurant deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
