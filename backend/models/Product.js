import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  sizes: [String],
  stock: Number,
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },

}, { timestamps: true });

export default mongoose.model('Product', productSchema);
