import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    countInStock: "",
    image1: "",
    image2: "",
    image3: "",
  });
  

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      alert("Product updated successfully!");
      navigate("/admin/productsGrid");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while updating the product.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 h-35 border rounded resize-none focus:outline-none focus:ring focus:border-blue-400" />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        <input type="number" name="countInStock" value={product.countInStock} onChange={handleChange} placeholder="Stock" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        {/* <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" /> */}
        
        {/* <input type="text" name="image1" value={product.image1} onChange={handleChange} placeholder="Image 1 URL" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        <input type="text" name="image2" value={product.image2} onChange={handleChange} placeholder="Image 2 URL" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" />
        <input type="text" name="image3" value={product.image3} onChange={handleChange} placeholder="Image 3 URL" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" /> */}
        

          {/* Image 1 */}
  <input
    type="text"
    name="image1"
    value={product.image1}
    onChange={handleChange}
    placeholder="Image 1 URL"
    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
  />
  {product.image1 && (
    <div className="flex justify-center">
    <img
      src={product.image1}
      alt="Preview 1"
      className="w-32 h-32 object-cover rounded shadow border"
    />
    </div>
  )}

  {/* Image 2 */}
  <input
    type="text"
    name="image2"
    value={product.image2}
    onChange={handleChange}
    placeholder="Image 2 URL"
    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
  />
  {product.image2 && (
    
    <div className="flex justify-center">
    <img
      src={product.image2}
      alt="Preview 2"
      className="w-32 h-32 object-cover rounded shadow border"
    />
    </div>
  )}

  {/* Image 3 */}
  <input
    type="text"
    name="image3"
    value={product.image3}
    onChange={handleChange}
    placeholder="Image 3 URL"
    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
  />
  {product.image3 && (
    
    <div className="flex justify-center">
    <img
      src={product.image3}
      alt="Preview 3"
      className="w-32 h-32 object-cover rounded shadow border "
    />
    </div>
  )}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
