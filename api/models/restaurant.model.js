import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    district: {
      type: String,
      required: true,
      trim: true,
    },
    phone_number: {
      type: String,
      required: true,
      trim: true,
    },
    working_hours: {
      type: String,
      required: true,
      trim: true,
    },
    dishes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dish",
      },
    ],
  },
  { timestamps: true }
);

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
