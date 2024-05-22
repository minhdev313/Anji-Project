import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    district: {
      type: String,
      required: false,
      trim: true,
    },
    phone_number: {
      type: String,
      required: false,
      trim: true,
    },
    working_hours: {
      type: String,
      required: false,
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
