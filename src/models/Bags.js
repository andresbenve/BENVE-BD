import { UUID } from "bson";
import { Schema, model, models } from "mongoose";
import { stringify } from "postcss";

// NOTA: le falta cosas, como video por ejemplo
const bagsSchema = new Schema({
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

  cantidad: {
    type: Number,
    default: 1,
  },
  code: {
    type: Number,
    default: 37721,
  },
});

bagsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

bagsSchema.set("toJSON", {
  virtuals: true,
});

// bagsSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

export default models.Bags || model("Bags", bagsSchema);
//export default model("Bags", bagsSchema);
