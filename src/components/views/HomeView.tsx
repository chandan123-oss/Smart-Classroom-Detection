import React from 'react';
import { 
  mockStudents, 
  mockAttentionTrend, 
  mockSubjects 
} from '../../data/mockData';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Target, 
  Trophy, 
  AlertTriangle, 
  Smile, 
  TrendingUp, 
  Activity, 
  Sparkles,
  ArrowUpRight,
  Eye,
  Video,
  ChevronRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { TabType } from '../../types';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const totalStudents = 60;
  const presentStudents = 52;
  const absentStudents = 8;
  const avgAttentionScore = 86.4;

  const mostFocused = mockStudents.reduce((prev, current) => (prev.avgAttention > current.avgAttention) ? prev : current);
  const leastFocused = mockStudents.reduce((prev, current) => (prev.avgAttention < current.avgAttention) ? prev : current);

  const emotionData = [
    { name: 'Happy / Engaged', value: 45, color: '#3b82f6' },
    { name: 'Neutral / Calm', value: 30, color: '#6366f1' },
    { name: 'Confused / Inquiring', value: 15, color: '#a855f7' },
    { name: 'Drowsy / Bored', value: 10, color: '#ec4899' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 p-6 shadow-xl backdrop-blur-md">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-semibold text-blue-300 border border-blue-500/30">
                ⚡ REAL-TIME AI TELEMETRY
              </span>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                ● YOLOv11 + DEEPFACE STREAMING
              </span>
            </div>
            <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Smart Classroom Attention Executive Dashboard
            </h1>
            <p className="mt-1 font-sans text-sm text-slate-300 max-w-2xl">
              Monitoring 60 students across Computer Science & AI departments. Instant Computer Vision gaze tracking, facial emotion classification, and predictive engagement forecasting.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('live')}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 font-sans text-xs font-bold text-white shadow-lg shadow-indigo-500/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
            >
              <Video className="h-4 w-4" />
              Launch Live Feed
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPIs Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* KPI 1 */}
        <div className="group rounded-xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-indigo-500/50 hover:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-slate-400">Total Students</span>
            <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-400">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-mono text-3xl font-extrabold text-white">60</span>
            <span className="flex items-center font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              +12% vs Sem 5
            </span>
          </div>
          <div className="mt-3 flex gap-2 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-300"><UserCheck className="h-3 w-3"/> 52 Present</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-rose-300"><UserX className="h-3 w-3"/> 8 Absent</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="group rounded-xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-indigo-500/50 hover:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-slate-400">Avg Attention Score</span>
            <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400">
              <Target className="h-5 w-5 animate-pulse" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-mono text-3xl font-extrabold text-indigo-300">86.4%</span>
            <span className="flex items-center font-mono text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              OPTIMAL
            </span>
          </div>
          <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full w-[86%]" />
          </div>
        </div>

        {/* KPI 3 */}
        <div className="group rounded-xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-indigo-500/50 hover:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-slate-400">Class Performance</span>
            <div className="rounded-lg bg-purple-500/10 p-2.5 text-purple-400">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-mono text-3xl font-extrabold text-purple-300">3.88 GPA</span>
            <span className="flex items-center font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Predicted A+
            </span>
          </div>
          <p className="mt-3 font-sans text-xs text-slate-400">Based on XGBoost tabular regressor</p>
        </div>

        {/* KPI 4 */}
        <div className="group rounded-xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-lg transition-all hover:border-indigo-500/50 hover:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-slate-400">Average Emotion</span>
            <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-400">
              <Smile className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-sans text-2xl font-bold text-blue-300">Happy / Engaged</span>
            <span className="font-mono text-xs text-slate-400">75% Positive</span>
          </div>
          <p className="mt-3 font-sans text-xs text-slate-400">FER-ResNet50 6-Class Inference</p>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Attention Trend Chart (Span 2) */}
        <div className="lg:col-span-2 rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div>
              <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-indigo-400" />
                Real-Time Attention & Engagement Trajectory
              </h2>
              <p className="font-mono text-xs text-slate-400">15-minute frame averages across ongoing morning lectures</p>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0 font-mono text-xs">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span> Attention %</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-purple-500"></span> Engagement Index</span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockAttentionTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis stroke="#64748b" domain={[40, 100]} tick={{ fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="attention" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAttn)" name="Attention %" />
                <Area type="monotone" dataKey="engagement" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorEngage)" name="Engagement" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Emotion Distribution Donut */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="font-sans text-lg font-bold text-white mb-1">Classroom Emotion Matrix</h2>
            <p className="font-mono text-xs text-slate-400 mb-4">Live breakdown from DeepFace ArcFace</p>
          </div>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emotionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {emotionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            {emotionData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between font-sans text-xs">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-mono font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights & Camera Preview Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Most & Least Focused Cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400">
                <Trophy className="h-4 w-4 text-amber-400" /> MOST FOCUSED STUDENT
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300 border border-emerald-500/30">
                {mostFocused.avgAttention}% ATTN
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src={mostFocused.avatar} alt={mostFocused.name} className="h-12 w-12 rounded-xl object-cover border border-emerald-500/40 shadow-sm" />
              <div>
                <h3 className="font-sans font-bold text-white">{mostFocused.name}</h3>
                <p className="font-mono text-xs text-slate-400">{mostFocused.rollNo} • {mostFocused.department}</p>
                <p className="mt-1 font-sans text-xs text-emerald-300">Zero phone detections • 94% Eye Gaze</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-rose-400">
                <AlertTriangle className="h-4 w-4" /> LEAST FOCUSED STUDENT
              </span>
              <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-xs font-bold text-rose-300 border border-rose-500/30">
                {leastFocused.avgAttention}% ATTN
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src={leastFocused.avatar} alt={leastFocused.name} className="h-12 w-12 rounded-xl object-cover border border-rose-500/40 shadow-sm" />
              <div>
                <h3 className="font-sans font-bold text-white">{leastFocused.name}</h3>
                <p className="font-mono text-xs text-slate-400">{leastFocused.rollNo} • {leastFocused.department}</p>
                <p className="mt-1 font-sans text-xs text-rose-300">19 Phone flags • 8 Drowsy alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Camera Feed Card */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-sans font-bold text-white flex items-center gap-2">
                <Video className="h-4 w-4 text-blue-400" /> Room 302 AI Stream Preview
              </h2>
              <p className="font-mono text-[10px] text-slate-400">RTSP Stream CAM-ROOM-302</p>
            </div>
            <span className="animate-pulse h-2.5 w-2.5 rounded-full bg-rose-500"></span>
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80" 
              alt="Classroom preview" 
              className="h-full w-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            {/* Simulated Bounding Box Overlay */}
            <div className="absolute left-1/4 top-1/4 h-24 w-20 border-2 border-emerald-400 rounded bg-emerald-500/10 flex flex-col justify-between p-1 shadow-sm">
              <span className="bg-emerald-500 text-slate-950 font-mono text-[8px] font-bold px-1 rounded self-start">Aarav 94%</span>
            </div>
            <div className="absolute right-1/3 top-1/3 h-24 w-20 border-2 border-amber-400 rounded bg-amber-500/10 flex flex-col justify-between p-1 shadow-sm">
              <span className="bg-amber-500 text-slate-950 font-mono text-[8px] font-bold px-1 rounded self-start">Zara 73%</span>
            </div>

            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
              <span>YOLOv11 BBoxes: 12 Active</span>
              <button 
                onClick={() => setActiveTab('live')}
                className="underline text-indigo-300 hover:text-white flex items-center gap-1"
              >
                Expand Live View <ArrowUpRight className="h-3 w-3"/>
              </button>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-slate-400 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
            <span>FPS: 30.1</span>
            <span>Resolution: 1920x1080</span>
            <span className="text-emerald-400">0% Dropped</span>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                AI Executive Insights
              </h2>
              <span className="font-mono text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                GEMINI 2.5 ENGINE
              </span>
            </div>

            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-sans text-xs text-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-400">📈 Optimal Attention Span:</span> Students showed highest concentration (94.2%) between 09:00 AM and 10:15 AM during algorithmic problem solving.
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-sans text-xs text-slate-200 leading-relaxed">
                <span className="font-bold text-amber-400">⚠️ Mid-Morning Dip Alert:</span> A sharp 22% drop in concentration occurred at 11:00 AM. Recommendation: Recommend instructors introduce interactive 3-minute Kahoot quizzes around 10:55 AM.
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-sans text-xs text-slate-200 leading-relaxed">
                <span className="font-bold text-emerald-400">🎓 Topper Prediction:</span> Ananya Verma & Aarav Sharma maintain &gt;92% eye contact ratio, indicating a 94% probability of achieving distinction in upcoming term exams.
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('reports')}
            className="mt-4 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-sans text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
          >
            Export Comprehensive Report
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
