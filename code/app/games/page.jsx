// pages/home.jsx
"use client";
import Error500 from '../components/Error500';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import locations from '../resources/locations';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
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
    return <div><Error500/></div>;
  }

  return (
    <div className="flex flex-col items-center mx-auto px-10 py-6 mb-60">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard 🔥⚽</h1>
      
      <section className="mb-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4">{`Upcoming Games  (${games.length})`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {games.map(game => (
            <Card 
              data={game}
              key={game.id}
            />
          ))}

        </div>
      </section>
{/* 
      <section className="mb-6 w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4">Registered Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
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
      </section> */}
    </div>
  );
};

export default Home;
