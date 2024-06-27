// components/Card.jsx
"use client"; // This directive marks this file as a client component

import React from 'react';

const Card = ({ imageSrc, title, date, buttonText, isRegistered }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px 0px 21.9px 0px rgba(0, 0.10, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)] p-4 flex flex-col items-center">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Date: {date}</p>
      </div>
      <button 
        className={`mt-4 px-4 py-2 rounded-2xl ${isRegistered ? 'bg-gray-200 text-gray-600' : 'bg-[#2DA4B5] hover:bg-[#258898] text-white'}`}
        disabled={isRegistered}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
