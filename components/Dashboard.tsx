import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Users, Wallet, Fuel, Scale, Truck, Car, 
  CalendarCheck, AlertTriangle, Sparkles, Plus, Minus
} from 'lucide-react';
import { 
  StatCard, UserChargeWidget, VehicleStatusWidget, 
  ComplaintChart, BulkCollectionChart, POIWidget, CustomerChart 
} from './Widgets';

interface DashboardProps {
  onGenerateInsight: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onGenerateInsight }) => {
  // Stagger container for children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Actions */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Overview</h2>
        <motion.button 
          onClick={onGenerateInsight}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm font-semibold border border-purple-400/20"
        >
          <Sparkles size={16} className="animate-pulse" />
          AI Insights
        </motion.button>
      </motion.div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard 
          title="Customer" 
          value="178" 
          subLabel="KYC Done (Today)" 
          subValue="178" 
          icon={Users} 
          iconColor="text-orange-500" 
          iconBg="bg-orange-100" 
          delay={0.1}
        />
        <StatCard 
          title="User Charge" 
          value="₹83,150" 
          subLabel="Amount Collected (Today)" 
          subValue="₹83,150" 
          icon={Wallet} 
          iconColor="text-red-500" 
          iconBg="bg-red-100" 
          delay={0.2}
        />
        <StatCard 
          title="Fuel" 
          value="NA" 
          subLabel="Cost Per KM (Month)" 
          subValue="NA" 
          icon={Fuel} 
          iconColor="text-blue-500" 
          iconBg="bg-blue-100" 
          delay={0.3}
        />
        <StatCard 
          title="Weighment" 
          value="0" 
          subLabel="Net Waste (Tonne)" 
          subValue="0" 
          icon={Scale} 
          iconColor="text-pink-500" 
          iconBg="bg-pink-100" 
          delay={0.4}
        />
        <StatCard 
          title="Bulk Collection" 
          value="32" 
          subLabel="Total Scans (Today)" 
          subValue="32" 
          icon={Truck} 
          iconColor="text-purple-500" 
          iconBg="bg-purple-100" 
          delay={0.5}
        />
        <StatCard 
          title="Vehicles" 
          value="223" 
          subLabel="Total" 
          subValue="223" 
          icon={Car} 
          iconColor="text-green-500" 
          iconBg="bg-green-100" 
          delay={0.6}
        />
        <StatCard 
          title="Attendance" 
          value="95P/249T" 
          subLabel="Today" 
          subValue="95P/249T" 
          icon={CalendarCheck} 
          iconColor="text-gray-500" 
          iconBg="bg-gray-200" 
          delay={0.7}
        />
        <StatCard 
          title="Complaints" 
          value="0" 
          subLabel="Today" 
          subValue="0" 
          icon={AlertTriangle} 
          iconColor="text-indigo-500" 
          iconBg="bg-indigo-100" 
          delay={0.8}
        />
      </div>

      {/* Middle Section Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-1 h-full">
          <UserChargeWidget />
        </div>
        <div className="lg:col-span-1 h-full">
          <VehicleStatusWidget />
        </div>
        <div className="lg:col-span-1 h-full">
          <ComplaintChart />
        </div>
        <div className="lg:col-span-1 h-full">
          <BulkCollectionChart />
        </div>
        <div className="lg:col-span-1 h-full">
          <POIWidget />
        </div>
        <div className="lg:col-span-1 h-full">
          <CustomerChart />
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div 
        variants={itemVariants}
        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
      >
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
           <h3 className="font-bold text-gray-800 flex items-center gap-2">
             <span className="w-1 h-4 bg-green-500 rounded-full"></span>
             Live Ward Monitoring
           </h3>
           <div className="flex items-center gap-2 text-xs">
             <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
               <div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-green-500 right-0" defaultChecked/>
                    <span className="toggle-label block overflow-hidden h-4 rounded-full bg-green-500"></span>
                </div>
               <span className="font-medium text-gray-600">Switch Map</span>
             </label>
           </div>
         </div>
         <div className="relative w-full h-[350px] sm:h-[500px] bg-blue-50 rounded-xl overflow-hidden group border border-gray-200">
            {/* Simulated Map Background */}
            <img 
               src="https://static.vecteezy.com/system/resources/previews/000/148/262/original/city-map-vector.jpg" 
               alt="Map Placeholder" 
               className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Simulated Overlay Zones - SVG with Animation */}
            <div className="absolute inset-0 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                  {/* Zone A */}
                  <motion.path 
                    d="M 300 200 L 450 150 L 500 300 L 350 400 Z" 
                    fill="rgba(59, 130, 246, 0.3)" 
                    stroke="#3B82F6" 
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    whileHover={{ fill: "rgba(59, 130, 246, 0.6)", scale: 1.02 }}
                    className="pointer-events-auto cursor-pointer"
                  />
                  {/* Zone B */}
                  <motion.path 
                    d="M 450 150 L 600 180 L 650 350 L 500 300 Z" 
                    fill="rgba(16, 185, 129, 0.3)" 
                    stroke="#10B981" 
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    whileHover={{ fill: "rgba(16, 185, 129, 0.6)", scale: 1.02 }}
                    className="pointer-events-auto cursor-pointer"
                  />
                  {/* Zone C */}
                  <motion.path 
                    d="M 200 300 L 350 400 L 300 550 L 150 450 Z" 
                    fill="rgba(245, 158, 11, 0.3)" 
                    stroke="#F59E0B" 
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    whileHover={{ fill: "rgba(245, 158, 11, 0.6)", scale: 1.02 }}
                    className="pointer-events-auto cursor-pointer"
                  />
               </svg>
            </div>

            {/* Map Controls Overlay */}
            <div className="absolute top-4 left-4 flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <motion.button whileTap={{ scale: 0.9 }} className="p-2 hover:bg-gray-100 text-gray-600 border-b border-gray-200">
                <Plus size={16} />
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} className="p-2 hover:bg-gray-100 text-gray-600">
                <Minus size={16} />
              </motion.button>
            </div>
            
            {/* Floating GPS Indicator */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/2 left-1/2 text-red-600 drop-shadow-md"
            >
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </motion.div>

            {/* Google Watermark Simulation */}
            <div className="absolute bottom-1 left-2 bg-white/80 px-2 py-0.5 rounded text-[10px] text-gray-500 font-medium shadow-sm">Map data ©2025 Google</div>
         </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;