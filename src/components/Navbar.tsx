import React from 'react';
import { 
  BrainCircuit, 
  Bell, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Activity,
  Cpu
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  isStreaming: boolean;
  setIsStreaming: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, isStreaming, setIsStreaming }) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-indigo-500/20 bg-slate-950/80 px-6 backdrop-blur-xl">
      {/* Left Title / Branding */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/30">
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
            <BrainCircuit className="h-5 w-5 text-indigo-400 animate-pulse" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              EduVision AI
            </span>
            <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-300 border border-indigo-500/20">
              PRO v4.2
            </span>
          </div>
          <p className="font-mono text-[11px] text-slate-400">Smart Classroom Attention & Engagement Engine</p>
        </div>
      </div>

      {/* Center Search / Telemetry status */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search student ID, subject, camera..."
            className="h-9 w-full rounded-lg border border-slate-800 bg-slate-900/60 pl-9 pr-4 font-sans text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 px-3 py-1.5 border border-slate-800">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isStreaming ? 'bg-emerald-400 opacity-75' : 'bg-amber-400 opacity-75'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isStreaming ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          </span>
          <span className="font-mono text-[11px] font-medium text-slate-300">
            {isStreaming ? 'EDGE_RTSP_ACTIVE (30 FPS)' : 'SIMULATION_PAUSED'}
          </span>
        </div>
      </div>

      {/* Right Controls & Profile */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsStreaming(!isStreaming)}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-sans text-xs font-semibold shadow-sm transition-all ${
            isStreaming 
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/20 hover:opacity-90' 
              : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-amber-500/20 hover:opacity-90'
          }`}
        >
          <Activity className="h-3.5 w-3.5" />
          {isStreaming ? 'Live Inference ON' : 'Resume Feed'}
        </button>

        <div className="flex items-center gap-1 border-l border-slate-800 pl-4">
          <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-colors">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          </button>
          
          <div className="flex items-center gap-2.5 ml-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Admin Profile"
              className="h-8 w-8 rounded-full border border-indigo-500/40 object-cover shadow-sm"
            />
            <div className="hidden lg:block text-left">
              <div className="flex items-center gap-1">
                <span className="font-sans text-xs font-semibold text-slate-200">Dr. Aris Thorne</span>
                <ShieldCheck className="h-3 w-3 text-blue-400" />
              </div>
              <p className="font-mono text-[10px] text-indigo-400">Chief AI Architect</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
