import Category from '../models/category.model.js';
import Dish from '../models/dishes.model.js';

// Get all categories
export const getCatagory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single category by ID
export const getCatagoryById =  async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id).populate('dishes');
    if (!category) {
      return res.status(404).json({ message: "Category not found!" });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new category
export const createCatagory =  async (req, res) => {
  const { name, description } = req.body;

  // Validate data (implement your validation logic here)

  try {
    const newCategory = new Category({
      name,
      description,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a category by ID
export const updateCatagory =  async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  // Validate data (implement your validation logic here)

  try {
    const category = await Category.findByIdAndUpdate(id, {
      name,
      description,
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found!" });
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a category by ID
export const deleteCatagory =  async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found!" });
    }

    // Handle deleting associated dishes (optional)
    // You might want to implement logic to delete or update dishes associated with the deleted category

    res.status(200).json({ message: "Category deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
