// components/NavBar.js
import Link from 'next/link';

const FootBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-center gap-5 sm:gap-14 py-4 font-semibold text-[#6E6E6E]">
        <a className="hover p-2 hover:bg-gray-200 rounded-xl " href="/home">
          <div className="gap-1 flex flex-col items-center  hover:text-black ">
            <img src='home.svg' className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </div>
        </a>
        <a className="hover p-2 hover:bg-gray-200 rounded-xl " href="/games">
          <div className="gap-1 flex flex-col items-center  hover:text-black ">
            <img src='football.svg' className="h-6 w-6" />
            <span className="text-xs">Games</span>
          </div>
        </a>
        <a className="hover p-2 hover:bg-gray-200 rounded-xl "  href="/profile">
          <div className="gap-1 flex flex-col items-center  hover:text-black ">
            <img src='profile_icon.svg'  className="h-6 w-6 svg-icon" />
            <span className="text-xs">Profile</span>
          </div>
        </a>
        <a className="hover p-2 hover:bg-gray-200 rounded-xl " href="/settings">
          <div className="gap-1 flex flex-col items-center  hover:text-black  ">
            <img src='settings.svg' className="h-6 w-6" />
            <span className="text-xs">Settings</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FootBar;
