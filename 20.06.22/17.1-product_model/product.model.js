import mongoose from "mongoose";
import { productSchema } from './product.schema.js'

mongoose.connect('mongodb://127.0.0.1:27017/store', {
  useNewUrlParser: true
});

const Product = mongoose.model('products', productSchema)

const product = new Product({
  name: 'HP DeskJet Plus 4155 Wireless All-in-One Printer',
  category: 'Printer',
  isActive: true,
  details: {
    description: `Simple multitasking for home: Print, scan, and copy versatility,
                  an intuitive control panel, and mobile fax with a printer made with 20% recycled plastic`,
    price: 94.99,
    images: ["https://m.media-amazon.com/images/I/814uMChO3ML._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/71bsojfCWKL._AC_SX425_.jpg"],
    phone: "0503425922",
  }
});

product.save()
.then(result => console.log(result))
.catch(error => console.log(error));
