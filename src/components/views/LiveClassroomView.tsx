import React, { useState, useEffect } from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  Video, 
  Camera, 
  Eye, 
  RefreshCw, 
  Sliders, 
  AlertCircle, 
  PhoneCall, 
  MessageSquare, 
  Moon, 
  Smile, 
  CheckCircle2, 
  HelpCircle,
  Maximize2,
  ShieldAlert,
  Activity
} from 'lucide-react';
import { Student } from '../../types';

export const LiveClassroomView: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState('CAM-ROOM-302 (AI Stream)');
  const [showBBoxes, setShowBBoxes] = useState(true);
  const [showMesh, setShowMesh] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'Focused' | 'Distracted' | 'Sleeping' | 'Asking Question'>('ALL');
  const [simulatedFPS, setSimulatedFPS] = useState(30);

  // Filter students based on status
  const filteredStudents = mockStudents.filter(stu => {
    if (filterStatus === 'ALL') return true;
    return stu.status === filterStatus;
  });

  const getStatusBadge = (status: Student['status']) => {
    switch (status) {
      case 'Focused':
        return <span className="flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/30"><CheckCircle2 className="h-3 w-3"/> FOCUSED</span>;
      case 'Distracted':
        return <span className="flex items-center gap-1 rounded bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300 border border-amber-500/30"><AlertCircle className="h-3 w-3"/> DISTRACTED</span>;
      case 'Sleeping':
        return <span className="flex items-center gap-1 rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-300 border border-rose-500/30"><Moon className="h-3 w-3"/> SLEEPING</span>;
      case 'Asking Question':
        return <span className="flex items-center gap-1 rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-300 border border-blue-500/30"><HelpCircle className="h-3 w-3"/> QUESTION</span>;
      default:
        return <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">ABSENT</span>;
    }
  };

  const getStatusColorBorder = (status: Student['status']) => {
    switch (status) {
      case 'Focused': return 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
      case 'Distracted': return 'border-amber-500 bg-amber-500/10 text-amber-300';
      case 'Sleeping': return 'border-rose-500 bg-rose-500/10 text-rose-300';
      case 'Asking Question': return 'border-blue-500 bg-blue-500/10 text-blue-300';
      default: return 'border-slate-700 bg-slate-900 text-slate-400';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
            <Video className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-sans text-xl font-bold text-white">Live Computer Vision Ingestion Feed</h1>
            <p className="font-mono text-xs text-slate-400">RTSP Stream decoding • YOLOv11 Face & Object Localization • MediaPipe Mesh 68</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
          <select 
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-indigo-500 focus:outline-none font-mono text-xs"
          >
            <option>CAM-ROOM-302 (AI Stream)</option>
            <option>CAM-ROOM-104 (Lab North)</option>
            <option>CAM-AUDITORIUM-Main</option>
          </select>

          <button 
            onClick={() => setShowBBoxes(!showBBoxes)}
            className={`rounded-xl px-3 py-2 font-medium transition-all border ${showBBoxes ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
          >
            Bounding Boxes: {showBBoxes ? 'ON' : 'OFF'}
          </button>

          <button 
            onClick={() => setShowMesh(!showMesh)}
            className={`rounded-xl px-3 py-2 font-medium transition-all border ${showMesh ? 'bg-purple-600 text-white border-purple-400 shadow-sm' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
          >
            Face Mesh 68: {showMesh ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Main Video Stage & Real-time Detections Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Live Video Canvas (Span 2) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-slate-950 shadow-2xl group">
            {/* Background Stream Image */}
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&auto=format&fit=crop&q=80" 
              alt="Live stream" 
              className="h-full w-full object-cover filter brightness-90 contrast-105"
            />
            
            {/* Grid Overlay to simulate CV Matrix */}
            {showMesh && (
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b15_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
            )}

            {/* Simulated Bounding Boxes Overlay */}
            {showBBoxes && (
              <>
                {/* Student 1: Aarav (Focused - Green) */}
                <div className="absolute left-[15%] top-[20%] h-[35%] w-[18%] border-2 border-emerald-400 rounded-lg bg-emerald-500/10 transition-all p-1.5 flex flex-col justify-between shadow-lg shadow-emerald-500/20">
                  <div className="flex justify-between items-center bg-slate-950/90 px-1.5 py-0.5 rounded backdrop-blur">
                    <span className="font-mono text-[10px] font-bold text-emerald-400">Aarav (STU-1001)</span>
                    <span className="font-mono text-[9px] text-white">92%</span>
                  </div>
                  {showMesh && <div className="self-center h-10 w-10 border border-emerald-400/40 rounded-full animate-ping opacity-30" />}
                  <div className="flex gap-1 text-[8px] font-mono">
                    <span className="bg-emerald-500 text-slate-950 font-bold px-1 rounded">EAR: 0.31</span>
                    <span className="bg-blue-500 text-white font-bold px-1 rounded">Happy</span>
                  </div>
                </div>

                {/* Student 2: Sophia (Focused - Green) */}
                <div className="absolute left-[40%] top-[22%] h-[34%] w-[17%] border-2 border-emerald-400 rounded-lg bg-emerald-500/10 transition-all p-1.5 flex flex-col justify-between shadow-lg shadow-emerald-500/20">
                  <div className="flex justify-between items-center bg-slate-950/90 px-1.5 py-0.5 rounded backdrop-blur">
                    <span className="font-mono text-[10px] font-bold text-emerald-400">Sophia</span>
                    <span className="font-mono text-[9px] text-white">89%</span>
                  </div>
                  <div className="flex gap-1 text-[8px] font-mono">
                    <span className="bg-emerald-500 text-slate-950 font-bold px-1 rounded">Gaze: OK</span>
                  </div>
                </div>

                {/* Student 3: Rohan (Distracted/Phone - Yellow) */}
                <div className="absolute left-[65%] top-[18%] h-[38%] w-[20%] border-2 border-amber-400 rounded-lg bg-amber-500/10 transition-all p-1.5 flex flex-col justify-between shadow-lg shadow-amber-500/20 animate-pulse">
                  <div className="flex justify-between items-center bg-slate-950/90 px-1.5 py-0.5 rounded backdrop-blur">
                    <span className="font-mono text-[10px] font-bold text-amber-400">Rohan (STU-1003)</span>
                    <span className="font-mono text-[9px] text-amber-300">62%</span>
                  </div>
                  {/* Object Detection box for Cell Phone inside Rohan bbox */}
                  <div className="absolute bottom-10 right-2 border border-rose-500 bg-rose-500/20 px-1 font-mono text-[8px] text-rose-300 font-bold rounded">
                    [YOLO: Cell Phone 0.94]
                  </div>
                  <div className="flex gap-1 text-[8px] font-mono">
                    <span className="bg-amber-500 text-slate-950 font-bold px-1 rounded">Pitch: -28°</span>
                    <span className="bg-rose-500 text-white font-bold px-1 rounded">Bored</span>
                  </div>
                </div>

                {/* Student 4: Kabir (Sleeping - Red) */}
                <div className="absolute left-[80%] top-[55%] h-[32%] w-[16%] border-2 border-rose-500 rounded-lg bg-rose-500/15 transition-all p-1.5 flex flex-col justify-between shadow-lg shadow-rose-500/30">
                  <div className="flex justify-between items-center bg-rose-950/90 px-1.5 py-0.5 rounded backdrop-blur border border-rose-500/40">
                    <span className="font-mono text-[10px] font-bold text-rose-400">Kabir (SLEEPING)</span>
                    <span className="font-mono text-[9px] text-rose-200">41%</span>
                  </div>
                  <div className="flex gap-1 text-[8px] font-mono">
                    <span className="bg-rose-600 text-white font-bold px-1 rounded animate-bounce">EAR: 0.14</span>
                  </div>
                </div>

                {/* Student 5: Ananya (Asking Question - Blue) */}
                <div className="absolute left-[30%] top-[60%] h-[32%] w-[18%] border-2 border-blue-400 rounded-lg bg-blue-500/10 transition-all p-1.5 flex flex-col justify-between shadow-lg shadow-blue-500/20">
                  <div className="flex justify-between items-center bg-blue-950/90 px-1.5 py-0.5 rounded backdrop-blur border border-blue-500/40">
                    <span className="font-mono text-[10px] font-bold text-blue-300">Ananya (HAND UP)</span>
                    <span className="font-mono text-[9px] text-white">95%</span>
                  </div>
                  <div className="flex gap-1 text-[8px] font-mono">
                    <span className="bg-blue-500 text-white font-bold px-1 rounded">Pose: Hand Raised</span>
                  </div>
                </div>
              </>
            )}

            {/* Bottom HUD */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" /> STREAMING 1080p
                </span>
                <span className="text-slate-400">Latency: <span className="text-white">14.2ms</span></span>
                <span className="text-slate-400">Model: <span className="text-indigo-400">YOLOv11s-attn</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-300 border border-slate-700">
                  Faces Detected: 12
                </span>
                <button className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white">
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Gaze Stability</span>
              <p className="font-mono text-lg font-bold text-emerald-400">88.5% CENTERED</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Avg Blink Rate</span>
              <p className="font-mono text-lg font-bold text-blue-400">18.2 / min</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Head Pose Yaw</span>
              <p className="font-mono text-lg font-bold text-purple-400">± 4.2° Normal</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase">Active Violations</span>
              <p className="font-mono text-lg font-bold text-rose-400">3 Flags (Phone/Sleep)</p>
            </div>
          </div>
        </div>

        {/* Right Student Telemetry Stream List */}
        <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-5 shadow-xl flex flex-col h-[600px]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="font-sans font-bold text-white flex items-center gap-2">
                <Activity className="h-4 w-4 text-indigo-400" /> Live Frame Roster
              </h2>
              <p className="font-mono text-[10px] text-slate-400">Color-coded engagement status</p>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex gap-1.5 py-3 overflow-x-auto border-b border-slate-800/80 font-mono text-[10px]">
            {(['ALL', 'Focused', 'Distracted', 'Sleeping', 'Asking Question'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`rounded px-2.5 py-1 whitespace-nowrap transition-colors ${
                  filterStatus === st 
                    ? 'bg-indigo-600 text-white font-bold shadow-xs' 
                    : 'bg-slate-950 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Roster Scroll Area */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pt-3 pr-1">
            {filteredStudents.map((stu) => (
              <div 
                key={stu.id}
                className={`rounded-xl border p-3 transition-all flex items-center justify-between ${getStatusColorBorder(stu.status)}`}
              >
                <div className="flex items-center gap-3">
                  <img src={stu.avatar} alt={stu.name} className="h-9 w-9 rounded-lg object-cover border border-slate-700 shadow-sm" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white">{stu.name}</h4>
                    <p className="font-mono text-[10px] text-slate-400">{stu.rollNo} • Row {stu.seatRow}</p>
                    <div className="flex gap-2 mt-1 font-mono text-[9px] text-slate-300">
                      <span>Attn: <b>{stu.avgAttention}%</b></span>
                      <span>•</span>
                      <span>EAR: <b>{stu.status === 'Sleeping' ? '0.14' : '0.31'}</b></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  {getStatusBadge(stu.status)}
                  <span className="font-mono text-[9px] text-slate-400">Emotion: {stu.currentEmotion}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-indigo-400"><RefreshCw className="h-3 w-3 animate-spin"/> Polling SSE</span>
            <span>Total Shown: {filteredStudents.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
