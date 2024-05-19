import Dish from '../models/dishes.model.js';
import Category from '../models/category.model.js';
import Restaurant from '../models/restaurant.model.js';

// Get all dishes
export const getDishes = async (req, res, next) => {
  try {
    const dishes = await Dish.find().populate('category_id restaurant_id');
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single dish by ID
export const getDishById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dish = await Dish.findById(id).populate('category_id restaurant_id');
    if (!dish) {
      return res.status(404).json({ message: "Dish not found!" });
    }
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new dish
export const createDish = async (req, res, next) => {
  const { name, description, price, category_id, image, ingredients, restaurant_id } = req.body;

  // Validate data (implement your validation logic here)

  try {
    const category = await Category.findById(category_id);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID!" });
    }

    const restaurant = await Restaurant.findById(restaurant_id);
    if (!restaurant) {
      return res.status(400).json({ message: "Invalid restaurant ID!" });
    }

    const newDish = new Dish({
      name,
      description,
      price,
      category_id,
      image,
      ingredients,
      restaurant_id,
    });

    const savedDish = await newDish.save();
    res.status(201).json(savedDish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a dish by ID
export const updateDish = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, category_id, image, ingredients } = req.body;

  // Validate data (implement your validation logic here)

  try {
    const dish = await Dish.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category_id,
      image,
      ingredients,
    });

    if (!dish) {
      return res.status(404).json({ message: "Dish not found!" });
    }

    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a dish by ID
export const deleteDish = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dish = await Dish.findByIdAndDelete(id);

    if (!dish) {
      return res.status(404).json({ message: "Dish not found!" });
    }

    res.status(200).json({ message: "Dish deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};