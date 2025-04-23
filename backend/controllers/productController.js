import Product from "../models/Product.js";

export const createProduct = async (req , res)=>{
    try{
        const newProduct =new Product(req.body);
        const saved = await newProduct.save();
        res.status(201).json(saved);

    }
    catch(err){
        res.status(500).json(err);
    }
}

export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(); // assuming mongoose
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  export const deleteProduct = async (req, res) => {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);
  
      if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error });
    }
  };


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
};



export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }


    product.image1 = req.body.image1 || product.image1;
    product.image2 = req.body.image2 || product.image2;
    product.image3 = req.body.image3 || product.image3;

    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.image = req.body.image || product.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  
  
  
