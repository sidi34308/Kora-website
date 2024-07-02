"use client"; // This directive marks this file as a client component
import locations from '../resources/locations';
import React from 'react';


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


const Card = ({ data }) => {
  // Find the matching location based on locationId
  const location = locations.find(loc => loc.id == parseInt(data.locationId));

  return (
    <div className="bg-white  p-4 flex flex-col  card">
     
      {location && (
        <img src={location.image} alt={location.name} className="w-full h-40 object-cover rounded-md" />
      )}
       <div className=" flex flex-col gap-1 py-3">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="flex gap-2 font-medium text-[#49919C]"><img src="/date.svg" className="w-5" alt="date icon" /> {formatDate(data.dateTime)}</p>
        <p className="flex gap-2 font-medium text-[#49919C]"><img src="/clock.svg" className="w-5" alt="clock" /> 10:00 AM </p>

        </div>
      <div className="flex justify-between font-medium w-full">
      <button
        className={`mt-4 px-4 py-2 rounded-2xl bg-[#49919C] hover:bg-[#258898] text-white`}
      >
        Register
      </button>
        <div className=" mt-4 px-4 py-2 bg-gray-500 flex items-center justify-between gap-2 rounded-2xl"><img src="/duration.svg" className="w-5"/> <div className="text-white ">{data.duration} hour</div></div>
      </div>
    </div>
  );
};

export default Card;
