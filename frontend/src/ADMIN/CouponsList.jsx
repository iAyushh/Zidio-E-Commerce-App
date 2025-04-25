import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CouponsList = () => {
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: 0,
    discountType: "flat",
    expiresAt: "",
    usageLimit: 1,
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/coupons");
      setCoupons(res.data);
    } catch (err) {
      console.error("Failed to fetch coupons:", err);
      toast.error("Failed to fetch coupons");
    }
  };

  const handleCreate = async () => {
    try {
      const payload = {
        code: newCoupon.code,
        discountType: newCoupon.discountType,
        discountValue: Number(newCoupon.discount),
        maxUses: Number(newCoupon.usageLimit),
        expiresAt: new Date(newCoupon.expiresAt),
      };

      await axios.post("http://localhost:5000/api/coupons", payload);
      setNewCoupon({
        code: "",
        discount: 0,
        discountType: "flat",
        expiresAt: "",
        usageLimit: 1,
      });
      toast.success("Coupon created successfully!");
      fetchCoupons();
    } catch (err) {
      console.error("Failed to create coupon:", err);
      toast.error("Error creating coupon");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this coupon?")) {
      try {
        await axios.delete(`http://localhost:5000/api/coupons/${id}`);
        toast.success("Coupon deleted!");
        fetchCoupons();
      } catch (err) {
        console.error("Failed to delete coupon:", err);
        toast.error("Error deleting coupon");
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Coupons</h2>

      {/* Create Form */}
      <div className="border p-4 rounded bg-white mb-6 shadow">
        <h3 className="font-semibold mb-2">Create New Coupon</h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          <input
            type="text"
            placeholder="Code"
            value={newCoupon.code}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, code: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />
          <select
            value={newCoupon.discountType}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, discountType: e.target.value })
            }
            className="border px-3 py-2 rounded"
          >
            <option value="flat">Flat</option>
            <option value="percentage">Percentage</option>
          </select>
          <input
            type="number"
            placeholder="Discount"
            value={newCoupon.discount}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, discount: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Usage Limit"
            value={newCoupon.usageLimit}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, usageLimit: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />
          <input
            type="date"
            value={newCoupon.expiresAt}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, expiresAt: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />
        </div>
        <button
          onClick={handleCreate}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create
        </button>
        
      </div>

      {/* Coupon List */}
      <div className="w-full overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 text-gray-700 font-semibold hidden md:table-header-group">
            <tr>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Discount Type</th>
              <th className="p-3 text-left">Discount Value</th>
              <th className="p-3 text-left">Usage Limit</th>
              <th className="p-3 text-left">Used Count</th>
              <th className="p-3 text-left">Expires At</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr
                key={coupon._id}
                className="md:table-row block border-b md:border-0 md:mb-0 mb-4 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-lg shadow-sm"
              >
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Code: </span>
                  {coupon.code}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Discount Type: </span>
                  {coupon.discountType}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Discount Value: </span>
                  {coupon.discountValue}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Usage Limit: </span>
                  {coupon.maxUses}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Used Count: </span>
                  {coupon.usedCount}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Expires At: </span>
                  {coupon.expiresAt
                    ? new Date(coupon.expiresAt).toLocaleDateString()
                    : "No expiry"}
                </td>
                <td className="p-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Actions: </span>
                  <button
                    onClick={() => handleDelete(coupon._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs mt-2 md:mt-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {coupons.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No coupons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default CouponsList;
