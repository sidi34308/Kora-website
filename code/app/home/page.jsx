// pages/home.jsx
"use client";
import React from 'react';
import Card from '../components/Card';

const games = [
  { id: 1, imageSrc: '/images/game1.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: false },
  { id: 2, imageSrc: '/images/game2.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: false },
  { id: 3, imageSrc: '/images/game3.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: true },
  { id: 4, imageSrc: '/images/game4.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: true },
  { id: 5, imageSrc: '/images/game5.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: false },
  { id: 6, imageSrc: '/images/game6.jpg', title: 'Match 6', date: '2023-10-30', isRegistered: false },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-4 py-6 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      
      <section className="mb-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {games.slice(0, 2).map(game => (
            <Card 
              key={game.id} 
              imageSrc={game.imageSrc} 
              title={game.title} 
              date={game.date} 
              buttonText="Register" 
              isRegistered={game.isRegistered}
            />
          ))}
        </div>
      </section>

      <section className="mb-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4">Registered Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {games.slice(2, 4).map(game => (
            <Card 
              key={game.id} 
              imageSrc={game.imageSrc} 
              title={game.title} 
              date={game.date} 
              buttonText="Registered" 
              isRegistered={game.isRegistered}
            />
          ))}
        </div>
      </section>

      <section className="mb-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {games.slice(4, 6).map(game => (
            <Card 
              key={game.id} 
              imageSrc={game.imageSrc} 
              title={game.title} 
              date={game.date} 
              buttonText="Register" 
              isRegistered={game.isRegistered}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
