"use client";
import React, { useState } from "react";
import BannerImageComp from "./components/BannerImageComp";
import EditBannerTemplateBs from "./components/EditBannerTemplateBs";
import adBanners from "../data.json";

const Home = () => {
  const [banners, setBanners] = useState(adBanners);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(null);

  const handleEdit = (banner: any) => {
    setCurrentBanner(banner);
    setIsEditing(true);
  };

  const handleSave = (updatedBanner: any) => {
    const updatedBanners = banners.map((b) =>
      b.id === updatedBanner.id ? updatedBanner : b
    );
    setBanners(updatedBanners);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-x-4 gap-y-6">
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            {...banner}
            onEdit={() => handleEdit(banner)}
          />
        ))}
      </div>

      {isEditing && (
        <EditBannerTemplateBs
          banner={currentBanner}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default Home;
