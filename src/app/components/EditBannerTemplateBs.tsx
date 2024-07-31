import React, { useState, useEffect } from "react";

interface EditBannerProps {
  banner: any;
  onSave: (banner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [editBanner, setEditBanner] = useState(banner);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditBanner({ ...editBanner, [name]: value });
  };

  const handleSave = () => {
    onSave(editBanner);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Match this with the transition duration
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg p-6 border-t-2 border-gray-200 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto">
        <h3 className="text-lg font-semibold mb-4">Edit Banner</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            name="title"
            value={editBanner.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={editBanner.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CTA</label>
          <input
            name="cta"
            value={editBanner.cta}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            name="image"
            value={editBanner.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Background Class</label>
          <input
            name="background"
            value={editBanner.background}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-2"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
