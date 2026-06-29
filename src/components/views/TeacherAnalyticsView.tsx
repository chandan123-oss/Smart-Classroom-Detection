import React from 'react';
import { 
  mockTeachers, 
  mockSubjects, 
  mockAttentionTrend, 
  mockStudents 
} from '../../data/mockData';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  AlertCircle, 
  Lightbulb, 
  Award, 
  ChevronRight, 
  Sparkles,
  Target,
  ArrowUpRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  AreaChart, 
  Area,
  Cell
} from 'recharts';

export const TeacherAnalyticsView: React.FC = () => {
  const studentsNeedingHelp = mockStudents.filter(s => s.avgAttention < 75 || s.predictions.dropoutRisk !== 'Low');

  const mostInteractiveSubject = mockSubjects.reduce((p, c) => (p.attention > c.attention) ? p : c);
  const leastInteractiveSubject = mockSubjects.reduce((p, c) => (p.attention < c.attention) ? p : c);

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-blue-950/60 via-indigo-900/40 to-purple-950/60 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 font-mono text-xs font-semibold text-indigo-300 border border-indigo-500/30">
              🎓 FACULTY ENGAGEMENT INTELLIGENCE
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              Teacher & Pedagogical Analytics
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-2xl mt-1">
              Evaluating instructional effectiveness across subjects and time slots. AI-driven pedagogical recommendations to maximize student absorption and retention.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-900/90 p-4 border border-indigo-500/30 text-right">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Average Faculty KPI</span>
              <p className="font-mono text-2xl font-bold text-emerald-400">86.2% EFFECTIVE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Highlights Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-emerald-500/30 bg-slate-900/80 p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">Most Interactive Class</span>
            <h3 className="font-sans text-lg font-bold text-white mt-1">{mostInteractiveSubject.subject}</h3>
            <p className="font-mono text-xs text-slate-400">{mostInteractiveSubject.teacher}</p>
          </div>
          <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
            <Award className="h-6 w-6" />
          </div>
        </div>

        <div className="rounded-xl border border-rose-500/30 bg-slate-900/80 p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">Least Interactive Class</span>
            <h3 className="font-sans text-lg font-bold text-white mt-1">{leastInteractiveSubject.subject}</h3>
            <p className="font-mono text-xs text-slate-400">{leastInteractiveSubject.teacher}</p>
          </div>
          <div className="rounded-xl bg-rose-500/10 p-3 text-rose-400">
            <AlertCircle className="h-6 w-6" />
          </div>
        </div>

        <div className="rounded-xl border border-blue-500/30 bg-slate-900/80 p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">Average Engagement</span>
            <h3 className="font-mono text-2xl font-extrabold text-white mt-1">84.8 / 100</h3>
            <p className="font-sans text-xs text-slate-400">Classroom composite metric</p>
          </div>
          <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
            <Target className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Charts Section: Attention by Subject & Attention by Time */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Attention by Subject Bar Chart */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-400" /> Attention by Subject
              </h2>
              <p className="font-mono text-xs text-slate-400">Comparative student focus across syllabi</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockSubjects} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="subject" stroke="#64748b" tick={{ fontSize: 10 }} />
                <YAxis stroke="#64748b" domain={[50, 100]} tick={{ fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="attention" name="Attention %" radius={[6, 6, 0, 0]}>
                  {mockSubjects.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.attention >= 85 ? '#3b82f6' : entry.attention >= 75 ? '#8b5cf6' : '#f43f5e'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attention by Time Slot */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-400" /> Attention by Lecture Time
              </h2>
              <p className="font-mono text-xs text-slate-400">Chronological circadian rhythm analysis</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockAttentionTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="timeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis stroke="#64748b" domain={[50, 100]} tick={{ fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="attention" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#timeGrad)" name="Attention %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Roster of Teachers Performance Card */}
      <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl">
        <h2 className="font-sans text-lg font-bold text-white mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-blue-400" /> Attention by Instructor Roster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTeachers.map((t, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-sans font-bold text-white text-sm">{t.teacherName}</h4>
                  <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {t.avgAttentionScore}% ATTN
                  </span>
                </div>
                <p className="font-mono text-xs text-slate-400 mt-1">{t.subject}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-purple-300 flex items-center gap-1">
                  <Lightbulb className="h-3 w-3 text-amber-400"/> AI RECOMMENDATION:
                </span>
                <p className="font-sans text-xs text-slate-300 italic">"{t.recommendedActions[0]}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Students Needing Help & AI Performance Predictions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Students needing immediate pedagogical intervention */}
        <div className="rounded-2xl border border-rose-500/20 bg-slate-900/80 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-rose-400" /> Students Needing Immediate Assistance
            </h2>
            <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-xs font-bold text-rose-300 border border-rose-500/30">
              {studentsNeedingHelp.length} Flagged
            </span>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {studentsNeedingHelp.map((st) => (
              <div key={st.id} className="rounded-xl border border-rose-500/30 bg-slate-950 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={st.avatar} alt={st.name} className="h-10 w-10 rounded-lg object-cover border border-rose-500/40" />
                  <div>
                    <h4 className="font-sans font-bold text-white text-xs">{st.name} ({st.rollNo})</h4>
                    <p className="font-mono text-[10px] text-slate-400">Attention: <b className="text-rose-400">{st.avgAttention}%</b> • Dropout Risk: <b className="text-rose-400">{st.predictions.dropoutRisk}</b></p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-[10px] text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                    Weak: {st.predictions.weakAreas[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Performance Predictions & Recommendations */}
        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="font-sans text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" /> Pedagogical Performance Prediction
            </h2>
            <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
              By analyzing historical attention curves across 42 lectures, our Transformer temporal model predicts that shifting 15% of theoretical slides to practical interactive coding challenges will elevate overall class GPA from <b className="text-white">3.88</b> to <b className="text-emerald-400">3.96</b>.
            </p>

            <div className="space-y-3 font-sans text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                💡 <b className="text-indigo-400">Recommendation 1:</b> Schedule complex mathematical derivations between 09:15 AM and 10:00 AM when circadian alertness peaks.
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                💡 <b className="text-purple-400">Recommendation 2:</b> Pair weak students (Row 4 & 5) with mentors from Row 1 during breakout lab sessions.
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Model Confidence: 96.4%</span>
            <span className="text-emerald-400 font-bold">UPDATED TODAY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
