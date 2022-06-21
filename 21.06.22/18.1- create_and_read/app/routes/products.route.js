import express from "express";
import {
  createNewProduct,
  getAllProducts,
  getSpecificProduct, getActiveProducts, getProductsByPriceRange
} from "../controllers/products.controller.js";

export const productsRoute = express.Router();


productsRoute.post('/', createNewProduct);

productsRoute.get('/', getAllProducts);

productsRoute.get('/specific-product/:id', getSpecificProduct);

productsRoute.get('/active', getActiveProducts);

productsRoute.get('/price-range', getProductsByPriceRange);

