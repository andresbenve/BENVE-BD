import { Schema, model, models } from "mongoose";

// NOTA: le falta cosas, como video por ejemplo
const dressesSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: Array,
    default: [
      {
        type: String,
      },
    ],
  },
  rating: Number,
  video: {
    type: String,
  },
  code: "3699570",
});
export default models.Dresses || model("Dresses", dressesSchema);
