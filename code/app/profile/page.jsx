"use client"
import Image from 'next/image';

const Profile = () => {
  const user = {
    name: 'Sidi Chaikh',
    phoneNumber: '+974 39990732',
    profileImage: '/images/profile.jpg',
  };

  return (
    <div className="container mx-auto p-4">
        
      <div className="flex flex-col h-screen items-center bg-white shadow-sm rounded-lg p-6">
        <div className="relative w-32 h-32 mb-4">
          <img src={user.profileImage} alt="Profile Image" className="rounded-full object-cover w-full h-full" />
        </div>
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <div className="mt-4 w-full">
          <h3 className="text-xl font-semibold mb-2">My Details</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Phone number:</strong> {user.phoneNumber}</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Profile;
