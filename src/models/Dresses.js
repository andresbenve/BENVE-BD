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
  code: {
    type: Number,
    default: 3699570,
  },
});

// dressesSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// dressesSchema.set("toJSON", {
//   virtuals: true,
// });

dressesSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default models.Dresses || model("Dresses", dressesSchema);
