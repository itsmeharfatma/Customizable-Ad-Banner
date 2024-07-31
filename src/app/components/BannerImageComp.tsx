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
      className={`relative w-80 h-96 rounded-md shadow border border-gray-300`}
    >
      <Image src={background} width={300} height={10} alt={title} className="w-full h-96 object-cover rounded-md" />
      <div className="absolute top-0 left-0">
        <Image src={image} width={50} height={200} alt={title} />
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
    </div>
  );
};

export default BannerImageComp;
