import React from "react";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  return (
    <div
      className={`w-80 h-fit rounded-md shadow border border-gray-300`} style={{ background }}
    >
      <Image
        src={image}
        width={300}
        height={200}
        alt={title}
        className="w-full h-auto rounded-t-md"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        {/* <button className="mt-2 p-2 bg-blue-500 text-white rounded">{cta}</button> */}
        <button
          onClick={onEdit}
          className="mt-2 py-1 px-4 bg-gray-500 text-white rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
