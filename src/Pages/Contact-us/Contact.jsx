import React, { useState, useEffect } from "react";
import FixedSidebar from "../../Components/FixedSidebar";

export default function Contact() {
  const defaultData = {
    title: "Let's Work Together",
    description:
      "At Salvia, we’re always ready to connect with distributors, importers, and manufacturers worldwide. Reach out today and let’s grow together.",
    address: "Fayoum, Egypt",
    phone: "01211901946",
    email: "info@Salvianaturals.com",
  };

  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    const savedData = localStorage.getItem("contactPageData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("contactPageData", JSON.stringify(formData));
  };

  const handleCancel = () => {
    setFormData(defaultData);
    localStorage.removeItem("contactPageData");
  };

  return (
    <div className="flex">
      <FixedSidebar />


      <div className="flex-1 ml-[260px] bg-gray-100 h-screen p-14">

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Page title
            </h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              disabled
              className="w-[50%] px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Description
            </h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293A23] focus:border-transparent resize-vertical"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Address
              </h2>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293A23] focus:border-transparent"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Phone
              </h2>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293A23] focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Email</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293A23] focus:border-transparent resize-vertical"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleSave}
              className="bg-[#4E6347] hover:bg-[#293A23] text-white py-2 px-6 rounded-md cursor-pointer"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="text-black py-2 px-6 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>

      </div>
    </div>
  );
}
