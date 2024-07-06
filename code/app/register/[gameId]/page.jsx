"use client";
import { PhoneInput } from 'react-international-phone';
import { usePhoneValidation } from'react-international-phone';
import { useState } from 'react';
import { useParams } from "next/navigation";
import axios from 'axios';
import "react-international-phone/style.css";

const Register = () => {
    
    const { gameId } = useParams(); // Get the game ID from the URL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', { gameId, name, email, phone });
    //   router.push('/success');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register for Game</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-[#49919C] focus:border-[#49919C] sm:text-sm"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-600">*</span></label>
    
          <PhoneInput
                className="mt-2 focus:outline-none focus:ring-[#49919C] focus"
                defaultCountry="qa"
                value={phone}
                required
                onChange={(phone) => setPhone(phone)}
            />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-[#49919C] hover:bg-[#3a7a82] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49919C]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
