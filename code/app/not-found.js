// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <img src="/404.svg" className="w-80 p-4"/>
      <Link href="/">
        <div className="px-4 py-2 bg-[#49919C] text-white rounded-xl  hover:bg-[#397780]">
          Go back home
        </div>
      </Link>
    </div>
  );
}
