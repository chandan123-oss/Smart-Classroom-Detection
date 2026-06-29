import React, { useState } from 'react';
import { mockMLMetrics } from '../../data/mockData';
import { 
  Workflow, 
  Cpu, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Binary, 
  BarChart2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Terminal,
  Database,
  ArrowRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar, 
  Cell 
} from 'recharts';

export const AIPipelineView: React.FC = () => {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const currentModel = mockMLMetrics[selectedModelIndex] || mockMLMetrics[0];

  // Simulated ROC Curve data (False Positive Rate vs True Positive Rate)
  const rocCurveData = [
    { fpr: 0.00, tpr: 0.00 },
    { fpr: 0.02, tpr: 0.85 },
    { fpr: 0.05, tpr: 0.94 },
    { fpr: 0.10, tpr: 0.98 },
    { fpr: 0.20, tpr: 0.99 },
    { fpr: 1.00, tpr: 1.00 }
  ];

  // Simulated Confusion Matrix (Actual vs Predicted)
  const confusionMatrix = [
    { actual: 'Focused', predFocused: 842, predDistracted: 12, predSleeping: 2 },
    { actual: 'Distracted', predFocused: 18, predDistracted: 215, predSleeping: 6 },
    { actual: 'Sleeping', predFocused: 1, predDistracted: 4, predSleeping: 98 }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-purple-500/20 px-3 py-1 font-mono text-xs font-semibold text-purple-300 border border-purple-500/30">
              🧠 MULTI-MODAL COMPUTER VISION & ML ARCHITECTURE
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              AI & Machine Learning Production Pipeline
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-3xl mt-1">
              End-to-end sensor fusion orchestrating YOLOv11 bounding boxes, MediaPipe 68-point 3D head pose calculations, ArcFace biometric embedders, and XGBoost tabular forecasters.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-950 p-3 border border-slate-800 font-mono text-xs text-emerald-400 font-bold">
            <Zap className="h-4 w-4 animate-bounce text-amber-400" /> TENSORRT INT8 QUANTIZED
          </div>
        </div>
      </div>

      {/* Model Roster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockMLMetrics.map((m, idx) => {
          const isSel = selectedModelIndex === idx;
          return (
            <button
              key={m.modelName}
              onClick={() => setSelectedModelIndex(idx)}
              className={`rounded-2xl border p-5 text-left transition-all relative flex flex-col justify-between h-48 ${
                isSel 
                  ? 'bg-gradient-to-br from-blue-900/40 via-indigo-950/80 to-purple-900/40 border-indigo-500 shadow-xl shadow-indigo-500/20 ring-1 ring-indigo-400' 
                  : 'bg-slate-900/80 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-extrabold text-white tracking-tight">{m.modelName}</span>
                  <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${m.status.includes('Deployed') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                    {m.status.split(' ')[0]}
                  </span>
                </div>
                <p className="mt-2 font-sans text-xs text-slate-300 line-clamp-2">{m.task}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
                <span className="text-indigo-400">{m.framework}</span>
                <span className="text-emerald-400 font-bold">{m.accuracy}% Acc • {m.latencyMs}ms</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Model Deep Dive Stage */}
      <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/90 p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-800 gap-4">
          <div>
            <span className="font-mono text-[10px] text-indigo-400 uppercase">Selected Model Telemetry Inspection</span>
            <h2 className="font-sans text-xl font-extrabold text-white flex items-center gap-2 mt-0.5">
              <Cpu className="h-5 w-5 text-blue-400" /> {currentModel.modelName}
            </h2>
          </div>
          <div className="flex gap-2 font-mono text-xs">
            <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-slate-300">F1-Score: <b className="text-white">{currentModel.f1Score}%</b></span>
            <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-slate-300">Precision: <b className="text-white">{currentModel.precision}%</b></span>
          </div>
        </div>

        {/* 4 Core KPIs Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-mono text-[11px] text-slate-400">Validation Accuracy</span>
            <p className="font-mono text-2xl font-extrabold text-emerald-400 mt-1">{currentModel.accuracy}%</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-mono text-[11px] text-slate-400">Inference Latency</span>
            <p className="font-mono text-2xl font-extrabold text-blue-400 mt-1">{currentModel.latencyMs} ms</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-mono text-[11px] text-slate-400">Recall / Sensitivity</span>
            <p className="font-mono text-2xl font-extrabold text-purple-400 mt-1">{currentModel.recall}%</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="font-mono text-[11px] text-slate-400">FP-16/INT8 Edge Target</span>
            <p className="font-mono text-2xl font-extrabold text-amber-400 mt-1">Jetson Orin</p>
          </div>
        </div>

        {/* Charts Row: ROC Curve & Confusion Matrix */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ROC Curve Area */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <h3 className="font-sans text-sm font-bold text-white mb-1">Receiver Operating Characteristic (ROC) Curve</h3>
            <p className="font-mono text-[11px] text-slate-400 mb-4">Area Under Curve (AUC) = 0.994</p>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rocCurveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="fpr" type="number" domain={[0, 1]} stroke="#64748b" label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 10 }} />
                  <YAxis dataKey="tpr" type="number" domain={[0, 1]} stroke="#64748b" label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.5rem', color: '#fff', fontSize: '12px' }} />
                  <Line type="monotone" dataKey="tpr" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} name="True Positive Rate" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Confusion Matrix Table */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-sm font-bold text-white mb-1">Normalized Confusion Matrix</h3>
              <p className="font-mono text-[11px] text-slate-400 mb-4">Evaluation across 1,200 labeled classroom frame snippets</p>

              <div className="overflow-x-auto">
                <table className="w-full font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2 text-left">Actual ↓ \ Pred →</th>
                      <th className="py-2 text-center text-blue-400">Focused</th>
                      <th className="py-2 text-center text-amber-400">Distracted</th>
                      <th className="py-2 text-center text-rose-400">Sleeping</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-center">
                    {confusionMatrix.map((c) => (
                      <tr key={c.actual}>
                        <td className="py-2.5 text-left font-bold text-white">{c.actual}</td>
                        <td className={`py-2.5 ${c.actual === 'Focused' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400'}`}>{c.predFocused}</td>
                        <td className={`py-2.5 ${c.actual === 'Distracted' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400'}`}>{c.predDistracted}</td>
                        <td className={`py-2.5 ${c.actual === 'Sleeping' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-slate-400'}`}>{c.predSleeping}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Class Weight: Focal Loss (γ=2.0)</span>
              <span className="text-indigo-400">Precision-Recall: Balanced</span>
            </div>
          </div>
        </div>

        {/* Inference Architecture Flow Banner */}
        <div className="rounded-xl border border-indigo-500/20 bg-gradient-to-r from-slate-950 via-indigo-950/30 to-slate-950 p-4 font-mono text-xs text-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-indigo-400" />
            <span>Pipeline Execution Sequence:</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-blue-300">1. RTSP Frame Ingest</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-purple-300">2. YOLOv11 TensorRT</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-emerald-300">3. MediaPipe Mesh 68</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-amber-300">4. FastAPI SSE Broadcast</span>
          </div>
        </div>
      </div>
    </div>
  );
};
