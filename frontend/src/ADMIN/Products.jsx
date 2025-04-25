import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Search and Filter Logic
  useEffect(() => {
    let updated = [...products];

    if (searchTerm) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      updated = updated.filter((p) => p.category === categoryFilter);
    }

    setFilteredProducts(updated);
    setCurrentPage(1); // reset to first page on search/filter
  }, [searchTerm, categoryFilter, products]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts((prev) => prev.filter((p) => p._id !== id));
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-right items-left mb-4 gap-2">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded px-3 py-2 w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border rounded px-3 py-2 w-full sm:w-48"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow bg-white"
          >
            <img
              src={product.image1 || ""}
              alt={product.name || "Product Image"}
              className="w-full h-48 object-cover rounded mb-2"
            />

            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <p className="text-gray-500 text-sm">Category: {product.category}</p>
            <p className="text-gray-500 text-sm">Sizes: {product.sizes.join(", ")}</p>
            <p className="text-gray-500 text-sm">Stock: {product.stock}</p>

            <div className="flex gap-2 mt-3">
              <Link
                to={`/admin/products/edit/${product._id}`}
                className="flex-1 text-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex-1 text-center px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
