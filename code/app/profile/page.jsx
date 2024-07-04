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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28854.220938851897!2d51.3636754!3d25.3116746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d9e694f34f2b%3A0x15e621eaee83ae49!2sBookboll.com%20-%20Al%20Rayyan%20Branch%20(badminton%20%26%20football%20courts)!5e0!3m2!1sar!2sqa!4v1720104475855!5m2!1sar!2sqa" width="100%" height="100%" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Profile;
