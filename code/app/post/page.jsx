"use client"

import { useState, useEffect } from 'react';
import locations from '../resources/locations'; // Adjust the path based on your file structure

const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];

export default function PostGame() {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [numberOfTeams, setNumberOfTeams] = useState('');
  const [skillLevel, setSkillLevel] = useState(skillLevels[0]);
  const [maxPlayers, setMaxPlayers] = useState('');
  const [feesPerPerson, setFeesPerPerson] = useState('');
  const [locationId, setLocationId] = useState(locations[0]?.id || '');
  const [locationImage, setLocationImage] = useState(locations[0]?.image || '');
  const [showPopup, setShowPopup] = useState(false);

  const handleLocationChange = (e) => {
    const selectedLocation = locations.find(loc => loc.id === parseInt(e.target.value));
    setLocationId(selectedLocation.id);
    setLocationImage(selectedLocation.image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gameData = {
      title,
      duration: parseInt(duration),
      dateTime: new Date(dateTime),
      numberOfTeams: parseInt(numberOfTeams),
      skillLevel,
      maxPlayers: parseInt(maxPlayers),
      feesPerPerson: parseInt(feesPerPerson),
      locationId: parseInt(locationId), // Convert locationId to integer
      fieldLocation: locations.find(loc => loc.id === parseInt(locationId))?.name,
      organizerId:'64928f32a9b40a55a3b1c859', // Replace with the actual organizer's ID
    };
    const response = await fetch('/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });
  
      if (response.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      } else {
        alert('Failed to post game');
      }
    };
  
  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-2xl mb-32">
      
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          Game posted successfully!
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">Post a New Game ⚽</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (in minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date and Time</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Teams</label>
          <input
            type="number"
            value={numberOfTeams}
            onChange={(e) => setNumberOfTeams(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill Level</label>
          <select
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          >
            {skillLevels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Players</label>
          <input
            type="number"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fees per Person</label>
          <input
            type="number"
            value={feesPerPerson}
            onChange={(e) => setFeesPerPerson(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={locationId}
            onChange={handleLocationChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        {locationImage && (
          <div>
            <img src={locationImage} alt="Selected location" className="mt-4 w-full h-64 object-cover rounded-xl shadow-md" />
          </div>
        )}
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-[#49919C] hover:bg-[#397780] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-[#49919C]"
        >
          Post Game
        </button>
      </form>
    </div>
  );
}
