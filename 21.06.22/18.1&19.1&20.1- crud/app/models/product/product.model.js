import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

const Product = mongoose.model('products', productSchema);

export { Product };
