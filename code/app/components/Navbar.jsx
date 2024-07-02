"use client";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    return (
        <div className="">
      
            <nav className="px-10 bg-white">
                <div className="">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center ">
                            {/* Mobile menu button*/}
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                <img src='/Frame (1).svg'/>

                                ) : (
                                 <img src='/menu.svg'/>
 
                                )}
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center gap-4 sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex gap-10">
                                {/* <img
                                    className="h-12 w-auto"
                                    src="/logo.svg"
                                    alt="Logo"
                                /> */}
                                {/* <AuthLinks /> */}
                            </div>
                            <div className="hidden sm:flex sm:ml-6 items-center">
                                <div className="flex gap-10 items-end">
                        
                                    {/* Add more links as needed */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      
                        {/* Add more links as needed */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;