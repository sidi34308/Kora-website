"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from 'axios';
import locations from '../../resources/locations';

const GameDetails = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`/api/games/${id}`);
        console.log(response.data);
        setGame(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div className="flex justify-center p-10"><img src="/loader.svg" alt=""  className="w-32"/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const location = locations.find(loc => loc.id == parseInt(game.locationId));

  return (
    <div className="max-w-2xl  mx-auto p-4 mb-20">
      <div className="  ">
        <div className="relative h-60">
          <Image className="rounded-2xl" src={location.image} alt="Game Image" layout="fill" objectFit="cover" />
          <div className="rounded-2xl absolute bottom-0 left-0 p-4 black-gradient  w-full text-white">
            <h2 className="text-2xl font-bold">{game.title}</h2>
            <p>Join us for a friendly game!</p>
            <div className="flex justify-between items-center ">
              <button className="bg-[#49919C] py-2 px-4 mt-2 rounded-2xl hover:bg-[#3e7f89]">Register</button>
              <div className="flex justify-center text-black font-black text-2xl gap-1 items-center relative">
                <div className="bg-white py-2 px-3 rounded-xl">{game.maxPlayers}</div>
                <div className="text-[#49919C] text-2xl font-bold absolute bottom-[-2px]   z-10 ">vs</div>
                <div className="bg-white py-2 px-3 rounded-xl">{game.maxPlayers}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">Match Details 🔥</h3>
            <div className="flex justify-around sm:justify-start gap-4 py-8">
              <div className="bg-white min-w-[82px] min-h-[82px] flex flex-col justify-center items-center gap-1 rounded-3xl">
                <div className="">Duration</div>
                <div className="font-bold ">{game.duration}</div>
              </div>
              <div className="bg-white min-w-[82px] min-h-[82px] flex flex-col justify-center items-center gap-1 rounded-3xl">
                <div className="">Teams</div>
                <div className="font-bold ">{game.maxPlayers}</div>
              </div>
              <div className="bg-white min-w-[82px] min-h-[82px] flex flex-col justify-center items-center gap-1 rounded-3xl">
                <div className="">Fees</div>
                <div className="font-bold "> {game.feesPerPerson} QR </div>
              </div>
            </div>
            
            <ul className="space-y-2">
              <li className="flex gap-3"> 
                <div className="bg-gray-200 p-4 flex items-center justify-center rounded-xl">
                    <img src="/clock-2.svg"/>
                </div>
                <div  className="flex flex-col">
                  <strong>Date & Time</strong> {new Date(game.dateTime).toLocaleString()}
                </div>
              </li>
              <li className="flex gap-3 ">
                <div className="bg-gray-200 p-4 flex items-center justify-center rounded-xl">
                    <img src="/location.svg"/>
                </div>
                <div className="flex flex-col">
                  <strong>Location</strong> {game.fieldLocation}
                </div>
              </li>
          
            </ul>
          </div>
  
    
        </div>
        
      </div>
      <div className="flex flex-col gap-2 mb-2 font-medium ">
            <button className="flex-1 bg-[#49919C] text-white py-2 rounded-xl">Register</button>
            <button className="flex-1 bg-[#EEEFF2] text-gray-500 py-2 rounded-xl">Unregister</button>
          </div>
    </div>
  );
};

export default GameDetails;
