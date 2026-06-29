import React from 'react';
import { TabType } from '../types';
import { 
  LayoutDashboard, 
  Video, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  Grid, 
  FileSpreadsheet, 
  Workflow, 
  Network, 
  ShieldAlert, 
  Sparkles,
  ChevronRight,
  Settings
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Dashboard Home', icon: LayoutDashboard, badge: 'LIVE' },
    { id: 'live', label: 'Live Classroom Feed', icon: Video, badge: 'YOLOv11' },
    { id: 'student-analytics', label: 'Student Analytics', icon: Users },
    { id: 'teacher-analytics', label: 'Teacher Analytics', icon: GraduationCap },
    { id: 'attendance', label: 'Biometric Attendance', icon: CalendarCheck },
    { id: 'heatmap', label: 'Attention Heatmap', icon: Grid },
    { id: 'reports', label: 'Academic Reports', icon: FileSpreadsheet },
    { id: 'ai-pipeline', label: 'AI & ML Workflows', icon: Workflow, badge: 'CV/ML' },
    { id: 'architecture', label: 'System Architecture', icon: Network },
    { id: 'admin', label: 'Admin & Schemas', icon: ShieldAlert },
    { id: 'extras', label: 'AI Study Chatbot', icon: Sparkles, badge: 'NEW' },
  ];

  return (
    <aside className="sticky top-16 z-30 flex h-[calc(100vh-4rem)] w-64 flex-col justify-between border-r border-indigo-500/20 bg-slate-950/90 p-4 backdrop-blur-xl transition-all">
      <div className="space-y-1 overflow-y-auto pr-1">
        <div className="mb-3 px-3 pt-2">
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Navigation Hierarchy
          </p>
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`group relative flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 font-sans text-xs font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 text-white shadow-sm shadow-indigo-500/20 border border-indigo-500/40'
                  : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-lg p-1.5 transition-colors ${isActive ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xs' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                }`}>
                  {item.badge}
                </span>
              )}

              {isActive && (
                <div className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r bg-gradient-to-b from-blue-500 to-purple-500 shadow-sm shadow-indigo-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom System Health summary */}
      <div className="mt-4 rounded-xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-purple-950/30 p-3.5 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="font-sans text-[11px] font-semibold text-slate-300">GPU Edge Health</span>
          <span className="font-mono text-[10px] text-emerald-400 font-bold">99.8% OPTIMAL</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-1.5 rounded-full w-[94%]" />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
          <span>Latency: 14.2ms</span>
          <span>50 Streams Active</span>
        </div>
      </div>
    </aside>
  );
};
