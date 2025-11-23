import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { 
  CustomersPage, UserChargePage, FuelPage, WeighmentPage, 
  BulkCollectionPage, CoverageMonitoringPage, AttendancePage, 
  ComplaintPage, AdminPage, KPIDashboardPage 
} from './components/Pages';
import { generateDashboardInsight } from './services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, AlertTriangle } from 'lucide-react';

function App() {
  const [showInsightModal, setShowInsightModal] = useState(false);
  const [insightData, setInsightData] = useState<{summary: string, recommendations: string[]} | null>(null);
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleGenerateInsight = async () => {
    setShowInsightModal(true);
    if (insightData) return; // Don't regenerate if we have it
    
    setIsLoadingInsight(true);
    // Construct a text representation of the dashboard state
    const dataContext = `
      Customer KYC Done Today: 178
      User Charge Amount Collected Today: 83,150
      User Charge Till Month: 24,71,880
      Fuel Cost Per KM: NA
      Net Waste Weighment: 0
      Bulk Collection Scans Today: 32
      Total Vehicles: 223
      Stopped Vehicles: 146 (High number!)
      Running Vehicles: 7
      Attendance Today: 95P / 249T
      Complaints: 6 Open, 183 Resolved
      POI Coverage: 34.8% Today
    `;
    
    const result = await generateDashboardInsight(dataContext);
    setInsightData(result);
    setIsLoadingInsight(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard onGenerateInsight={handleGenerateInsight} />;
      case 'Customers':
        return <CustomersPage />;
      case 'User Charge':
        return <UserChargePage />;
      case 'Fuel':
        return <FuelPage />;
      case 'Weighment':
        return <WeighmentPage />;
      case 'Bulk Collection':
        return <BulkCollectionPage />;
      case 'Coverage Monitoring':
        return <CoverageMonitoringPage />;
      case 'Attendance':
        return <AttendancePage />;
      case 'Complaint':
        return <ComplaintPage />;
      case 'Admin':
        return <AdminPage />;
      case 'KPI Dashboard':
        return <KPIDashboardPage />;
      default:
        return <Dashboard onGenerateInsight={handleGenerateInsight} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activePage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Main Content Area */}
      <div className="ml-0 lg:ml-72 transition-all duration-300 min-h-screen flex flex-col">
        <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-4 sm:p-6 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
          {renderPage()}
        </main>
      </div>

      {/* AI Insight Modal */}
      <AnimatePresence>
        {showInsightModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white flex justify-between items-start shrink-0 relative overflow-hidden">
                 {/* Abstract BG decoration */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                 
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold flex items-center gap-2">
                     <Sparkles size={20} className="text-yellow-300" />
                     AI Dashboard Analysis
                   </h3>
                   <p className="text-purple-100 text-sm mt-1">Real-time insights powered by Gemini 2.5</p>
                 </div>
                 <motion.button 
                    whileHover={{ rotate: 90, backgroundColor: "rgba(255,255,255,0.2)" }}
                    onClick={() => setShowInsightModal(false)} 
                    className="p-1.5 rounded-full transition-colors relative z-10"
                 >
                   <X size={20} />
                 </motion.button>
              </div>
              
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {isLoadingInsight ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative w-16 h-16 mb-4">
                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                        <Sparkles size={20} className="absolute inset-0 m-auto text-purple-600 animate-pulse" />
                    </div>
                    <p className="text-gray-600 font-medium animate-pulse">Analyzing municipal data streams...</p>
                    <p className="text-xs text-gray-400 mt-2">Connecting to Neural Engine</p>
                  </div>
                ) : insightData ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 shadow-sm">
                      <h4 className="text-purple-900 font-bold mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                          Executive Summary
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{insightData.summary}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-800 font-bold mb-4 flex items-center gap-2">
                         <div className="p-1.5 bg-amber-100 rounded-md text-amber-600">
                             <AlertTriangle size={16} />
                         </div>
                         Key Recommendations
                      </h4>
                      <ul className="space-y-3">
                        {insightData.recommendations.map((rec, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                          >
                            <div className="min-w-[28px] h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-md flex items-center justify-center text-xs font-bold shrink-0">
                              {i + 1}
                            </div>
                            <span className="text-sm text-gray-700 leading-tight flex items-center">{rec}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                   <div className="text-center py-12">
                       <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                           <AlertTriangle size={32} />
                       </div>
                       <p className="text-red-600 font-medium">Failed to load analysis.</p>
                       <p className="text-sm text-gray-500 mt-1">Please check your API key and connection.</p>
                   </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100 shrink-0">
                <span className="text-xs text-gray-400">
                    {insightData ? "Analysis generated just now" : ""}
                </span>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowInsightModal(false)} 
                  className="px-6 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium shadow-sm transition-all text-sm"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;