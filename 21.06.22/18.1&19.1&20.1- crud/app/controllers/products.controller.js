import { Product } from "../models/product/product.model.js";

export const createNewProduct = async (req, res) => {
  const productBody = req.body;

  try{
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
  const reqID = req.params.id;

  try {
    const product = await Product.findById(reqID);
    if(!product) return res.status(404).send({msg: "No product found"});
    res.send(product);

  } catch (err) {
    res.send(err);
  }
}

export const getActiveProducts = async (req, res) => {
  try {
    const activeProducts = await Product.find({ isActive: true });
    if(!activeProducts) return res.status(404).send({msg: "No product found"});
    res.send(activeProducts);

  } catch (err){
    res.send(err);
  };
}

export const getProductsByPriceRange = async (req, res) => {
  const { min, max } = req.query
  if (!min || !max) return res.send({msg: "Enter min and max in Query Params"});

  try { 
    const productsByPriceRange = await Product.find({ $and: [{ "details.price": { $gte: min }}, {"details.price": { $lte: max}}]});
    if(productsByPriceRange.length === 0) return res.status(404).send({msg: "No product found"});
    res.send(productsByPriceRange);

  } catch (err) {
    res.send(err);
  }
};

export const updateProductActive = async (req, res) => {
  const reqID = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['isActive'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if(!isValidOperation) return res.status(400).send({msg: "Invalid update!"})

  try {
    const updatedProductActive = await Product.findByIdAndUpdate(reqID,  req.body, { new: true });
    if(!updatedProductActive) return res.status(404).send({msg: "No product found"});
    res.send(updatedProductActive);

  } catch (err) {
    res.send(err);
  }
}

export const deleteSpecificProduct = async (req, res) => {
  const reqID = req.params.id;

  try {
    const productDeleted = await Product.findByIdAndDelete(reqID);
    if(!productDeleted) return res.status(404).send({msg: "No product found"});
    res.send(productDeleted);

  } catch (err) {
    res.send(err)
  }
}

export const deleteAllProducts = async (req, res) => {
  try {
    const productsDeleted = await Product.deleteMany({});
    if(!productsDeleted) return res.status(404).send({msg: "No product found"});
    res.send(productsDeleted);

  } catch (err) {
    res.send(err);
  }

}