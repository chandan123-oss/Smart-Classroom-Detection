export type TabType = 
  | 'home'
  | 'live'
  | 'student-analytics'
  | 'teacher-analytics'
  | 'attendance'
  | 'heatmap'
  | 'reports'
  | 'ai-pipeline'
  | 'architecture'
  | 'admin'
  | 'extras';

export interface Student {
  id: string;
  name: string;
  avatar: string;
  department: 'Computer Science' | 'Data Science' | 'AI & ML' | 'Information Technology' | 'Electronics';
  semester: number;
  rollNo: string;
  attendancePercent: number;
  avgAttention: number;
  eyeContactPercent: number;
  participationScore: number;
  status: 'Focused' | 'Distracted' | 'Sleeping' | 'Asking Question' | 'Absent';
  currentEmotion: 'Neutral' | 'Happy' | 'Confused' | 'Bored' | 'Frustrated' | 'Drowsy';
  sleepingCount: number;
  phoneUsageCount: number;
  talkingCount: number;
  yawningCount: number;
  handRaiseCount: number;
  seatRow: number;
  seatCol: number;
  predictions: {
    examPredictedScore: number; // e.g. 88%
    topperProbability: number; // e.g. 0.72
    dropoutRisk: 'Low' | 'Medium' | 'High';
    weakAreas: string[];
  };
}

export interface TeacherAnalytics {
  teacherName: string;
  subject: string;
  department: string;
  avgAttentionScore: number;
  interactiveIndex: number;
  studentSatisfaction: number;
  totalLectures: number;
  recommendedActions: string[];
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  avatar: string;
  department: string;
  date: string;
  loginTime: string;
  logoutTime: string;
  status: 'Present' | 'Late' | 'Absent';
  verificationMethod: 'Face Recognition (DeepFace)' | 'QR Code' | 'Manual';
  confidenceScore: number;
}

export interface AttentionTrendData {
  time: string;
  attention: number;
  engagement: number;
  sleeping: number;
  phoneUsage: number;
}

export interface SubjectAttention {
  subject: string;
  attention: number;
  attendance: number;
  teacher: string;
}

export interface SeatingSeat {
  row: number;
  col: number;
  seatNumber: string;
  student?: Student;
  attentionLevel: 'high' | 'medium' | 'low' | 'empty';
}

export interface MLModelMetric {
  modelName: string;
  task: string;
  framework: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  latencyMs: number;
  status: 'Deployed (Edge/TensorRT)' | 'Validation' | 'Training';
}

export interface ConfusionMatrixCell {
  actual: string;
  predicted: string;
  count: number;
}

export interface SQLTableSchema {
  tableName: string;
  columns: { name: string; type: string; key?: string; description: string }[];
}

export interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  payload?: string;
  response: string;
  auth: string;
}

export interface InterviewQA {
  category: 'Computer Vision' | 'Machine Learning' | 'System Architecture' | 'Business Intelligence';
  question: string;
  answer: string;
  keyConcepts: string[];
}
