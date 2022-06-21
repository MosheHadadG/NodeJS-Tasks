import express from "express";
import { productsRoute } from "./routes/products.route.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', productsRoute)


export { app };