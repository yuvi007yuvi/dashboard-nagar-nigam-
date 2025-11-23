import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Download, MoreHorizontal, MapPin, 
  CheckCircle, XCircle, Clock, AlertTriangle, User,
  Fuel, Settings, Save, Bell
} from 'lucide-react';

const PageHeader = ({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
    {action}
  </div>
);

const SearchAndFilter = () => (
    <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search records..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium shadow-sm">
            <Filter size={16} />
            Filters
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium shadow-sm ml-auto">
            <Download size={16} />
            Export
        </button>
    </div>
);

// --- Customers Page ---
export const CustomersPage = () => {
  const customers = [
    { id: 'C001', name: 'Rajesh Kumar', type: 'Residential', address: '12-B, Krishna Nagar', status: 'Active' },
    { id: 'C002', name: 'Hotel Brijwasi', type: 'Commercial', address: 'Near Railway Station', status: 'Active' },
    { id: 'C003', name: 'Govind Dham', type: 'Institutional', address: 'Raman Reti', status: 'Pending' },
    { id: 'C004', name: 'Amit Singh', type: 'Residential', address: 'Sec 4, Vrindavan', status: 'Inactive' },
    { id: 'C005', name: 'Mathura Refinery', type: 'Industrial', address: 'Agra Road', status: 'Active' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
        <PageHeader title="Customers Management" description="View and manage all registered property owners and waste generators." 
            action={<button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md hover:bg-green-700 transition-all">+ Add New Customer</button>}
        />
        <SearchAndFilter />
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer ID</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {customers.map((c, i) => (
                        <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="hover:bg-gray-50/80 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{c.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">{c.name.charAt(0)}</div>
                                {c.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {c.type}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">{c.address}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${c.status === 'Active' ? 'bg-green-100 text-green-800' : c.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${c.status === 'Active' ? 'bg-green-500' : c.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                                    {c.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
  );
};

// --- User Charge Page ---
export const UserChargePage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="User Charge Collection" description="Track daily collection records and payment history." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
                    <p className="text-purple-100 text-sm font-medium mb-1">Total Collected Today</p>
                    <h3 className="text-3xl font-bold">₹ 83,150</h3>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                     <p className="text-gray-500 text-sm font-medium mb-1">This Month</p>
                     <h3 className="text-3xl font-bold text-gray-800">₹ 24,71,880</h3>
                </div>
                 <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                     <p className="text-gray-500 text-sm font-medium mb-1">Pending Dues</p>
                     <h3 className="text-3xl font-bold text-red-500">₹ 1,42,000</h3>
                </div>
            </div>
            <SearchAndFilter />
            {/* Simple Transaction List */}
            <div className="space-y-3">
                {[1,2,3,4,5].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                <CheckCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Payment from C00{i}82</h4>
                                <p className="text-xs text-gray-500">Today, 10:{30 + i} AM • UPI Transaction</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">+ ₹500.00</p>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Success</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// --- Fuel Page ---
export const FuelPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="Fuel Management" description="Monitor fuel consumption and efficiency across the fleet." />
             <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3 mb-6">
                <Fuel className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                    <h4 className="font-bold text-orange-800">Fuel Alert</h4>
                    <p className="text-sm text-orange-700 mt-1">Vehicle UP-85-GT-1022 is showing abnormal fuel consumption (-15% efficiency) this week.</p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center min-h-[400px]">
                <img src="https://img.freepik.com/free-vector/gas-station-concept-illustration_114360-12879.jpg" alt="Fuel" className="w-64 opacity-80 mb-6" />
                <h3 className="text-xl font-bold text-gray-800">Fuel Analytics Module</h3>
                <p className="text-gray-500 mt-2 text-center max-w-md">Detailed fuel charts and refill logs will appear here. Currently syncing with smart fuel sensors.</p>
            </div>
        </motion.div>
    );
}

// --- Weighment Page ---
export const WeighmentPage = () => {
     return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="Weighbridge Data" description="Real-time dumping yard weighment records." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-4">Live Scale Feed</h3>
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                             <div className="text-green-500 font-mono text-4xl font-bold tracking-widest">00.00 MT</div>
                             <div className="text-gray-500 text-xs mt-2">SCALE ID: WB-01 • ONLINE</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-4">Recent Weigh-ins</h3>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500 italic text-center py-10">No vehicles currently on scale.</p>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}

// --- Bulk Collection Page ---
export const BulkCollectionPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
             <PageHeader title="Bulk Waste Generators" description="Collection status for hotels, hospitals, and large institutions." />
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                 {['Hotels', 'Hospitals', 'Malls', 'Colleges'].map((cat) => (
                     <div key={cat} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
                         <h4 className="font-bold text-gray-700">{cat}</h4>
                         <p className="text-xs text-gray-500 mt-1">12 Pending / 45 Total</p>
                         <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                             <div className="bg-purple-500 h-full w-[70%]"></div>
                         </div>
                     </div>
                 ))}
             </div>
             <SearchAndFilter />
        </motion.div>
    );
}

// --- Coverage Monitoring Page ---
export const CoverageMonitoringPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2 h-[calc(100vh-140px)] flex flex-col">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Live Coverage Map</h2>
                <div className="flex gap-2">
                     <button className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium shadow-sm hover:bg-gray-50">Ward 14</button>
                     <button className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium shadow-sm hover:bg-gray-50">All Vehicles</button>
                </div>
             </div>
             <div className="flex-1 bg-gray-200 rounded-xl border border-gray-300 relative overflow-hidden group">
                 <img src="https://static.vecteezy.com/system/resources/previews/000/148/262/original/city-map-vector.jpg" className="w-full h-full object-cover grayscale opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg text-center">
                         <MapPin className="mx-auto text-green-600 mb-2" size={32} />
                         <h3 className="font-bold text-gray-800">Interactive Map View</h3>
                         <p className="text-sm text-gray-500">Loading GIS Layers...</p>
                     </div>
                 </div>
             </div>
        </motion.div>
    );
}

// --- Attendance Page ---
export const AttendancePage = () => {
    const staff = [
        { name: "Suresh Kumar", role: "Driver", status: "Present", time: "06:15 AM" },
        { name: "Ramesh Singh", role: "Helper", status: "Present", time: "06:20 AM" },
        { name: "Dinesh Yadav", role: "Supervisor", status: "Absent", time: "--" },
        { name: "Mahesh Gupta", role: "Driver", status: "Present", time: "06:10 AM" },
    ];
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="Staff Attendance" description="Daily biometric attendance logs." />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Employee</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Check In</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {staff.map((s, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                        <User size={16} />
                                    </div>
                                    <span className="font-medium text-gray-700">{s.name}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{s.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-mono">{s.time}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${s.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {s.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}

// --- Complaint Page ---
export const ComplaintPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="Grievance Redressal" description="Citizen complaints and resolution status." />
            <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                        <AlertTriangle size={24} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                             <h4 className="font-bold text-gray-800">Garbage not collected in Sector 4</h4>
                             <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-medium">In Progress</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Reported by: Amit Verma • 2 hours ago</p>
                        <div className="mt-3 flex gap-2">
                             <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">Assign Driver</button>
                             <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">View Location</button>
                        </div>
                    </div>
                </div>
                 <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 opacity-75">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                        <CheckCircle size={24} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                             <h4 className="font-bold text-gray-800">Overflowing dustbin near Market</h4>
                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">Resolved</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Reported by: Priya Singh • Yesterday</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// --- Admin Page ---
export const AdminPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
            <PageHeader title="Administration" description="System settings and configuration." />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-100">
                 <div className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Bell size={20} /></div>
                         <div>
                             <h4 className="font-medium text-gray-800">System Notifications</h4>
                             <p className="text-xs text-gray-500">Enable email alerts for critical events</p>
                         </div>
                     </div>
                     <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-green-500 right-0" defaultChecked/>
                        <span className="toggle-label block overflow-hidden h-6 rounded-full bg-green-500"></span>
                    </div>
                 </div>
                 <div className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Settings size={20} /></div>
                         <div>
                             <h4 className="font-medium text-gray-800">Auto-Maintenance Mode</h4>
                             <p className="text-xs text-gray-500">Schedule daily system backups</p>
                         </div>
                     </div>
                     <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 left-0"/>
                        <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300"></span>
                    </div>
                 </div>
            </div>
        </motion.div>
    );
}

// --- KPI Dashboard Page ---
export const KPIDashboardPage = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2">
             <PageHeader title="Key Performance Indicators" description="High-level metrics and monthly trends." />
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                 {['Collection Efficiency', 'Route Adherence', 'Fuel Efficiency', 'Complaint Resolution'].map((kpi, i) => (
                     <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                         <div className="text-3xl font-bold text-gray-800 mb-1">{85 + i * 2}%</div>
                         <div className="text-xs text-gray-500 uppercase font-medium tracking-wide">{kpi}</div>
                         <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                             <div className="bg-green-500 h-full" style={{ width: `${85 + i * 2}%` }}></div>
                         </div>
                     </div>
                 ))}
             </div>
             <div className="h-64 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                 <p className="text-gray-400 font-medium">Performance Charts Loading...</p>
             </div>
        </motion.div>
    );
}