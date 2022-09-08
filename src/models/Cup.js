import { UUID } from "bson";
import { Schema, model, models } from "mongoose";

// NOTA: le falta cosas, como video por ejemplo
const cupSchema = new Schema({
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
  cantidad: 1,
  code: {
    type: Number,
    default: 3699525,
  },
});

cupSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

cupSchema.set("toJSON", {
  virtuals: true,
});

// cupSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

//export default models.Cup || model("Cup", cupSchema);
export default model("Cup", cupSchema);
