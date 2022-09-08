import { UUID } from "bson";
import { Schema, model, models } from "mongoose";

// NOTA: le falta cosas, como video por ejemplo
const sweatersSchema = new Schema({
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
    default: 3677732,
  },
});

sweatersSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

sweatersSchema.set("toJSON", {
  virtuals: true,
});

// sweatersSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

export default models.Sweaters || model("Sweaters", sweatersSchema);
//export default model("Sweaters", sweatersSchema);
