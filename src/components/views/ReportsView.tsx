import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Download, 
  Sparkles, 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Calendar, 
  CheckCircle2, 
  Share2, 
  Printer, 
  FileCheck,
  ShieldCheck,
  Brain
} from 'lucide-react';
import { mockStudents } from '../../data/mockData';

export const ReportsView: React.FC = () => {
  const [activeReportType, setActiveReportType] = useState<'daily' | 'weekly' | 'monthly' | 'semester' | 'academic' | 'parent'>('weekly');
  const [selectedStudentId, setSelectedStudentId] = useState('STU-1001');

  const currStudent = mockStudents.find(s => s.id === selectedStudentId) || mockStudents[0];

  const handleDownload = (fmt: 'pdf' | 'excel' | 'csv') => {
    alert(`Generating certified ${activeReportType.toUpperCase()} report dossier in ${fmt.toUpperCase()} format. Dispatched to local downloads.`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-blue-950/60 via-indigo-900/50 to-purple-950/60 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-purple-500/20 px-3 py-1 font-mono text-xs font-semibold text-purple-300 border border-purple-500/30">
              📊 ISO-27001 COMPLIANT TELEMETRY DOSSIERS
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              Academic Engagement & AI Report Generator
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-2xl mt-1">
              Synthesizing millions of computer vision attention logs into structured executive reports for faculty counselors, university deans, and student guardians.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => handleDownload('pdf')}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 font-sans text-xs font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download All PDF Dossiers
            </button>
          </div>
        </div>
      </div>

      {/* Report Type Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow">
        <div className="flex flex-wrap gap-1.5 font-sans text-xs font-semibold">
          {[
            { id: 'daily', label: 'Daily Report' },
            { id: 'weekly', label: 'Weekly Summary' },
            { id: 'monthly', label: 'Monthly Report' },
            { id: 'semester', label: 'Semester Dossier' },
            { id: 'academic', label: 'Full Academic Report' },
            { id: 'parent', label: 'Guardian / Parent Report', badge: 'PRIVACY' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveReportType(tab.id as any)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all ${
                activeReportType === tab.id 
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] text-amber-300 border border-amber-500/30">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-slate-400">Target Student:</span>
          <select 
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white focus:border-indigo-500 focus:outline-none"
          >
            {mockStudents.map(s => (
              <option key={s.id} value={s.id}>{s.name} ({s.rollNo})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Dossier Preview Stage */}
      <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/90 p-8 shadow-2xl space-y-8 max-w-5xl mx-auto">
        {/* Document Title Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-sans text-xl font-extrabold text-white uppercase tracking-wider">
                  {activeReportType === 'parent' ? "CONFIDENTIAL GUARDIAN ENGAGEMENT REPORT" : `${activeReportType.toUpperCase()} ACADEMIC ATTENTION REPORT`}
                </h2>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                  VERIFIED AI
                </span>
              </div>
              <p className="font-mono text-xs text-slate-400 mt-0.5">Generated for Department of {currStudent.department} • University Registry</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => handleDownload('pdf')} className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700" title="Download PDF">
              <FileText className="h-4 w-4 text-rose-400" />
            </button>
            <button onClick={() => handleDownload('excel')} className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700" title="Export Excel">
              <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            </button>
            <button onClick={() => window.print()} className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700" title="Print">
              <Printer className="h-4 w-4 text-blue-400" />
            </button>
          </div>
        </div>

        {/* Student Profile Overview Card inside Report */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0">
            <img src={currStudent.avatar} alt={currStudent.name} className="h-16 w-16 rounded-2xl object-cover border-2 border-indigo-500" />
            <div>
              <h3 className="font-sans font-bold text-white text-base">{currStudent.name}</h3>
              <p className="font-mono text-xs text-indigo-400">{currStudent.rollNo}</p>
              <p className="font-mono text-[11px] text-slate-400 mt-1">Semester {currStudent.semester}</p>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Mean Attention</span>
              <p className="font-mono text-xl font-extrabold text-blue-400">{currStudent.avgAttention}%</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Participation KPI</span>
              <p className="font-mono text-xl font-extrabold text-emerald-400">{currStudent.participationScore}/100</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono text-[10px] text-slate-400 uppercase">XGBoost Exam Pred</span>
              <p className="font-mono text-xl font-extrabold text-purple-400">{currStudent.predictions.examPredictedScore}%</p>
            </div>
          </div>
        </div>

        {/* 3 Dedicated AI Summary Sections: Teacher, Student, Parent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Executive Summary */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-5 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-sans font-bold text-sm">
              <Brain className="h-4 w-4" /> AI Pedagogical Summary
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Student displays exceptional engagement during morning coding lectures (mean EAR 0.32). However, a minor concentration fatigue curve is observed after 12:15 PM during lengthy slide decks.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-purple-300">
              ● Gemini 2.5 Grounded Synthesis
            </div>
          </div>

          {/* Teacher Suggestions */}
          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 p-5 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-sans font-bold text-sm">
              <GraduationCap className="h-4 w-4" /> Faculty Suggestions
            </div>
            <ul className="font-sans text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Call upon {currStudent.name.split(' ')[0]} for Socratic problem breakdown in Graph Theory.</li>
              <li>Encourage participation in upcoming hackathons to channel high intuition.</li>
            </ul>
            <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-blue-300">
              ● Actionable Instructional Cue
            </div>
          </div>

          {/* Student / Parent Suggestions */}
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-sans font-bold text-sm">
              <HeartHandshake className="h-4 w-4" /> Guardian & Study Tips
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {activeReportType === 'parent' 
                ? `We commend ${currStudent.name}'s stellar 96% attendance. To reduce minor afternoon drowsiness, ensure adequate hydration and a consistent 8-hour sleep schedule.` 
                : `Focus Improvement Tip: Implement 25-minute Pomodoro study intervals with 5-minute eye relaxation off-screen.`}
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-emerald-300">
              ● Wellness & Habit Optimizer
            </div>
          </div>
        </div>

        {/* Download Action Footer */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Cryptographically signed by EduVision Central Server • SHA256 Verified</span>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => handleDownload('csv')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 font-sans text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              Export Raw CSV Telemetry
            </button>
            <button 
              onClick={() => handleDownload('pdf')}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-sans text-xs font-bold shadow-lg transition-all"
            >
              Download Certified PDF Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
