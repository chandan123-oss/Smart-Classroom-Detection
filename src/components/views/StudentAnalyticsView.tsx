import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  Users, 
  Search, 
  Award, 
  Clock, 
  Eye, 
  PhoneCall, 
  Moon, 
  MessageSquare, 
  TrendingUp, 
  Calendar, 
  Download,
  AlertTriangle,
  FileText,
  Sparkles
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar 
} from 'recharts';
import { Student } from '../../types';

export const StudentAnalyticsView: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student>(mockStudents[0]);
  const [reportTimeframe, setReportTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('weekly');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredList = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simulated trend data based on selected timeframe
  const getChartData = () => {
    if (reportTimeframe === 'daily') {
      return [
        { label: 'Lecture 1 (9 AM)', attn: selectedStudent.avgAttention + 2, eye: selectedStudent.eyeContactPercent },
        { label: 'Lecture 2 (10 AM)', attn: selectedStudent.avgAttention - 4, eye: selectedStudent.eyeContactPercent - 3 },
        { label: 'Lecture 3 (11 AM)', attn: selectedStudent.avgAttention - 8, eye: selectedStudent.eyeContactPercent - 5 },
        { label: 'Lab (2 PM)', attn: selectedStudent.avgAttention + 4, eye: selectedStudent.eyeContactPercent + 2 },
      ];
    } else if (reportTimeframe === 'weekly') {
      return [
        { label: 'Mon', attn: 91, eye: 88 },
        { label: 'Tue', attn: 88, eye: 84 },
        { label: 'Wed', attn: selectedStudent.avgAttention, eye: selectedStudent.eyeContactPercent },
        { label: 'Thu', attn: selectedStudent.avgAttention - 2, eye: selectedStudent.eyeContactPercent - 1 },
        { label: 'Fri', attn: selectedStudent.avgAttention + 3, eye: selectedStudent.eyeContactPercent + 4 },
      ];
    } else if (reportTimeframe === 'monthly') {
      return [
        { label: 'Week 1', attn: 89, eye: 85 },
        { label: 'Week 2', attn: 92, eye: 89 },
        { label: 'Week 3', attn: selectedStudent.avgAttention, eye: selectedStudent.eyeContactPercent },
        { label: 'Week 4', attn: selectedStudent.avgAttention + 1, eye: selectedStudent.eyeContactPercent },
      ];
    } else {
      return [
        { label: 'Sem 3', attn: 82, eye: 78 },
        { label: 'Sem 4', attn: 86, eye: 82 },
        { label: 'Sem 5', attn: 90, eye: 87 },
        { label: 'Sem 6', attn: selectedStudent.avgAttention, eye: selectedStudent.eyeContactPercent },
      ];
    }
  };

  const radarData = [
    { subject: 'Attention', A: selectedStudent.avgAttention, fullMark: 100 },
    { subject: 'Eye Contact', A: selectedStudent.eyeContactPercent, fullMark: 100 },
    { subject: 'Participation', A: selectedStudent.participationScore, fullMark: 100 },
    { subject: 'Attendance', A: selectedStudent.attendancePercent, fullMark: 100 },
    { subject: 'Discipline', A: Math.max(20, 100 - selectedStudent.phoneUsageCount * 5), fullMark: 100 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 animate-fadeIn pb-12">
      {/* Left Student Roster Picker */}
      <div className="lg:col-span-1 rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-4 shadow-xl flex flex-col h-[750px]">
        <div className="mb-4">
          <h2 className="font-sans text-base font-bold text-white flex items-center gap-2">
            <Users className="h-4 w-4 text-indigo-400" /> Student Directory
          </h2>
          <p className="font-mono text-[11px] text-slate-400">Select profile for deep inspection</p>
          
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-full rounded-lg border border-slate-800 bg-slate-950 pl-9 pr-3 font-sans text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {filteredList.map((st) => {
            const isSel = selectedStudent.id === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStudent(st)}
                className={`w-full flex items-center gap-3 rounded-xl p-3 text-left transition-all ${
                  isSel 
                    ? 'bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 border border-indigo-500 text-white shadow-md' 
                    : 'bg-slate-950/60 border border-slate-800/80 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <img src={st.avatar} alt={st.name} className="h-10 w-10 rounded-lg object-cover border border-slate-700" />
                <div className="overflow-hidden">
                  <h4 className="font-sans text-xs font-bold truncate text-slate-100">{st.name}</h4>
                  <p className="font-mono text-[10px] text-indigo-300">{st.rollNo}</p>
                  <div className="flex items-center gap-2 mt-1 font-mono text-[9px] text-slate-400">
                    <span>Attn: <b className="text-emerald-400">{st.avgAttention}%</b></span>
                    <span>•</span>
                    <span>Part: <b>{st.participationScore}</b></span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Student Profile Detail View (Span 3) */}
      <div className="lg:col-span-3 space-y-6">
        {/* Profile Header Banner */}
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-purple-950/30 p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img 
                src={selectedStudent.avatar} 
                alt={selectedStudent.name} 
                className="h-20 w-20 rounded-2xl object-cover border-2 border-indigo-500 shadow-lg shadow-indigo-500/20" 
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-sans text-2xl font-extrabold text-white tracking-tight">{selectedStudent.name}</h1>
                  <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-xs font-bold text-indigo-300 border border-indigo-500/30">
                    {selectedStudent.id}
                  </span>
                </div>
                <p className="font-mono text-xs text-slate-300 mt-1">
                  Department: <b className="text-white">{selectedStudent.department}</b> • Semester {selectedStudent.semester} • Roll: {selectedStudent.rollNo}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 font-mono text-xs">
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                    Attendance: <b className="text-emerald-400">{selectedStudent.attendancePercent}%</b>
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                    Avg Attention: <b className="text-blue-400">{selectedStudent.avgAttention}%</b>
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                    Eye Contact: <b className="text-purple-400">{selectedStudent.eyeContactPercent}%</b>
                  </span>
                </div>
              </div>
            </div>

            {/* AI Prediction Badge */}
            <div className="rounded-xl border border-purple-500/40 bg-purple-950/30 p-4 min-w-[220px] text-left">
              <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-purple-300 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" /> XGBoost Exam Forecast
              </span>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="font-mono text-2xl font-extrabold text-white">{selectedStudent.predictions.examPredictedScore}%</span>
                <span className="font-mono text-[10px] text-emerald-400">Topper Prob: {selectedStudent.predictions.topperProbability}</span>
              </div>
              <p className="font-mono text-[10px] text-slate-400 mt-1">Dropout Risk: <span className="text-emerald-400 font-bold">{selectedStudent.predictions.dropoutRisk}</span></p>
            </div>
          </div>
        </div>

        {/* 4 Telemetry Counters Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex items-center gap-3">
            <div className="rounded-lg bg-rose-500/10 p-3 text-rose-400"><Moon className="h-5 w-5"/></div>
            <div>
              <span className="font-sans text-xs text-slate-400">Sleeping Count</span>
              <p className="font-mono text-xl font-bold text-white">{selectedStudent.sleepingCount} <span className="text-[10px] font-normal text-slate-500">events</span></p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex items-center gap-3">
            <div className="rounded-lg bg-amber-500/10 p-3 text-amber-400"><PhoneCall className="h-5 w-5"/></div>
            <div>
              <span className="font-sans text-xs text-slate-400">Phone Usage</span>
              <p className="font-mono text-xl font-bold text-white">{selectedStudent.phoneUsageCount} <span className="text-[10px] font-normal text-slate-500">flags</span></p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex items-center gap-3">
            <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400"><MessageSquare className="h-5 w-5"/></div>
            <div>
              <span className="font-sans text-xs text-slate-400">Talking Count</span>
              <p className="font-mono text-xl font-bold text-white">{selectedStudent.talkingCount} <span className="text-[10px] font-normal text-slate-500">times</span></p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400"><Award className="h-5 w-5"/></div>
            <div>
              <span className="font-sans text-xs text-slate-400">Participation Score</span>
              <p className="font-mono text-xl font-bold text-emerald-400">{selectedStudent.participationScore} / 100</p>
            </div>
          </div>
        </div>

        {/* Charts & Reports Tabs Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Trend Line Chart (Span 2) */}
          <div className="lg:col-span-2 rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <h3 className="font-sans text-base font-bold text-white">Attention & Eye Contact Reports</h3>
                <p className="font-mono text-xs text-slate-400">Historical performance trajectory</p>
              </div>

              {/* Timeframe Switcher */}
              <div className="flex gap-1 mt-3 sm:mt-0 bg-slate-950 p-1 rounded-lg border border-slate-800 font-mono text-xs">
                {(['daily', 'weekly', 'monthly', 'yearly'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setReportTimeframe(tf)}
                    className={`rounded px-3 py-1 capitalize transition-colors ${
                      reportTimeframe === tf 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="label" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" domain={[40, 100]} tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="attn" stroke="#3b82f6" strokeWidth={3} name="Attention %" dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="eye" stroke="#a855f7" strokeWidth={2} name="Eye Contact %" dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Chart Multi-dimensional assessment */}
          <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-base font-bold text-white mb-1">Holistic AI Evaluation</h3>
              <p className="font-mono text-xs text-slate-400">5-Axis Competency Radar</p>
            </div>

            <div className="h-56 w-full flex items-center justify-center -ml-2">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={70} data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                  <Radar name="Student Score" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-300">
              <span>Weak Area:</span>
              <span className="text-amber-400 font-bold">{selectedStudent.predictions.weakAreas[0] || 'None'}</span>
            </div>
          </div>
        </div>

        {/* Emotion Distribution Bar & Report Download */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-sans font-bold text-white">Academic Report Generator for {selectedStudent.name}</h3>
              <p className="font-mono text-xs text-slate-400">Generate certified PDF or Excel dossiers for academic counseling</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 font-sans text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700">
                <FileText className="h-3.5 w-3.5 text-blue-400" /> Download PDF Report
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-sans text-xs font-semibold text-white hover:bg-indigo-500 transition-colors shadow-sm">
                <Download className="h-3.5 w-3.5" /> Export Excel Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
