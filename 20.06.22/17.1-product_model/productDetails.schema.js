import mongoose from "mongoose";
import validator from "validator";

export const detailsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 10
  },

  price: {
    type: Number,
    required: true,
    validate(value) {
      if(value < 0) {
        throw new Error('Price Should be positive number!')
      }
    }
  },

  discount: {
    type: Number,
    default: 0
  },

  images: {
    type: [String],
    minItems: 2
  },

  phone: {
    required: true,
    type: String,
    validate(value) {
      if(!validator.isMobilePhone(value, "he-IL")) {
        throw new Error('Invalid Israeli phone number')
      }
    }
    
  },

  dateAdded: {
    type: Date,
    default: () => Date.now(),
  }

})