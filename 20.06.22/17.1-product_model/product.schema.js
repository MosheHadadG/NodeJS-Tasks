import mongoose from "mongoose";
import { detailsSchema } from "./productDetails.schema.js";


export const productSchema = new mongoose.Schema({
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

  details: detailsSchema
})
