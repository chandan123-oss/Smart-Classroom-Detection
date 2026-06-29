import React, { useState } from 'react';
import { mockStudents, mockTeachers } from '../../data/mockData';
import { 
  ShieldAlert, 
  UserPlus, 
  Trash2, 
  Camera, 
  Video, 
  Users, 
  Settings, 
  Lock, 
  CheckCircle2, 
  PlusCircle, 
  RefreshCw, 
  Sliders,
  Database,
  Building2,
  CalendarDays
} from 'lucide-react';
import { Student } from '../../types';

export const AdminView: React.FC = () => {
  const [studentsList, setStudentsList] = useState<Student[]>(mockStudents);
  const [activeAdminTab, setActiveAdminTab] = useState<'students' | 'teachers' | 'cameras' | 'roles'>('students');

  // New student form
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentRoll, setNewStudentRoll] = useState('');
  const [newStudentDept, setNewStudentDept] = useState('Computer Science');

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentRoll) return;

    const newStu: Student = {
      id: `STU-${1000 + studentsList.length + 1}`,
      name: newStudentName,
      rollNo: newStudentRoll,
      department: newStudentDept as Student['department'],
      semester: 6,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      status: 'Focused',
      avgAttention: 88,
      eyeContactPercent: 90,
      talkingCount: 0,
      yawningCount: 0,
      handRaiseCount: 1,
      sleepingCount: 0,
      phoneUsageCount: 0,
      attendancePercent: 100,
      currentEmotion: 'Neutral',
      seatRow: 5,
      seatCol: 6,
      participationScore: 85,
      predictions: {
        examPredictedScore: 91,
        topperProbability: 0.85,
        dropoutRisk: 'Low',
        weakAreas: []
      }
    };

    setStudentsList([newStu, ...studentsList]);
    setNewStudentName('');
    setNewStudentRoll('');
    alert(`Biometric dossier created & ArcFace embedding synchronized for ${newStudentName}.`);
  };

  const handleDeleteStudent = (id: string) => {
    setStudentsList(studentsList.filter(s => s.id !== id));
    alert(`Student record ${id} purged from biometric access registry.`);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Banner */}
      <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-rose-500/20 px-3 py-1 font-mono text-xs font-semibold text-rose-300 border border-rose-500/30">
              🔐 ROOT EXECUTIVE GOVERNANCE CONSOLE
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              Administrative Control & Device Management
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-3xl mt-1">
              Provisioning student vector profiles, calibrating RTSP network cameras, managing instructor timetables, and enforcing role-based access control (RBAC).
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-2 shadow font-sans text-xs font-bold">
        {[
          { id: 'students', label: `Student Roster (${studentsList.length})`, icon: Users },
          { id: 'teachers', label: `Faculty & Subjects (${mockTeachers.length})`, icon: Building2 },
          { id: 'cameras', label: 'RTSP CCTV Calibration (6 CAM)', icon: Camera },
          { id: 'roles', label: 'RBAC Security Policies', icon: Lock }
        ].map((t) => {
          const Icon = t.icon;
          const isSel = activeAdminTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveAdminTab(t.id as any)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all ${
                isSel 
                  ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white shadow-md' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Admin Content Stage */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
        {activeAdminTab === 'students' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Add Student Form */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-4">
              <h3 className="font-sans font-bold text-white text-base flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-rose-400" /> Enroll Biometric Student Profile
              </h3>
              <p className="font-mono text-xs text-slate-400">Ingests ArcFace 512-D identity vector directly into edge DBMS.</p>

              <form onSubmit={handleAddStudent} className="space-y-4 pt-2">
                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Liam Vance"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className="w-full h-10 rounded-xl border border-slate-800 bg-slate-900 px-3 font-sans text-xs text-white focus:border-rose-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1">Roll / Registry ID</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 23CS099"
                    value={newStudentRoll}
                    onChange={(e) => setNewStudentRoll(e.target.value)}
                    className="w-full h-10 rounded-xl border border-slate-800 bg-slate-900 px-3 font-mono text-xs text-white focus:border-rose-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1">Department</label>
                  <select 
                    value={newStudentDept}
                    onChange={(e) => setNewStudentDept(e.target.value)}
                    className="w-full h-10 rounded-xl border border-slate-800 bg-slate-900 px-3 font-sans text-xs text-white focus:border-rose-500 focus:outline-none"
                  >
                    <option value="Computer Science">Computer Science & AI</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-sans text-xs font-bold shadow-lg hover:opacity-95 transition-opacity mt-4"
                >
                  Synchronize Biometric Dossier
                </button>
              </form>
            </div>

            {/* Right: Roster Table */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex flex-col justify-between">
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-slate-300">Active Classroom Registry</span>
                <span className="font-mono text-[10px] text-emerald-400">● 100% Vector DB Synced</span>
              </div>

              <div className="overflow-x-auto max-h-[420px]">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 font-mono text-[11px] text-slate-400 bg-slate-950 sticky top-0">
                      <th className="p-3">Student Profile</th>
                      <th className="p-3">Registry ID</th>
                      <th className="p-3">Department</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {studentsList.map((st) => (
                      <tr key={st.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="p-3 flex items-center gap-3">
                          <img src={st.avatar} alt={st.name} className="h-8 w-8 rounded-lg object-cover border border-slate-700" />
                          <span className="font-bold text-white">{st.name}</span>
                        </td>
                        <td className="p-3 font-mono text-indigo-400">{st.rollNo}</td>
                        <td className="p-3 text-slate-300">{st.department}</td>
                        <td className="p-3 text-right">
                          <button 
                            onClick={() => handleDeleteStudent(st.id)}
                            className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors border border-rose-500/20"
                            title="Delete Record"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeAdminTab === 'cameras' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-sans font-bold text-white text-base">Classroom Network IP Cameras (RTSP Streams)</h3>
                <p className="font-mono text-xs text-slate-400">Managing H.264/H.265 hardware decoders connected to NVIDIA DeepStream.</p>
              </div>
              <button 
                onClick={() => alert("Auto-scanning subnet 192.168.1.0/24 for ONVIF compliant cameras.")}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-sans text-xs font-bold hover:bg-blue-500"
              >
                + Auto-Scan Subnet CAMs
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
              {[
                { name: "CAM-01 (Front Blackboard Horizon)", ip: "rtsp://192.168.1.101:554/stream1", status: "ONLINE (30 FPS)" },
                { name: "CAM-02 (Center Seating Row)", ip: "rtsp://192.168.1.102:554/stream1", status: "ONLINE (30 FPS)" },
                { name: "CAM-03 (Left Corridor Window)", ip: "rtsp://192.168.1.103:554/stream1", status: "ONLINE (30 FPS)" },
                { name: "CAM-04 (Right Door Entry Gate)", ip: "rtsp://192.168.1.104:554/stream1", status: "ONLINE (30 FPS)" },
                { name: "CAM-05 (Back Row Blindspot)", ip: "rtsp://192.168.1.105:554/stream1", status: "ONLINE (30 FPS)" },
                { name: "CAM-06 (Instructor Podium Stage)", ip: "rtsp://192.168.1.106:554/stream1", status: "ONLINE (30 FPS)" }
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-800 bg-slate-950 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white truncate max-w-[180px]">{c.name}</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      {c.status.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">{c.ip}</div>
                  <div className="pt-2 flex justify-between border-t border-slate-900 text-[11px] text-indigo-400">
                    <span>Codec: H.265</span>
                    <span>Bitrate: 4.2 Mbps</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeAdminTab === 'teachers' || activeAdminTab === 'roles') && (
          <div className="text-center py-16 space-y-3 font-mono text-xs text-slate-400">
            <ShieldAlert className="h-12 w-12 text-rose-400 mx-auto" />
            <p className="font-sans text-sm font-bold text-white">RBAC Governance & Timetable Synchronization Active</p>
            <p className="max-w-md mx-auto">
              Current user session operates under Superuser permissions. Faculty timetable modifications take immediate effect on real-time stream metadata tagging.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
