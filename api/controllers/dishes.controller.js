import Dish from "../models/dishes.model.js";
import Category from "../models/category.model.js";
import Restaurant from "../models/restaurant.model.js";

// Get all dishes
export const getDishes = async (req, res, next) => {
  try {
    const dishes = await Dish.find().populate("category_id restaurant_id");
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single dish by ID
export const getDishById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dish = await Dish.findById(id).populate("category_id restaurant_id");
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
    // Validate category
    const category = await Category.findById(category_id);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID!" });
    }

    // Validate restaurant
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
    const dish = await Dish.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category_id,
        image,
        ingredients,
      },
      { new: true } // This option returns the updated document
    ).populate("category_id restaurant_id");

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

export const getRandomDish = async (req, res) => {
  try {
    const { category1, category2, category3, category4, category5 } = req.query;
    const categories = [category1, category2, category3, category4, category5].filter(Boolean);

    if (categories.length === 0) {
      return res.status(400).json({
        message: "Bạn phải chọn ít nhất một lựa chọn",
        image: "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain",
      });
    }

    let dishes = [];
    let query = {};

    if (dishes.length === 0) {
      // Suggest a random dish if no matches found
      let matchFound = false;
      let randomSuggestion;
      const maxAttempts = 5;
      let attempts = 0;

      while (!matchFound && attempts < maxAttempts) {
        randomSuggestion = await Dish.aggregate([{ $sample: { size: 1 } }]);
        if (randomSuggestion.length) {
          const suggestion = await Dish.findById(randomSuggestion[0]._id).populate("restaurant_id");
          const suggestionCategories = suggestion.category_id.map((cat) => cat.toString());
          const matchingCategories = categories.filter((cat) => suggestionCategories.includes(cat));
          const matchPercentage = (matchingCategories.length / categories.length) * 100;

          if (matchPercentage > 0) {
            matchFound = true;
            return res.status(404).json({
              message: `Gợi ý này phù hợp đúng ${matchPercentage.toFixed(2)}% với các lựa chọn của bạn`,
              suggestion,
            });
          }
        }
        attempts++;
      }

      // If no match found after several attempts, return a generic message
      return res.status(404).json({
        message: " Vui lòng thử lại với các tùy chọn khác.",
      });
    }

    // Return a single random dish from the matched dishes
    const randomIndex = Math.floor(Math.random() * dishes.length);
    res.json([dishes[randomIndex]]);
  } catch (err) {
    console.error("Error fetching random dish:", err); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
