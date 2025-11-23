import React from 'react';
import { Menu, User, LogOut, ChevronRight, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20 transition-all duration-300">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onMenuToggle}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg text-gray-600 lg:hidden"
          >
            <Menu size={24} />
          </motion.button>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
            Nagar Nigam <span className="text-green-600 font-normal hidden xs:inline">Dashboard</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {/* Search Bar - Hidden on small mobile */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-transparent focus-within:border-green-500 focus-within:bg-white transition-all w-48 lg:w-64">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search data..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-600 placeholder-gray-400"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-1.5 text-gray-500 hover:text-gray-700"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </motion.button>

          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>

          <div className="flex items-center gap-3 pl-0 sm:pl-2 cursor-pointer group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-all">
              YT
            </div>
            <div className="hidden sm:block">
               <p className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors">Yuvraj Singh</p>
               <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ x: 3, color: '#dc2626' }}
            className="flex items-center gap-1 text-gray-400 hover:text-red-600 text-sm font-medium transition-colors ml-0 sm:ml-2"
          >
            <LogOut size={18} />
          </motion.button>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="px-4 sm:px-6 py-2 bg-gray-50/50 border-b border-gray-200 flex items-center text-xs text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="text-blue-600 cursor-pointer hover:underline">Home</span>
        <ChevronRight size={12} className="mx-1 shrink-0" />
        <span className="font-medium text-gray-700">Dashboard</span>
      </div>
    </header>
  );
};

export default Header;