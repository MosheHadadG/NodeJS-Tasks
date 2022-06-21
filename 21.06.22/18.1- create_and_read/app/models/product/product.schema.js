import mongoose from "mongoose";
import { productDetailsSchema } from "./productDetails.schema.js";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  category: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean
  },

  details: productDetailsSchema
})

export { productSchema };