import React, { useState } from 'react';
import { mockAttendanceRecords, mockStudents } from '../../data/mockData';
import { 
  CalendarCheck, 
  Clock, 
  UserCheck, 
  UserX, 
  AlertCircle, 
  Download, 
  Search, 
  Filter, 
  ShieldCheck, 
  QrCode, 
  Camera, 
  FileSpreadsheet, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import { AttendanceRecord } from '../../types';

export const AttendanceView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'Present' | 'Late' | 'Absent'>('ALL');
  const [selectedDate, setSelectedDate] = useState('2026-06-29');

  const filteredRecords = mockAttendanceRecords.filter(rec => {
    const matchesSearch = rec.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || rec.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'ALL' || rec.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const exportData = (format: string) => {
    const header = "Attendance ID,Student ID,Student Name,Department,Date,Login Time,Logout Time,Status,Method,Confidence\n";
    const rows = filteredRecords.map(r => `${r.id},${r.studentId},${r.studentName},${r.department},${r.date},${r.loginTime},${r.logoutTime},${r.status},${r.verificationMethod},${r.confidenceScore}%`).join("\n");
    const blob = new Blob([header + rows], { type: format === 'csv' ? 'text/csv' : 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Classroom_Attendance_${selectedDate}.${format}`;
    a.click();
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                ● TOUCHLESS BIOMETRIC INGESTION
              </span>
              <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-semibold text-blue-300 border border-blue-500/30">
                DEEPFACE ARCFACE 512-D
              </span>
            </div>
            <h1 className="font-sans text-2xl font-extrabold text-white tracking-tight">
              Automated Attendance & Access Logs
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-2xl mt-1">
              Real-time facial identification logging student entry and exit timestamps automatically. Eliminates proxy attendance with 99.6% ArcFace cosine similarity confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button 
              onClick={() => exportData('csv')}
              className="flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2.5 font-sans text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              <FileSpreadsheet className="h-4 w-4 text-emerald-400" /> Export CSV
            </button>
            <button 
              onClick={() => exportData('xls')}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 font-sans text-xs font-semibold text-white shadow-md transition-colors"
            >
              <Download className="h-4 w-4" /> Export Excel
            </button>
            <button 
              onClick={() => alert("Certified Attendance Dossier PDF generated successfully.")}
              className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2.5 font-sans text-xs font-semibold text-white shadow-md transition-colors"
            >
              <FileText className="h-4 w-4" /> Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow">
          <span className="font-mono text-[11px] uppercase text-slate-400">Today Present</span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-mono text-2xl font-bold text-emerald-400">52 / 60</span>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">86.6%</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow">
          <span className="font-mono text-[11px] uppercase text-slate-400">Late Entries (&gt;9:15 AM)</span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-mono text-2xl font-bold text-amber-400">4 Students</span>
            <span className="font-mono text-xs text-amber-300">Logged</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow">
          <span className="font-mono text-[11px] uppercase text-slate-400">Absent Today</span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-mono text-2xl font-bold text-rose-400">8 Students</span>
            <span className="font-mono text-xs text-rose-300">SMS Alerted</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow">
          <span className="font-mono text-[11px] uppercase text-slate-400">Avg Verification Latency</span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-mono text-2xl font-bold text-indigo-300">22.0 ms</span>
            <span className="font-mono text-xs text-indigo-400">Edge GPU</span>
          </div>
        </div>
      </div>

      {/* Filters & Calendar controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Filter by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full rounded-lg border border-slate-800 bg-slate-950 pl-9 pr-3 font-sans text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="h-9 rounded-lg border border-slate-800 bg-slate-950 px-3 font-mono text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex gap-1.5 font-mono text-xs w-full sm:w-auto justify-end">
          {(['ALL', 'Present', 'Late', 'Absent'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`rounded-lg px-3 py-1.5 font-semibold transition-all ${
                filterStatus === st 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Table of Records */}
      <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                <th className="py-3.5 px-4">Student Profile</th>
                <th className="py-3.5 px-4">Roll & Dept</th>
                <th className="py-3.5 px-4">Login Time</th>
                <th className="py-3.5 px-4">Logout Time</th>
                <th className="py-3.5 px-4">Method & Confidence</th>
                <th className="py-3.5 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-sans text-xs">
              {filteredRecords.map((r) => (
                <tr key={r.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} alt={r.studentName} className="h-9 w-9 rounded-lg object-cover border border-slate-700 shadow-sm" />
                      <div>
                        <div className="font-bold text-white">{r.studentName}</div>
                        <div className="font-mono text-[10px] text-indigo-400">{r.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-300">
                    <div>{r.department}</div>
                    <div className="text-[10px] text-slate-500">2026 Batch</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-emerald-400 font-semibold">{r.loginTime}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{r.logoutTime}</td>
                  <td className="py-3.5 px-4 font-mono">
                    <div className="flex items-center gap-1.5 text-slate-200">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                      {r.verificationMethod}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold mt-0.5">Similarity: {r.confidenceScore}%</div>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    {r.status === 'Present' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> PRESENT
                      </span>
                    )}
                    {r.status === 'Late' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-amber-300 border border-amber-500/20">
                        <AlertCircle className="h-3 w-3" /> LATE
                      </span>
                    )}
                    {r.status === 'Absent' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-rose-400 border border-rose-500/20">
                        <UserX className="h-3 w-3" /> ABSENT
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Displaying {filteredRecords.length} records</span>
          <span>Automatic DeepFace Sync Interval: Every 60s</span>
        </div>
      </div>
    </div>
  );
};
