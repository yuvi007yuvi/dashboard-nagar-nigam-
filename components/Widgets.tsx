import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { 
    TruckIllustration, 
    WalletIllustration, 
    MapIllustration, 
    AlertIllustration,
    PeopleIllustration,
    BinIllustration 
} from './Illustrations';

// --- Stat Card ---
interface StatCardProps {
  title: string;
  value: string | number;
  subLabel: string;
  subValue: string | number;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subLabel, subValue, icon: Icon, iconColor, iconBg, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] cursor-default relative overflow-hidden group"
  >
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500"></div>

    <div className="flex justify-between items-start relative z-10">
      <div className={`p-2.5 rounded-lg ${iconBg} bg-opacity-80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className={iconColor} />
      </div>
      <div className="text-right">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800 tracking-tight">{value}</p>
      </div>
    </div>
    
    <div className="mt-4 relative z-10">
      <div className="flex justify-between items-end text-xs text-gray-500 mb-3">
        <span>{subLabel}</span>
        <span className="font-semibold text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">{subValue}</span>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <motion.a 
          href="#" 
          className="text-[10px] font-medium text-gray-400 hover:text-blue-600 flex items-center gap-1 group/link"
          whileHover={{ x: 2 }}
        >
          View More <ArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

// --- User Charge Collection Widget ---
export const UserChargeWidget: React.FC = () => {
  const data = [
    { label: 'Today', value: '₹83,150', color: 'bg-purple-400' },
    { label: "Yesterday's", value: '₹1,30,900', color: 'bg-pink-400' },
    { label: 'Till Month', value: '₹24,71,880', color: 'bg-green-400' },
    { label: 'Previous Month', value: '₹35,43,869', color: 'bg-teal-400' },
  ];

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-4 -translate-y-4">
          <WalletIllustration className="w-48 h-48" />
      </div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
          User Charge Collection
        </h3>
        <button className="text-xs text-purple-600 font-medium hover:bg-purple-50 px-2 py-1 rounded transition-colors">Details</button>
      </div>
      <div className="space-y-5 flex-1 flex flex-col justify-center relative z-10">
        {data.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx + 0.3 }}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color} ring-2 ring-white shadow-sm group-hover:scale-125 transition-transform`}></div>
              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
            </div>
            <span className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Vehicle Status Widget ---
export const VehicleStatusWidget: React.FC = () => {
  const stats = [
    { label: 'All', value: 223, color: 'bg-purple-100 text-purple-800' },
    { label: 'Over Speeding', value: 0, color: 'bg-red-100 text-red-800' },
    { label: 'Running', value: 7, color: 'bg-green-100 text-green-800' },
    { label: 'Standing', value: 11, color: 'bg-purple-100 text-purple-800' },
    { label: 'Stopped', value: 146, color: 'bg-blue-100 text-blue-800' },
    { label: 'Data Not Receiving', value: 59, color: 'bg-orange-100 text-orange-800' },
  ];

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
          Vehicles
        </h3>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">Live</span>
      </div>

      {/* Animated Truck Illustration at the bottom */}
      <div className="absolute -bottom-2 -right-6 opacity-20 pointer-events-none transform scale-x-[-1]">
         <TruckIllustration className="w-48 h-32" />
      </div>

      <div className="space-y-2 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx + 0.4 }}
            className={`flex justify-between items-center p-2.5 rounded-lg border border-transparent hover:border-gray-100 transition-all ${idx % 2 === 0 ? 'bg-white/80' : 'bg-gray-50/50'}`}
          >
            <span className="text-sm text-gray-600">{stat.label}</span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full min-w-[30px] text-center shadow-sm ${stat.color}`}>
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Complaint Donut Chart ---
export const ComplaintChart: React.FC = () => {
  const data = [
    { name: 'Open', value: 6, color: '#F59E0B' },
    { name: 'Resolved', value: 183, color: '#3B82F6' },
    { name: 'Out Of Scope', value: 1, color: '#10B981' },
  ];

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 opacity-10">
          <AlertIllustration className="w-40 h-40" />
      </div>

      <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2 relative z-10">
         <span className="w-1 h-4 bg-amber-500 rounded-full"></span>
         Complaints
      </h3>
      <div className="flex-1 min-h-[150px] flex items-center relative z-10">
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={65}
              paddingAngle={5}
              dataKey="value"
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
               itemStyle={{ fontSize: '12px' }}
            />
            <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                iconType="circle"
                iconSize={8}
                formatter={(value, entry: any) => (
                    <span className="text-xs text-gray-600 ml-1 font-medium">{entry.payload.value} {value}</span>
                )}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute left-[34%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
           <span className="text-xl font-bold text-gray-800 block leading-none">190</span>
           <span className="text-[10px] text-gray-400">Total</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Bulk Collection Chart ---
export const BulkCollectionChart: React.FC = () => {
    const data = [
      { name: 'Today', value: 32, color: '#d8b4fe' },
      { name: 'Yesterday', value: 40, color: '#a855f7' },
      { name: 'Till Month', value: 437, color: '#22c55e' },
      { name: 'Previous Month', value: 0, color: '#9ca3af' },
    ];
  
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <BinIllustration className="w-40 h-40" />
        </div>

        <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2 relative z-10">
            <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
            Bulk Collection
        </h3>
        <div className="flex-1 min-h-[150px] flex items-center relative z-10">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
                cornerRadius={4}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip 
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
               itemStyle={{ fontSize: '12px' }}
              />
              <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value, entry: any) => (
                      <span className="text-xs text-gray-600 ml-1 font-medium">{entry.payload.value} {value}</span>
                  )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
};

// --- POI Widget ---
export const POIWidget: React.FC = () => {
    return (
        <motion.div 
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden"
        >
             <div className="absolute top-10 -right-6 opacity-10 pointer-events-none">
                <MapIllustration className="w-40 h-40" />
             </div>

             <div className="flex justify-between items-center mb-4 relative z-10">
                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
                    POI Coverage
                </h3>
                <motion.div 
                    whileHover={{ rotate: 90 }}
                    className="p-2 bg-teal-50 rounded-full text-teal-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </motion.div>
             </div>
             <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end border-b border-dashed border-gray-200 pb-3">
                    <span className="text-gray-500 text-sm font-medium">Total POIs</span>
                    <span className="text-xl font-bold text-gray-800">53,233</span>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm font-medium">Visited Today</span>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs text-green-600 font-bold">Live</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-xl font-bold text-gray-800 block">18,248</span>
                        <span className="text-xs font-medium text-gray-400">Target: 52,508 (34.8%)</span>
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '34.8%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full"
                    ></motion.div>
                </div>
             </div>
             <div className="mt-auto pt-4 text-[10px] text-gray-400 hover:text-blue-600 flex items-center gap-1 cursor-pointer group relative z-10">
                 View Detailed Report <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
             </div>
        </motion.div>
    );
};

// --- Customer Chart ---
export const CustomerChart: React.FC = () => {
    const data = [
      { name: 'Residential', value: 46156, color: '#FDBA74' },
      { name: 'Commercial', value: 6990, color: '#60A5FA' },
      { name: 'Industrial', value: 22, color: '#A78BFA' },
      { name: 'Institutional', value: 65, color: '#F472B6' },
    ];
  
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-10 right-0 opacity-10 pointer-events-none">
            <PeopleIllustration className="w-32 h-32" />
        </div>

        <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2 relative z-10">
            <span className="w-1 h-4 bg-orange-400 rounded-full"></span>
            Customer Distribution
        </h3>
        <div className="flex-1 min-h-[150px] flex items-center relative z-10">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="40%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={2}
                dataKey="value"
                cornerRadius={4}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip 
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
               itemStyle={{ fontSize: '12px' }}
              />
              <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value, entry: any) => (
                      <span className="text-[10px] text-gray-600 ml-1 font-medium">{value}</span>
                  )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
  };
