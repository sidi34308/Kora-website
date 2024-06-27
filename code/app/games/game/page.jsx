"use client";
import Image from "next/image";

const GameDetails = () => {
  const game = {
    id: 1,
    imageSrc: "/images/game1.jpg",
    title: "Sunday League Match",
    dateTime: "2023-06-25T10:00:00",
    fieldLocation: "Greenfield Park, Field 3",
    fees: "35",
    participants: [
      { name: "Participant 1", image: "/images/participant1.jpg" },
      { name: "Participant 2", image: "/images/participant2.jpg" },
      { name: "Participant 3", image: "/images/participant3.jpg" },
      { name: "Participant 4", image: "/images/participant4.jpg" },
    ],
    isRegistered: false,
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative h-64">
          <Image src={game.imageSrc} alt="Game Image" layout="fill" objectFit="cover" />
          <div className="absolute bottom-0 left-0 p-4 bg-opacity-75 bg-gray-800 w-full text-white">
            <h2 className="text-2xl font-bold">{game.title}</h2>
            <p>Join us for a friendly game!</p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">Match Details</h3>
            <ul className="space-y-2">
              <li><strong>Date & Time:</strong> {new Date(game.dateTime).toLocaleString()}</li>
              <li><strong>Location:</strong> {game.fieldLocation}</li>
              <li><strong>Fees:</strong> {game.fees} QR per person</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Participants</h3>
            <div className="flex space-x-4">
              {game.participants.map((participant, index) => (
                <div key={index} className="w-16 h-16 rounded-full overflow-hidden border-2">
                  {/* <Image src={participant.image} alt={participant.name} width={64} height={64} /> */}
                  <p className="text-center text-xs mt-2">{participant.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 bg-[#49919C] text-white py-2 rounded">Register</button>
            <button className="flex-1 bg-[#EEEFF2] text-gray-400 py-2 rounded">Unregister</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
