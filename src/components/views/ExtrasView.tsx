import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Trophy, 
  Medal, 
  Award, 
  Flame, 
  Coins, 
  Crown, 
  Mic, 
  Volume2, 
  Brain,
  Zap,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExtrasView: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am EduBot 🤖, your AI pedagogical assistant powered by Gemini 2.5. Ask me how to improve classroom concentration or inspect student attention anomalies!' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Leaderboard sorted by attention
  const sortedLeaderboard = [...mockStudents].sort((a, b) => b.avgAttention - a.avgAttention);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const usrMsg = { sender: 'user', text: inputText };
    setMessages(prev => [...prev, usrMsg]);
    const q = inputText.toLowerCase();
    setInputText('');

    setTimeout(() => {
      let botAnswer = "Based on our computer vision telemetry logs, maintaining a straight eye gaze and taking 5-minute Pomodoro breaks every 30 minutes boosts attention ratios by over 24%.";
      if (q.includes('sleep') || q.includes('drowsy')) {
        botAnswer = "Drowsiness alerts typically spike around 1:30 PM due to post-lunch metabolic fatigue. We recommend instructors introduce 3-minute interactive quiz polls when EAR drops below 0.22.";
      } else if (q.includes('top') || q.includes('rank') || q.includes('best')) {
        botAnswer = `Our reigning attention champion is ${sortedLeaderboard[0].name} with an extraordinary 95% mean concentration index! 🏆`;
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
    }, 800);
  };

  const triggerVoiceSim = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setInputText("Who has the highest engagement score today?");
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-amber-500/20 px-3 py-1 font-mono text-xs font-semibold text-amber-300 border border-amber-500/30">
              🎮 SOCRATIC GAMIFICATION & GEMINI 2.5 CHATBOT
            </span>
            <h1 className="mt-2 font-sans text-2xl font-extrabold text-white tracking-tight">
              AI Study Assistant & Student Hall of Fame
            </h1>
            <p className="font-sans text-sm text-slate-300 max-w-3xl mt-1">
              Gamifying focus habits with Socratic streaks, attention badges, and conversational AI study counseling grounded in real-time vision telemetry.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: AI Chatbot Stage (Span 2) */}
        <div className="lg:col-span-2 rounded-2xl border border-indigo-500/30 bg-slate-900/80 shadow-xl flex flex-col h-[600px] overflow-hidden">
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-white text-sm">EduBot AI Socratic Counselor</h3>
                <span className="font-mono text-[10px] text-emerald-400">● LIVE VOICE & SSE STREAMING ACTIVE</span>
              </div>
            </div>

            <button 
              onClick={triggerVoiceSim}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                isListening 
                  ? 'bg-rose-600 text-white animate-pulse shadow-rose-500/30' 
                  : 'bg-slate-800 text-indigo-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <Mic className="h-3.5 w-3.5" />
              {isListening ? "Listening..." : "Voice Query"}
            </button>
          </div>

          {/* Messages Stage */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`h-8 w-8 rounded-xl shrink-0 flex items-center justify-center text-white shadow ${
                  msg.sender === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                }`}>
                  {msg.sender === 'user' ? '👤' : <Bot className="h-4 w-4" />}
                </div>

                <div className={`p-4 rounded-2xl leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask EduBot about attention scores, study habits, or drowsiness fixes..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 h-11 rounded-xl border border-slate-800 bg-slate-900 px-4 font-sans text-xs text-white focus:border-indigo-500 focus:outline-none"
            />
            <button 
              type="submit"
              className="h-11 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-xs font-bold flex items-center gap-1.5 shadow-lg hover:opacity-95"
            >
              <span>Send</span> <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* Right: Gamified Hall of Fame Leaderboard */}
        <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-sans font-bold text-white text-base flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-400" /> Focus Hall of Fame
              </h3>
              <span className="font-mono text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                WEEKLY LEADERBOARD
              </span>
            </div>

            <div className="space-y-3 py-4">
              {sortedLeaderboard.map((st, i) => {
                let rankIcon = <span className="font-mono text-xs text-slate-500 font-bold w-5 text-center">{i+1}</span>;
                let cardBg = "bg-slate-950/80 border-slate-800/80";
                if (i === 0) {
                  rankIcon = <Crown className="h-5 w-5 text-amber-400 animate-bounce" />;
                  cardBg = "bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border-amber-500/40";
                } else if (i === 1) {
                  rankIcon = <Medal className="h-5 w-5 text-slate-300" />;
                } else if (i === 2) {
                  rankIcon = <Award className="h-5 w-5 text-amber-600" />;
                }

                return (
                  <div key={st.id} className={`p-3 rounded-xl border flex items-center justify-between transition-all ${cardBg}`}>
                    <div className="flex items-center gap-3">
                      {rankIcon}
                      <img src={st.avatar} alt={st.name} className="h-9 w-9 rounded-xl object-cover border border-slate-700 shadow-sm" />
                      <div>
                        <div className="font-sans text-xs font-bold text-white">{st.name}</div>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                          <span className="flex items-center gap-0.5 text-amber-400"><Flame className="h-3 w-3" /> 12d Streak</span>
                          <span>• {st.rollNo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-sm font-extrabold text-emerald-400">{st.avgAttention}%</span>
                      <div className="flex items-center justify-end gap-0.5 text-[10px] text-amber-300">
                        <Coins className="h-3 w-3" /> +450 pts
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            onClick={() => {
              confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
              alert("Weekly Socratic Badge ceremony initiated! 500 EduCoins awarded to Top 3 Focused Scholars.");
            }}
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-sans text-xs font-extrabold uppercase tracking-wider hover:opacity-95 shadow-lg shadow-amber-500/20"
          >
            🎉 Celebrate Weekly Top Performers
          </button>
        </div>
      </div>
    </div>
  );
};
