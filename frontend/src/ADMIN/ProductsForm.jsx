import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    sizes: '',
    stock: '',
    image1: '',
    image2: '',
    image3: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...product,
      sizes: product.sizes.split(',').map((s) => s.trim()),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/products', payload);
      alert("Product Created Successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <input name="name" onChange={handleChange} placeholder="Product Name" className="w-full border p-2" />
      <input name="description" onChange={handleChange} placeholder="Description" className="w-full border p-2" />
      <input name="price" type="number" onChange={handleChange} placeholder="Price" className="w-full border p-2" />
      <input name="category" onChange={handleChange} placeholder="Category" className="w-full border p-2" />
      <input name="sizes" onChange={handleChange} placeholder="Sizes (comma separated)" className="w-full border p-2" />
      <input name="stock" type="number" onChange={handleChange} placeholder="Stock" className="w-full border p-2" />

      {/* Image 1 */}
      <input name="image1" onChange={handleChange} placeholder="Image 1 URL" className="w-full border p-2" />
      {product.image1 && (
        <img src={product.image1} alt="Preview 1" className="h-24 w-24 object-cover rounded border mx-auto" />
      )}

      {/* Image 2 */}
      <input name="image2" onChange={handleChange} placeholder="Image 2 URL" className="w-full border p-2" />
      {product.image2 && (
        <img src={product.image2} alt="Preview 2" className="h-24 w-24 object-cover rounded border mx-auto" />
      )}

      {/* Image 3 */}
      <input name="image3" onChange={handleChange} placeholder="Image 3 URL" className="w-full border p-2" />
      {product.image3 && (
        <img src={product.image3} alt="Preview 3" className="h-24 w-24 object-cover rounded border mx-auto" />
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
