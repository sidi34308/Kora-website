import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const featuredGames = [
    { id: 1, imageSrc: '/images/game1.jpg', title: 'Sunday League Match', date: '2024-06-25', location: 'Greenfield Park, Field 3', fee: 35 },
    { id: 2, imageSrc: '/images/game2.jpg', title: 'Wednesday Night Game', date: '2024-06-28', location: 'City Stadium, Field 2', fee: 40 },
  ];

  return (
    <div className="sm:flex h-screen  ">
      <header className="bg-[#49919C] text-white p-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Kora</h1>
        <p className="mt-2">Join our community and enjoy friendly football matches</p>
      </header>

      <main className="p-6">
 

        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="mb-4">Become a part of our vibrant football community. Register now and participate in our upcoming games.</p>
          <a href="/games">
            <button className="bg-[#49919C] text-white py-2 px-4 rounded">See All Games</button>
          </a>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">Have any questions or need more information? Feel free to reach out to us.</p>
          <a href="/contact">
            <button className="bg-[#e2e2e2] text-black py-2 px-4 rounded">Contact Us</button>
          </a>
        </section>
      </main>

    </div>
  );
};

export default Home;
