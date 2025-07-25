'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleAISearch = async () => {
    // TODO: Replace with your actual AI server endpoint
    await fetch('https://your-ai-server-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: searchValue }),
    });
    // Optionally handle response or show a toast
  };

  return (
    <>
      <header className="bg-[#0071dc] w-full shadow sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4 gap-x-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/spark-icon.svg" alt="Walmart Logo" width={40} height={40} />
          </Link>
          {/* Location Selector */}
          <button className="hidden md:flex items-center bg-[#032684] rounded-full px-4 h-12 min-w-[260px] max-w-xs text-left shadow gap-2">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 bg-white rounded-full -ml-2 mr-1">
              <img src="/mobile-in-hand.svg" alt="Mobile in hand" className="w-9 h-9 object-contain" />
            </span>
            <span className="flex flex-col flex-1 justify-center max-w-[140px]">
              <span className="font-bold text-sm leading-tight text-white">Pickup or delivery?</span>
              <span className="text-xs text-gray-200 truncate block ">Sacramento, 95829 · Sacramento Supercenter</span>
            </span>
            <svg width="20" height="20" fill="currentColor" className="ml-2 text-gray-200" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.085l3.71-3.855a.75.75 0 1 1 1.08 1.04l-4.24 4.4a.75.75 0 0 1-1.08 0l-4.24-4.4a.75.75 0 0 1 .02-1.06z" clipRule="evenodd"/></svg>
          </button>
          {/* Search Bar */}
          <form className="flex-1 flex items-center bg-white rounded-full shadow px-6 h-12 mx-2 max-w-7xl min-w-[400px]">
            <input
              type="text"
              placeholder="Search everything at Walmart online and in store"
              className="flex-1 bg-transparent outline-none text-[#0071dc] placeholder-[#0071dc] text-base px-2"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            {/* Normal search button */}
            <button type="submit" className="flex items-center justify-center w-10 h-10 bg-[#032684] rounded-full ml-2 hover:bg-blue-700 transition">
              <img src="/search.svg" alt="Search" className="w-5 h-5" />
            </button>
            {/* AI Search button */}
            <button
              type="button"
              className="flex items-center justify-center px-4 h-10 bg-yellow-400 rounded-full ml-3 text-[#032684] font-bold hover:bg-yellow-300 transition gap-2"
              onClick={handleAISearch}
              aria-label="AI Search"
            >
              <img src="/ai-icon.svg" alt="AI" className="w-5 h-5" />
              <span>AI Search</span>
            </button>
          </form>
          {/* Right Section */}
          <div className="flex items-center gap-8 min-w-fit h-12">
            {/* Reorder/My Items */}
            <Link href="#" className="flex items-center gap-2 group">
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400 group-hover:text-blue-200" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-100">Reorder</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-200">My Items</span>
              </div>
            </Link>
            {/* Sign In/Account */}
            <Link href="#" className="flex items-center gap-2 group">
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400 group-hover:text-blue-200" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-100">Sign In</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-200">Account</span>
              </div>
            </Link>
            {/* Cart */}
            <Link href="#" className="flex items-center gap-2 relative group">
              <div className="relative">
                <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-blue-400 group-hover:text-blue-200" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold text-[#0071dc] rounded-full px-1.5">0</span>
              </div>
              <span className="text-sm font-bold text-white ml-1">$0.00</span>
            </Link>
          </div>
        </div>
      </header>
      {/* Category Bar */}
      <nav className="w-full bg-[#F0F4FE] border-t border-blue-100 sticky top-[80px] z-40">
        <ul className="flex items-center gap-9 px-8 py-3 text-xs font-medium text-[#0F367A] whitespace-nowrap overflow-x-auto">
          <li className="flex items-center gap-1 cursor-pointer font-bold hover:underline">
            {/* Grid icon */}
            <svg className="w-5 h-5" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Departments
            {/* Chevron icon */}
            <svg className="w-4 h-4" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </li>
          <li className="flex items-center gap-1 cursor-pointer font-bold hover:underline">
            {/* Grid icon */}
            <svg className="w-5 h-5" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Services
            {/* Chevron icon */}
            <svg className="w-4 h-4" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </li>
          <li>|</li>
          <li className="cursor-pointer hover:underline">Get it Fast</li>
          <li className="cursor-pointer hover:underline">My Items</li>
          <li className="cursor-pointer hover:underline">Pharmacy Delivery</li>
          <li className="cursor-pointer hover:underline">Dinner Solutions</li>
          <li className="cursor-pointer hover:underline">4th of July</li>
          <li className="cursor-pointer hover:underline">Trending</li>
          <li className="cursor-pointer hover:underline">Swim Shop</li>
          <li className="cursor-pointer hover:underline">New Arrivals</li>
          <li className="cursor-pointer hover:underline">Auto Service</li>
          <li className="cursor-pointer hover:underline">Only at Walmart</li>
          <li className="cursor-pointer hover:underline">Registry</li>
          <li className="cursor-pointer hover:underline">Walmart+</li>
        </ul>
      </nav>
    </>
  );
} 