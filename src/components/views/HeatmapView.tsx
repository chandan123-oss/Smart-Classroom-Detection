import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  Grid, 
  Users, 
  AlertTriangle, 
  Eye, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw,
  Info
} from 'lucide-react';
import { Student } from '../../types';

export const HeatmapView: React.FC = () => {
  const [selectedSeatStudent, setSelectedSeatStudent] = useState<Student | null>(mockStudents[0]);
  const [viewMode, setViewMode] = useState<'attention' | 'phone' | 'sleeping'>('attention');

  // Let's create a 5 row x 6 col seating arrangement (30 seats)
  const rows = [1, 2, 3, 4, 5];
  const cols = [1, 2, 3, 4, 5, 6];

  const getStudentAtSeat = (row: number, col: number): Student | undefined => {
    return mockStudents.find(s => s.seatRow === row && s.seatCol === col);
  };

  const getSeatColor = (stu?: Student) => {
    if (!stu) return 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50';

    if (viewMode === 'attention') {
      if (stu.avgAttention >= 85) return 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/10 hover:bg-emerald-500/30';
      if (stu.avgAttention >= 70) return 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10 hover:bg-amber-500/30';
      return 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-md shadow-rose-500/10 hover:bg-rose-500/30 animate-pulse';
    } else if (viewMode === 'phone') {
      if (stu.phoneUsageCount >= 10) return 'bg-rose-500/25 border-rose-500 text-rose-300 shadow-md shadow-rose-500/10';
      if (stu.phoneUsageCount >= 3) return 'bg-amber-500/25 border-amber-500 text-amber-300';
      return 'bg-slate-900/80 border-slate-700 text-slate-400';
    } else {
      // sleeping mode
      if (stu.sleepingCount >= 5) return 'bg-rose-600/30 border-rose-500 text-rose-200 animate-bounce';
      if (stu.sleepingCount >= 1) return 'bg-amber-500/25 border-amber-500 text-amber-300';
      return 'bg-slate-900/80 border-slate-700 text-slate-400';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-blue-900/40 via-indigo-950/60 to-purple-900/40 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-semibold text-blue-300 border border-blue-500/30">
              📍 SPATIAL CLASSROOM COORDINATES
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              Classroom Seating Engagement Heatmap
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-2xl mt-1">
              Top-down 2D spatial representation of Room 302 seating rows. Evaluates correlation between distance from instructor blackboard and distraction frequency.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 font-mono text-xs">
            {(['attention', 'phone', 'sleeping'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                className={`rounded-lg px-3 py-2 capitalize font-semibold transition-all ${
                  viewMode === m 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m} Heatmap
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Seating Grid Stage (Span 2) */}
        <div className="lg:col-span-2 rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between">
          <div>
            {/* Instructor Podium Representation */}
            <div className="mb-8 flex flex-col items-center justify-center">
              <div className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-center text-white font-sans text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-indigo-500/20 border border-indigo-400">
                👨‍🏫 Instructor Podium & Smart Interactive Board
              </div>
              <span className="mt-2 font-mono text-[10px] text-slate-500">↑ Front of Room 302 (RTSP CAM Horizon) ↑</span>
            </div>

            {/* Matrix Grid */}
            <div className="space-y-4 py-2">
              {rows.map((row) => (
                <div key={row} className="flex items-center gap-3">
                  <span className="w-12 text-right font-mono text-xs font-bold text-slate-500">Row {row}</span>
                  <div className="grid grid-cols-6 gap-3 flex-1">
                    {cols.map((col) => {
                      const stu = getStudentAtSeat(row, col);
                      const isSel = selectedSeatStudent?.id === stu?.id;
                      return (
                        <button
                          key={`${row}-${col}`}
                          onClick={() => stu && setSelectedSeatStudent(stu)}
                          disabled={!stu}
                          className={`relative flex flex-col items-center justify-center rounded-xl p-3 border-2 transition-all transform hover:-translate-y-0.5 min-h-[75px] ${getSeatColor(stu)} ${isSel ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-105 z-10' : ''}`}
                        >
                          <span className="absolute top-1 left-1.5 font-mono text-[9px] opacity-70">
                            {row}-{col}
                          </span>
                          
                          {stu ? (
                            <>
                              <img src={stu.avatar} alt={stu.name} className="h-8 w-8 rounded-full object-cover border border-white/40 shadow-xs mt-1" />
                              <span className="font-sans text-[10px] font-bold truncate w-full text-center mt-1 text-white">
                                {stu.name.split(' ')[0]}
                              </span>
                              <span className="font-mono text-[9px] font-extrabold mt-0.5">
                                {viewMode === 'attention' ? `${stu.avgAttention}%` : viewMode === 'phone' ? `${stu.phoneUsageCount}📱` : `${stu.sleepingCount}💤`}
                              </span>
                            </>
                          ) : (
                            <span className="font-mono text-[10px] text-slate-600">Empty</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-500 border border-emerald-400"></span> High Attention (&gt;85%)</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amber-500 border border-amber-400"></span> Medium (70-84%)</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-rose-500 border border-rose-400"></span> Low (&lt;70% Alert)</span>
            </div>
            <span className="text-indigo-400 flex items-center gap-1">
              <Info className="h-3.5 w-3.5"/> Click any student seat for telemetry dossier
            </span>
          </div>
        </div>

        {/* Right Selected Seat Profile Inspection Panel */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between">
          {selectedSeatStudent ? (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-mono text-xs font-bold text-indigo-400">
                  SEAT COORDINATE: ROW {selectedSeatStudent.seatRow}, COL {selectedSeatStudent.seatCol}
                </span>
                <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${selectedSeatStudent.avgAttention >= 85 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                  {selectedSeatStudent.status.toUpperCase()}
                </span>
              </div>

              <div className="py-6 text-center">
                <img 
                  src={selectedSeatStudent.avatar} 
                  alt={selectedSeatStudent.name} 
                  className="h-24 w-24 rounded-2xl mx-auto object-cover border-2 border-indigo-500 shadow-xl" 
                />
                <h2 className="mt-3 font-sans text-xl font-bold text-white">{selectedSeatStudent.name}</h2>
                <p className="font-mono text-xs text-indigo-300">{selectedSeatStudent.id} • {selectedSeatStudent.rollNo}</p>
                <p className="font-sans text-xs text-slate-400 mt-1">{selectedSeatStudent.department}</p>
              </div>

              <div className="space-y-3 font-mono text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Avg Attention Ratio:</span>
                  <span className="font-bold text-white text-sm">{selectedSeatStudent.avgAttention}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Eye Gaze Alignment:</span>
                  <span className="font-bold text-emerald-400">{selectedSeatStudent.eyeContactPercent}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Detected Phone Usage:</span>
                  <span className="font-bold text-rose-400">{selectedSeatStudent.phoneUsageCount} flags</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Drowsiness / Sleeping:</span>
                  <span className="font-bold text-amber-400">{selectedSeatStudent.sleepingCount} alerts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Current Emotion:</span>
                  <span className="font-bold text-blue-400">{selectedSeatStudent.currentEmotion}</span>
                </div>
              </div>

              {/* Spatial AI Commentary */}
              <div className="mt-5 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                <span className="flex items-center gap-1.5 font-sans text-xs font-bold text-indigo-300">
                  <Sparkles className="h-4 w-4 text-amber-400" /> Spatial AI Insight:
                </span>
                <p className="mt-1.5 font-sans text-xs text-slate-300 leading-relaxed">
                  {selectedSeatStudent.seatRow >= 4 
                    ? "⚠️ Back-row acoustic isolation detected. Student experiences 28% higher visual distraction from window corridor glare. Recommend moving to Row 2." 
                    : "✅ Front-row proximity maintains strong pedagogical line-of-sight. High Socratic responsiveness."}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 text-slate-500 font-mono text-xs">
              Select a seat to inspect telemetry.
            </div>
          )}

          <button 
            onClick={() => alert(`Seat reallocation dispatch sent for ${selectedSeatStudent?.name}.`)}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-xs font-bold hover:opacity-95 transition-opacity shadow-lg shadow-indigo-500/25"
          >
            Dispatch Seat Reallocation Notice
          </button>
        </div>
      </div>
    </div>
  );
};
