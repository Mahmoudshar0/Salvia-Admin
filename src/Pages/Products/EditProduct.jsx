import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import FixedSidebar from "../../Components/FixedSidebar";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: id,
    productName: "",
    description: "",
    category: "",
    productImage: null,
    details: "",
  });

  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const categories = ["Seeds", "Dried Flowers", "Dried Leaves"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    if (file) {
      setFormData((prev) => ({
        ...prev,
        productImage: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.productName || !formData.description || !formData.category) {
      alert("Please fill in all fields before saving.");
      return;
    }

    console.log("Updated Product ID:", id);
    console.log("Updated Data:", formData);

    alert("Product updated successfully ✅");

    navigate(`/products/details/${id}`, {
      state: { productData: formData },
    });
  };

  return (
    <div className="flex">
      <FixedSidebar />

      <div className="flex-1 ml-[260px] bg-gray-100 min-h-screen p-14">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edit Product
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name..."
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293A23]"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter product description..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293A23] resize-none"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293A23]"
              >
                <option value="">Select a category...</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 mb-2">
              Product Image
            </label>

            <div
              className={`border-2 border-dashed rounded-lg text-center transition-colors h-64 flex flex-col items-center justify-center bg-white cursor-pointer relative overflow-hidden ${
                dragActive
                  ? "border-[#293A23] bg-[#F9FFF6]"
                  : "border-gray-400 hover:border-gray-500"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files[0])}
                className="hidden"
                id="product-image"
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              ) : (
                <label
                  htmlFor="product-image"
                  className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
                >
                  <FiUploadCloud className="text-gray-400 text-5xl mb-2" />
                  <p className="text-sm text-blue-500">
                    Upload a file{" "}
                    <span className="text-gray-600">or drag and drop</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF up to 2MB
                  </p>
                </label>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-md font-medium text-gray-700 mb-2">
              Details
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Enter product details..."
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293A23] resize-none"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 pt-6">
            <button
              type="submit"
              className="px-6 bg-[#4E6347] text-white rounded-lg hover:bg-[#3a5230] transition-colors cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-black px-8 py-3 font-medium cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
