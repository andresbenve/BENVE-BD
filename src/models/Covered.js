import { UUID } from "bson";
import { Schema, model, models } from "mongoose";

// NOTA: le falta cosas, como video por ejemplo
const coveredSchema = new Schema({
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
    default: 3699570,
  },
});

coveredSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

coveredSchema.set("toJSON", {
  virtuals: true,
});

// coveredSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

//export default models.Covered || model("Covered", coveredSchema);
export default model("Covered", coveredSchema);
