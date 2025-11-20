import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FixedSidebar from "../../Components/FixedSidebar";
import { FaArrowLeft } from "react-icons/fa6";

export default function DetailsProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  const productData = location.state?.productData || {};

  const [description, setDescription] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const finalData = { ...productData, description };
    console.log("✅ Product saved:", finalData);

    navigate("/products");
  };

  return (
    <div className="flex">
      <FixedSidebar />

      <div className="flex-1 ml-[260px] bg-[#F7F8F7] h-screen p-14">
        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#405838] text-4xl font-bold mb-4"
          >
            <FaArrowLeft className="cursor-pointer" />
          </button>

          <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-8">
            Product Details
          </h2>

          <form
            onSubmit={handleSave}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div>
              <label className="block text-md font-medium text-gray-700 mb-2">
                Product description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type description.."
                rows={10}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293A23] resize-none"
              />
            </div>

            <div className="col-span-2 flex justify-end gap-3 mt-6">
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
    </div>
  );
}
