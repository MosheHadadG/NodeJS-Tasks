import { Product } from "../models/product/product.model.js";

export const createNewProduct = async (req, res) => {
  try{
    const productBody = req.body;
    const newProduct = new Product(productBody);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
    
  } catch (err) {
    res.status(400).send(err);
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const users = await Product.find({});
    res.send(users);

  } catch (err) {
    res.send(err);
  }
}

export const getSpecificProduct = async (req, res) => {
  try {
    const reqID = req.params.id;
    const product = await Product.findById(reqID);
    if(!product) res.status(404).send();
    res.send(product);

  } catch (err) {
    res.send(err);
  }
}

export const getActiveProducts = async (req, res) => {
  try {
    const activeProducts = await Product.find({ isActive: true });
    if(!activeProducts) res.status(404).send();
    res.send(activeProducts);

  } catch (err){
    res.send(err);
  };
}

export const getProductsByPriceRange = async (req, res) => {
  try { 
    const { min, max } = req.query
    if (!min || !max) return res.send({msg: "Enter min and max in Query Params"});
    const productsByPriceRange = await Product.find({ $and: [{ "details.price": { $gte: min }}, {"details.price": { $lte: max}}]});
    if(!productsByPriceRange) res.status(404).send();
    res.send(productsByPriceRange);

  } catch (err) {
    res.send(err);
  }
};