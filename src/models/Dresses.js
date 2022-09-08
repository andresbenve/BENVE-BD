import { UUID } from "bson";
import { Schema, model, models } from "mongoose";
import { stringify } from "postcss";

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
  size: {
    type: String,
    default: "M",
  },
  rating: Number,
  video: {
    type: String,
  },
  code: {
    type: Number,
    default: 3677749,
  },
});

dressesSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

dressesSchema.set("toJSON", {
  virtuals: true,
});

// dressesSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

export default models.Dresses || model("Dresses", dressesSchema);
//export default model("Dresses", dressesSchema);
