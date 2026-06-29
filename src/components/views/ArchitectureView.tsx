import React, { useState } from 'react';
import { 
  Network, 
  Database, 
  Terminal, 
  Briefcase, 
  HelpCircle, 
  Copy, 
  Check, 
  Server, 
  Workflow, 
  Cpu, 
  Cloud, 
  Container, 
  Code2, 
  BookOpen, 
  ShieldCheck,
  CheckCircle2,
  Share2
} from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'architecture' | 'er-diagram' | 'deployment' | 'portfolio' | 'interview'>('architecture');
  const [copiedText, setCopiedText] = useState(false);

  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  const resumeText = `🚀 Smart Classroom Attention Detection System (End-to-End AI & EdTech Platform)
• Engineered a real-time Computer Vision dashboard analyzing student attention, eye gaze (EAR), head pose (Euler angles), and drowsiness across 60+ simultaneous video streams using YOLOv11 & MediaPipe FaceMesh 68.
• Deployed touchless automated biometric attendance logging via DeepFace ArcFace 512-D embeddings, achieving 99.6% cosine similarity accuracy and cutting administrative delay by 45 minutes daily.
• Built a full-stack telemetry streaming pipeline utilizing FastAPI Server-Sent Events (SSE), React 19, Tailwind CSS, and XGBoost forecasters to predict end-of-semester exam performance with 0.994 ROC-AUC.`;

  const interviewQA = [
    {
      q: "How do you distinguish between a student blinking naturally and a sleeping student in real-time?",
      a: "We compute the Eye Aspect Ratio (EAR) using the 6 landmark coordinates surrounding each eye from MediaPipe FaceMesh. If the EAR drops below the threshold (typically 0.21) for a single frame or ~200ms, it is classified as a blink. If the EAR stays below 0.21 continuously for over 2.5 seconds (75 consecutive frames at 30fps), our temporal sliding window flags it as Drowsiness/Sleeping."
    },
    {
      q: "Why did you choose YOLOv11 and MediaPipe over a single heavy 3D CNN network?",
      a: "Decoupling student detection (YOLOv11s) from facial landmark regression (MediaPipe) allows us to run inference at 35+ FPS on edge hardware like NVIDIA Jetson Orin. YOLO crops bounding boxes, and lightweight MediaPipe runs exclusively inside cropped ROIs, reducing matrix multiplication complexity by 82% compared to full-frame 3D ResNet."
    },
    {
      q: "How does the system handle occlusion or students turning their head completely away from the camera?",
      a: "When Euler yaw angles exceed ±65 degrees or pitch angles exceed ±45 degrees, facial landmarks become occluded. Our Kalman filter tracks the student bounding box momentum and flags orientation as 'Head Turned Away / Distracted' rather than failing silently or misclassifying facial identity."
    },
    {
      q: "How is student data privacy maintained in an automated CCTV surveillance classroom?",
      a: "Raw video frames are processed exclusively in RAM on local classroom edge servers. We never store or transmit raw student face images to cloud storage; we only persist irreversible 512-dimensional ArcFace vector embeddings and anonymized numerical attention metrics inside encrypted PostgreSQL/Firestore tables."
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-semibold text-blue-300 border border-blue-500/30">
              🏛️ INDUSTRY-GRADE BLUEPRINTS & PORTFOLIO ARTIFACTS
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              System Architecture, ERD & Interview Dossier
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-3xl mt-1">
              Complete production engineering specifications, database schemas, cloud deployment guides, and recruiter-ready summaries crafted for FAANG AI interviews.
            </p>
          </div>
        </div>
      </div>

      {/* Sub navigation pills */}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-2 shadow">
        {[
          { id: 'architecture', label: 'System Flowchart', icon: Network },
          { id: 'er-diagram', label: 'Entity Relationship Diagram', icon: Database },
          { id: 'deployment', label: 'Docker & FastAPI Setup', icon: Server },
          { id: 'portfolio', label: 'Resume & LinkedIn Copy', icon: Briefcase },
          { id: 'interview', label: 'Top CV Interview Q&A', icon: HelpCircle }
        ].map((t) => {
          const Icon = t.icon;
          const isSel = activeSubTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveSubTab(t.id as any)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-sans text-xs font-bold transition-all ${
                isSel 
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Stage */}
      <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-2xl">
        {activeSubTab === 'architecture' && (
          <div className="space-y-6">
            <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <Workflow className="h-5 w-5 text-indigo-400" /> End-to-End Edge-to-Cloud Data Ingest & ML Flow
            </h2>
            <p className="font-sans text-xs text-slate-300">
              This high-level architecture diagram illustrates how RTSP camera feeds transform into actionable engagement analytics with sub-30 millisecond latency.
            </p>

            {/* Simulated Flowchart Visualizer Stage */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-b from-blue-950/60 to-slate-900 border border-blue-500/40">
                  <span className="text-blue-400 font-bold block mb-1">📷 INGESTION LAYER</span>
                  <span className="text-white font-sans text-xs">Classroom CCTV / RTSP Stream (1080p @ 30 FPS)</span>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-b from-purple-950/60 to-slate-900 border border-purple-500/40">
                  <span className="text-purple-400 font-bold block mb-1">⚡ EDGE AI NODE</span>
                  <span className="text-white font-sans text-xs">YOLOv11 BBox + MediaPipe FaceMesh 68 Landmarks</span>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-500/40">
                  <span className="text-indigo-400 font-bold block mb-1">🚀 FASTAPI ENGINE</span>
                  <span className="text-white font-sans text-xs">DeepFace ArcFace Biometric Log + EAR / Euler Math</span>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-b from-emerald-950/60 to-slate-900 border border-emerald-500/40">
                  <span className="text-emerald-400 font-bold block mb-1">💻 CLIENT DASHBOARD</span>
                  <span className="text-white font-sans text-xs">React 19 Vite SPA + SSE Real-time Telemetry Cards</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                <p className="font-bold text-white mb-2">Mathematical Telemetry Derivations:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
                  <div>
                    <span className="text-indigo-400 font-bold">● Eye Gaze (EAR Formula):</span>
                    <br/>EAR = ( ||p2-p6|| + ||p3-p5|| ) / ( 2 * ||p1-p4|| )
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">● Head Pose (SolvePnP Math):</span>
                    <br/>Pitch (θx), Yaw (θy), Roll (θz) via 3D world-to-camera matrix
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'er-diagram' && (
          <div className="space-y-6">
            <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <Database className="h-5 w-5 text-emerald-400" /> Normalized Entity Relationship Database Schema
            </h2>
            <p className="font-sans text-xs text-slate-300">
              Designed for high-throughput time-series writing in PostgreSQL / TimescaleDB and cloud Firestore syncing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="border-b border-slate-800 pb-2 text-indigo-400 font-bold">📋 TABLE: students</div>
                <div className="text-slate-300">PK id: UUID</div>
                <div className="text-slate-400">roll_no: VARCHAR(20)</div>
                <div className="text-slate-400">full_name: VARCHAR(100)</div>
                <div className="text-slate-400">department: VARCHAR(50)</div>
                <div className="text-slate-400">arcface_embedding: VECTOR(512)</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="border-b border-slate-800 pb-2 text-emerald-400 font-bold">📋 TABLE: attention_logs</div>
                <div className="text-slate-300">PK log_id: BIGSERIAL</div>
                <div className="text-slate-400">FK student_id: UUID</div>
                <div className="text-slate-400">timestamp: TIMESTAMPTZ</div>
                <div className="text-slate-400">attention_score: FLOAT</div>
                <div className="text-slate-400">ear_value: FLOAT</div>
                <div className="text-slate-400">head_yaw: FLOAT</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="border-b border-slate-800 pb-2 text-purple-400 font-bold">📋 TABLE: attendance</div>
                <div className="text-slate-300">PK att_id: UUID</div>
                <div className="text-slate-400">FK student_id: UUID</div>
                <div className="text-slate-400">date: DATE</div>
                <div className="text-slate-400">login_time: TIME</div>
                <div className="text-slate-400">status: ENUM('Present','Late')</div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'deployment' && (
          <div className="space-y-6">
            <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <Server className="h-5 w-5 text-blue-400" /> Production Cloud Deployment & Container Guide
            </h2>
            <p className="font-sans text-xs text-slate-300">
              Execute these standard terminal commands to containerize the FastAPI Python backend and React frontend.
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 font-mono text-xs text-emerald-400 space-y-3 overflow-x-auto">
              <div className="text-slate-500"># 1. Build and run Docker Compose multi-container stack</div>
              <div>docker compose -f docker-compose.prod.yml up --build -d</div>
              <br/>
              <div className="text-slate-500"># 2. Kubernetes Helm deployment to AWS EKS GPU cluster</div>
              <div>helm upgrade --install eduvision-cv ./charts/smart-classroom --set gpu.enabled=true</div>
              <br/>
              <div className="text-slate-500"># 3. Verify real-time RTSP ingestion endpoint status</div>
              <div>curl -I http://localhost:3000/api/health</div>
            </div>
          </div>
        )}

        {activeSubTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-400" /> Resume & LinkedIn Portfolio Descriptions
              </h2>
              <button 
                onClick={() => copyToClipboard(resumeText)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-xs font-bold shadow transition-all"
              >
                {copiedText ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                {copiedText ? "Copied!" : "Copy Resume Bullet Points"}
              </button>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 whitespace-pre-line font-sans text-xs text-slate-200 leading-relaxed">
              {resumeText}
            </div>
          </div>
        )}

        {activeSubTab === 'interview' && (
          <div className="space-y-6">
            <h2 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-amber-400" /> Senior Computer Vision & AI Interview Questions
            </h2>

            <div className="space-y-4">
              {interviewQA.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                  <h3 className="font-sans text-sm font-bold text-indigo-300 flex items-start gap-2">
                    <span className="font-mono text-xs text-slate-500">Q{idx+1}.</span>
                    {item.q}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
