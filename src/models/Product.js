import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  imgSrc: {
    type: String, 
    required: true
  },
  title: {
    type: String, 
    required: true
  },
  price: {
    type: String, 
    required: true
  },
  category: {
    type: String, 
    required: true
  },
  descrition: {
    type: String, 
    required: true
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;