import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import FixedSidebar from "../../Components/FixedSidebar";
import Delete from "../../Components/Delete";
import { useNavigate } from "react-router-dom";

function RAndD() {
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const [pageData, setPageData] = useState({
    pageTitle: "Research & Development",
    introTitle: "Intro tittle",
    introText:
      "At Salvia Naturals, innovation and continuous improvement are at the heart of our business.  Our Research & Development (R&D) activities are designed to ensure that we consistently  deliver safe, high-quality, and innovative herbal products to our global customers.",
    contentBlocks: [
      {
        id: 1,
        title: "Innovation in Agriculture",
        sectionTitle: "Innovation in Agriculture",
        description:
          "We adhere to stringent international food safety standards and regulations. Our products are tested and certified to ensure compliance with FDA, EU, and other global food safety requirements.",
      },
      {
        id: 2,
        title: "Product Development",
        sectionTitle: "Product Development",
        description:
          "Every batch undergoes rigorous testing for pesticide residues and heavy metal contamination to ensure products are safe for consumption.",
      },
      {
        id: 3,
        title: "Quality & Safety Research",
        sectionTitle: "Quality & Safety Research",
        description:
          "Comprehensive microbiological testing ensures our herbs are free from harmful bacteria, yeasts, and moulds that could compromise quality and safety.",
      },
      {
        id: 4,
        title: "Packaging & Shelf-Life Studies",
        sectionTitle: "Packaging & Shelf-Life Studies",
        description:
          "Optimal moisture levels are maintained through careful drying and storage processes to preserve quality and extend shelf life.",
      },
      {
        id: 5,
        title: "Pyrrolizidine Alkaloids (PAs) & PAHs",
        sectionTitle: "Pyrrolizidine Alkaloids (PAs) & PAHs",
        description:
          "Advanced testing protocols detect and eliminate potentially harmful alkaloids and polycyclic aromatic hydrocarbons.",
      },
      {
        id: 6,
        title: "Packaging & Integrity",
        sectionTitle: "Packaging & Integrity",
        description:
          "Protective, food-grade packaging preserves freshness and ensures products reach customers in optimal condition.",
      },
      {
        id: 7,
        title: "Commitment to Progress",
        sectionTitle: "Commitment to Progress",
        description:
          "We continually refine our processes and adopt the latest quality assurance technologies to exceed industry standards.",
      },
    ],
  });

  const handleEdit = (blockId) => {
    navigate(`/r-and-d-preview/${blockId}`);
  };

  const handleDeleteConfirm = () => {
    if (selectedBlock) {
      setPageData({
        ...pageData,
        contentBlocks: pageData.contentBlocks.filter(
          (block) => block.id !== selectedBlock.id
        ),
      });
      setDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setSelectedBlock(null);
  };

  return (
    <div className="flex">
      <FixedSidebar />

      <div className="flex-1 ml-[260px] bg-gray-100 min-h-screen p-14">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Page tittle
          </h2>
          <div className="w-[50%] px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-not-allowed">
            {pageData.pageTitle}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Intro tittle
          </h2>
          <textarea
            value={pageData.introText}
            onChange={(e) =>
              setPageData({ ...pageData, introText: e.target.value })
            }
            rows={4}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293A23] focus:border-transparent resize-vertical"
            placeholder="Enter intro text"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageData.contentBlocks.map((block) => (
            <div
              key={block.id}
              className={`bg-white border border-gray-300 rounded-lg p-4 flex justify-between items-start hover:shadow-md transition-shadow ${
                block.title === "Commitment to Progress" ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {block.title}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(block.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <FaEdit className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Delete
        isOpen={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default RAndD;
