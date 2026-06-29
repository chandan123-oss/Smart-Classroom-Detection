import { 
  Student, 
  TeacherAnalytics, 
  AttendanceRecord, 
  AttentionTrendData, 
  SubjectAttention, 
  SeatingSeat,
  MLModelMetric,
  SQLTableSchema,
  APIEndpoint,
  InterviewQA
} from '../types';

export const mockStudents: Student[] = [
  {
    id: 'STU-1001',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    department: 'AI & ML',
    semester: 6,
    rollNo: '21AIML004',
    attendancePercent: 96,
    avgAttention: 92,
    eyeContactPercent: 88,
    participationScore: 94,
    status: 'Focused',
    currentEmotion: 'Happy',
    sleepingCount: 1,
    phoneUsageCount: 2,
    talkingCount: 4,
    yawningCount: 3,
    handRaiseCount: 18,
    seatRow: 1,
    seatCol: 3,
    predictions: {
      examPredictedScore: 94,
      topperProbability: 0.89,
      dropoutRisk: 'Low',
      weakAreas: ['Graph Neural Networks']
    }
  },
  {
    id: 'STU-1002',
    name: 'Sophia Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    department: 'Data Science',
    semester: 6,
    rollNo: '21DS019',
    attendancePercent: 94,
    avgAttention: 89,
    eyeContactPercent: 85,
    participationScore: 91,
    status: 'Focused',
    currentEmotion: 'Neutral',
    sleepingCount: 0,
    phoneUsageCount: 3,
    talkingCount: 6,
    yawningCount: 5,
    handRaiseCount: 14,
    seatRow: 1,
    seatCol: 2,
    predictions: {
      examPredictedScore: 91,
      topperProbability: 0.78,
      dropoutRisk: 'Low',
      weakAreas: ['Bayesian Inference']
    }
  },
  {
    id: 'STU-1003',
    name: 'Rohan Patel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    department: 'Computer Science',
    semester: 6,
    rollNo: '21CS045',
    attendancePercent: 78,
    avgAttention: 62,
    eyeContactPercent: 45,
    participationScore: 54,
    status: 'Distracted',
    currentEmotion: 'Bored',
    sleepingCount: 8,
    phoneUsageCount: 19,
    talkingCount: 15,
    yawningCount: 14,
    handRaiseCount: 3,
    seatRow: 4,
    seatCol: 5,
    predictions: {
      examPredictedScore: 65,
      topperProbability: 0.08,
      dropoutRisk: 'Medium',
      weakAreas: ['Dynamic Programming', 'OS Memory Management']
    }
  },
  {
    id: 'STU-1004',
    name: 'Ananya Verma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    department: 'AI & ML',
    semester: 6,
    rollNo: '21AIML012',
    attendancePercent: 98,
    avgAttention: 95,
    eyeContactPercent: 94,
    participationScore: 98,
    status: 'Asking Question',
    currentEmotion: 'Happy',
    sleepingCount: 0,
    phoneUsageCount: 1,
    talkingCount: 2,
    yawningCount: 1,
    handRaiseCount: 24,
    seatRow: 1,
    seatCol: 4,
    predictions: {
      examPredictedScore: 97,
      topperProbability: 0.94,
      dropoutRisk: 'Low',
      weakAreas: ['None - Consistently High']
    }
  },
  {
    id: 'STU-1005',
    name: 'Kabir Mehta',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    department: 'Information Technology',
    semester: 6,
    rollNo: '21IT088',
    attendancePercent: 64,
    avgAttention: 41,
    eyeContactPercent: 30,
    participationScore: 35,
    status: 'Sleeping',
    currentEmotion: 'Drowsy',
    sleepingCount: 14,
    phoneUsageCount: 28,
    talkingCount: 12,
    yawningCount: 22,
    handRaiseCount: 1,
    seatRow: 5,
    seatCol: 6,
    predictions: {
      examPredictedScore: 48,
      topperProbability: 0.01,
      dropoutRisk: 'High',
      weakAreas: ['Computer Networks', 'Automata Theory', 'Database Systems']
    }
  },
  {
    id: 'STU-1006',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    department: 'Data Science',
    semester: 6,
    rollNo: '21DS033',
    attendancePercent: 88,
    avgAttention: 84,
    eyeContactPercent: 79,
    participationScore: 82,
    status: 'Focused',
    currentEmotion: 'Confused',
    sleepingCount: 2,
    phoneUsageCount: 5,
    talkingCount: 8,
    yawningCount: 7,
    handRaiseCount: 9,
    seatRow: 2,
    seatCol: 3,
    predictions: {
      examPredictedScore: 85,
      topperProbability: 0.45,
      dropoutRisk: 'Low',
      weakAreas: ['Time Series Forecasting']
    }
  },
  {
    id: 'STU-1007',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    department: 'Computer Science',
    semester: 6,
    rollNo: '21CS091',
    attendancePercent: 91,
    avgAttention: 87,
    eyeContactPercent: 82,
    participationScore: 86,
    status: 'Focused',
    currentEmotion: 'Neutral',
    sleepingCount: 1,
    phoneUsageCount: 4,
    talkingCount: 7,
    yawningCount: 4,
    handRaiseCount: 11,
    seatRow: 2,
    seatCol: 4,
    predictions: {
      examPredictedScore: 88,
      topperProbability: 0.61,
      dropoutRisk: 'Low',
      weakAreas: ['Distributed Systems']
    }
  },
  {
    id: 'STU-1008',
    name: 'Zara Al-Sayed',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    department: 'Electronics',
    semester: 6,
    rollNo: '21EC014',
    attendancePercent: 82,
    avgAttention: 73,
    eyeContactPercent: 68,
    participationScore: 70,
    status: 'Distracted',
    currentEmotion: 'Frustrated',
    sleepingCount: 4,
    phoneUsageCount: 11,
    talkingCount: 14,
    yawningCount: 9,
    handRaiseCount: 5,
    seatRow: 3,
    seatCol: 5,
    predictions: {
      examPredictedScore: 74,
      topperProbability: 0.18,
      dropoutRisk: 'Low',
      weakAreas: ['VLSI Design', 'Digital Signal Processing']
    }
  },
  {
    id: 'STU-1009',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    department: 'AI & ML',
    semester: 6,
    rollNo: '21AIML029',
    attendancePercent: 93,
    avgAttention: 90,
    eyeContactPercent: 87,
    participationScore: 92,
    status: 'Focused',
    currentEmotion: 'Happy',
    sleepingCount: 0,
    phoneUsageCount: 2,
    talkingCount: 3,
    yawningCount: 2,
    handRaiseCount: 16,
    seatRow: 2,
    seatCol: 2,
    predictions: {
      examPredictedScore: 92,
      topperProbability: 0.81,
      dropoutRisk: 'Low',
      weakAreas: ['Reinforcement Learning']
    }
  },
  {
    id: 'STU-1010',
    name: 'Priya Nair',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    department: 'Information Technology',
    semester: 6,
    rollNo: '21IT042',
    attendancePercent: 74,
    avgAttention: 58,
    eyeContactPercent: 50,
    participationScore: 61,
    status: 'Distracted',
    currentEmotion: 'Bored',
    sleepingCount: 6,
    phoneUsageCount: 16,
    talkingCount: 18,
    yawningCount: 15,
    handRaiseCount: 4,
    seatRow: 4,
    seatCol: 2,
    predictions: {
      examPredictedScore: 64,
      topperProbability: 0.05,
      dropoutRisk: 'Medium',
      weakAreas: ['Cloud Security', 'Web Microservices']
    }
  },
  {
    id: 'STU-1011',
    name: 'Liam O’Connor',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    department: 'Computer Science',
    semester: 6,
    rollNo: '21CS018',
    attendancePercent: 89,
    avgAttention: 81,
    eyeContactPercent: 77,
    participationScore: 79,
    status: 'Focused',
    currentEmotion: 'Neutral',
    sleepingCount: 2,
    phoneUsageCount: 7,
    talkingCount: 9,
    yawningCount: 8,
    handRaiseCount: 8,
    seatRow: 3,
    seatCol: 3,
    predictions: {
      examPredictedScore: 82,
      topperProbability: 0.35,
      dropoutRisk: 'Low',
      weakAreas: ['Compiler Construction']
    }
  },
  {
    id: 'STU-1012',
    name: 'Mei Ling Wu',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    department: 'Data Science',
    semester: 6,
    rollNo: '21DS051',
    attendancePercent: 95,
    avgAttention: 93,
    eyeContactPercent: 91,
    participationScore: 95,
    status: 'Focused',
    currentEmotion: 'Happy',
    sleepingCount: 0,
    phoneUsageCount: 1,
    talkingCount: 2,
    yawningCount: 2,
    handRaiseCount: 21,
    seatRow: 1,
    seatCol: 5,
    predictions: {
      examPredictedScore: 95,
      topperProbability: 0.91,
      dropoutRisk: 'Low',
      weakAreas: ['Big Data ETL Pipelines']
    }
  }
];

export const mockTeachers: TeacherAnalytics[] = [
  {
    teacherName: 'Dr. Vikramaditya Ghosh',
    subject: 'Deep Learning & Neural Networks',
    department: 'AI & ML',
    avgAttentionScore: 91.4,
    interactiveIndex: 94,
    studentSatisfaction: 4.8,
    totalLectures: 42,
    recommendedActions: ['Include more live Google Colab coding demos', 'Share lecture slide PDFs 24 hrs prior']
  },
  {
    teacherName: 'Prof. Sanya Mukherjee',
    subject: 'Advanced Computer Vision (YOLO & Transformers)',
    department: 'AI & ML',
    avgAttentionScore: 89.2,
    interactiveIndex: 92,
    studentSatisfaction: 4.7,
    totalLectures: 38,
    recommendedActions: ['Introduce Kaggle mini-competitions', 'Maintain current Socratic questioning rhythm']
  },
  {
    teacherName: 'Dr. Raymond Sterling',
    subject: 'Design & Analysis of Algorithms',
    department: 'Computer Science',
    avgAttentionScore: 76.5,
    interactiveIndex: 68,
    studentSatisfaction: 3.9,
    totalLectures: 45,
    recommendedActions: ['Break 90-min lecture into 30-min sprints with quiz interludes', 'Use visual animation tools for tree rotations']
  },
  {
    teacherName: 'Prof. Amrita Rao',
    subject: 'Statistical Modeling & Data Warehousing',
    department: 'Data Science',
    avgAttentionScore: 84.8,
    interactiveIndex: 83,
    studentSatisfaction: 4.4,
    totalLectures: 40,
    recommendedActions: ['Provide real industry datasets from retail/fintech', 'Organize peer-to-peer code reviews']
  },
  {
    teacherName: 'Dr. Kenneth Vance',
    subject: 'Cloud Computing & Microservices',
    department: 'Information Technology',
    avgAttentionScore: 72.1,
    interactiveIndex: 62,
    studentSatisfaction: 3.6,
    totalLectures: 36,
    recommendedActions: ['High back-row distraction detected after 11:30 AM; introduce interactive polling via Kahoot', 'Reduce slide density']
  }
];

export const mockAttentionTrend: AttentionTrendData[] = [
  { time: '09:00 AM', attention: 94, engagement: 91, sleeping: 1, phoneUsage: 2 },
  { time: '09:15 AM', attention: 92, engagement: 89, sleeping: 1, phoneUsage: 3 },
  { time: '09:30 AM', attention: 88, engagement: 86, sleeping: 2, phoneUsage: 5 },
  { time: '09:45 AM', attention: 85, engagement: 82, sleeping: 3, phoneUsage: 8 },
  { time: '10:00 AM', attention: 89, engagement: 88, sleeping: 1, phoneUsage: 4 }, // Quiz started
  { time: '10:15 AM', attention: 93, engagement: 94, sleeping: 0, phoneUsage: 2 },
  { time: '10:30 AM', attention: 81, engagement: 79, sleeping: 4, phoneUsage: 11 },
  { time: '10:45 AM', attention: 74, engagement: 70, sleeping: 7, phoneUsage: 16 },
  { time: '11:00 AM', attention: 68, engagement: 62, sleeping: 9, phoneUsage: 21 }, // Mid-morning dip
  { time: '11:15 AM', attention: 86, engagement: 85, sleeping: 2, phoneUsage: 6 }, // Live demo intro
  { time: '11:30 AM', attention: 88, engagement: 87, sleeping: 1, phoneUsage: 5 },
  { time: '11:45 AM', attention: 84, engagement: 81, sleeping: 3, phoneUsage: 9 },
];

export const mockSubjects: SubjectAttention[] = [
  { subject: 'Computer Vision', attention: 91, attendance: 95, teacher: 'Prof. Sanya Mukherjee' },
  { subject: 'Deep Learning', attention: 89, attendance: 94, teacher: 'Dr. Vikramaditya Ghosh' },
  { subject: 'Data Science', attention: 85, attendance: 91, teacher: 'Prof. Amrita Rao' },
  { subject: 'Algorithms', attention: 77, attendance: 86, teacher: 'Dr. Raymond Sterling' },
  { subject: 'Cloud Systems', attention: 72, attendance: 82, teacher: 'Dr. Kenneth Vance' },
  { subject: 'VLSI Design', attention: 74, attendance: 80, teacher: 'Prof. H. K. Srinivasan' }
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: 'ATT-2026-001',
    studentId: 'STU-1001',
    studentName: 'Aarav Sharma',
    avatar: mockStudents[0].avatar,
    department: 'AI & ML',
    date: '2026-06-29',
    loginTime: '08:54:12 AM',
    logoutTime: '01:05:30 PM',
    status: 'Present',
    verificationMethod: 'Face Recognition (DeepFace)',
    confidenceScore: 99.4
  },
  {
    id: 'ATT-2026-002',
    studentId: 'STU-1002',
    studentName: 'Sophia Rodriguez',
    avatar: mockStudents[1].avatar,
    department: 'Data Science',
    date: '2026-06-29',
    loginTime: '08:56:05 AM',
    logoutTime: '01:02:15 PM',
    status: 'Present',
    verificationMethod: 'Face Recognition (DeepFace)',
    confidenceScore: 98.9
  },
  {
    id: 'ATT-2026-003',
    studentId: 'STU-1004',
    studentName: 'Ananya Verma',
    avatar: mockStudents[3].avatar,
    department: 'AI & ML',
    date: '2026-06-29',
    loginTime: '08:51:30 AM',
    logoutTime: '01:10:00 PM',
    status: 'Present',
    verificationMethod: 'Face Recognition (DeepFace)',
    confidenceScore: 99.7
  },
  {
    id: 'ATT-2026-004',
    studentId: 'STU-1003',
    studentName: 'Rohan Patel',
    avatar: mockStudents[2].avatar,
    department: 'Computer Science',
    date: '2026-06-29',
    loginTime: '09:18:44 AM',
    logoutTime: '12:45:10 PM',
    status: 'Late',
    verificationMethod: 'QR Code',
    confidenceScore: 100
  },
  {
    id: 'ATT-2026-005',
    studentId: 'STU-1005',
    studentName: 'Kabir Mehta',
    avatar: mockStudents[4].avatar,
    department: 'Information Technology',
    date: '2026-06-29',
    loginTime: '09:25:10 AM',
    logoutTime: '11:50:00 AM',
    status: 'Late',
    verificationMethod: 'Face Recognition (DeepFace)',
    confidenceScore: 94.2
  },
  {
    id: 'ATT-2026-006',
    studentId: 'STU-1012',
    studentName: 'Mei Ling Wu',
    avatar: mockStudents[11].avatar,
    department: 'Data Science',
    date: '2026-06-29',
    loginTime: '08:53:02 AM',
    logoutTime: '01:06:40 PM',
    status: 'Present',
    verificationMethod: 'Face Recognition (DeepFace)',
    confidenceScore: 99.5
  }
];

export const mockMLMetrics: MLModelMetric[] = [
  {
    modelName: 'YOLOv11-Attention-Lite',
    task: 'Face & Bounding Box Localization + Object (Phone/Book) Det',
    framework: 'PyTorch / Ultralytics',
    accuracy: 98.4,
    precision: 97.9,
    recall: 98.6,
    f1Score: 98.2,
    latencyMs: 14.2,
    status: 'Deployed (Edge/TensorRT)'
  },
  {
    modelName: 'MediaPipe-FaceMesh-68',
    task: 'Head Pose (Pitch, Yaw, Roll) & Eye Gaze Ratio Calculation',
    framework: 'TensorFlow Lite',
    accuracy: 97.8,
    precision: 97.2,
    recall: 98.1,
    f1Score: 97.6,
    latencyMs: 8.5,
    status: 'Deployed (Edge/TensorRT)'
  },
  {
    modelName: 'DeepFace-ArcFace-Embedder',
    task: 'Real-time Student Biometric Face Recognition (512-d vector)',
    framework: 'Keras / PyTorch',
    accuracy: 99.6,
    precision: 99.5,
    recall: 99.7,
    f1Score: 99.6,
    latencyMs: 22.0,
    status: 'Deployed (Edge/TensorRT)'
  },
  {
    modelName: 'FER-CNN-ResNet50',
    task: '6-Class Facial Emotion Recognition (Happy, Bored, Confused...)',
    framework: 'PyTorch',
    accuracy: 93.2,
    precision: 92.8,
    recall: 93.5,
    f1Score: 93.1,
    latencyMs: 18.6,
    status: 'Deployed (Edge/TensorRT)'
  },
  {
    modelName: 'XGBoost-Engagement-Predictor',
    task: 'Tabular Prediction of Dropout Risk & Exam Performance',
    framework: 'Scikit-learn / XGBoost',
    accuracy: 95.1,
    precision: 94.4,
    recall: 95.8,
    f1Score: 95.1,
    latencyMs: 3.1,
    status: 'Deployed (Edge/TensorRT)'
  },
  {
    modelName: 'Temporal-LSTM-Attention-Forecaster',
    task: 'Next 15-min Classroom Attention Trajectory Forecasting',
    framework: 'TensorFlow / Keras',
    accuracy: 91.8,
    precision: 90.5,
    recall: 92.4,
    f1Score: 91.4,
    latencyMs: 11.0,
    status: 'Validation'
  }
];

export const mockSQLSchemas: SQLTableSchema[] = [
  {
    tableName: 'students',
    columns: [
      { name: 'student_id', type: 'VARCHAR(32)', key: 'PRIMARY KEY', description: 'Unique alphanumeric identifier' },
      { name: 'full_name', type: 'VARCHAR(128)', description: 'Student full legal name' },
      { name: 'roll_no', type: 'VARCHAR(32)', key: 'UNIQUE', description: 'Academic university roll number' },
      { name: 'department_id', type: 'INT', key: 'FOREIGN KEY', description: 'Ref to departments table' },
      { name: 'face_embedding', type: 'VECTOR(512)', description: 'ArcFace 512-dimensional biometric float array' },
      { name: 'cumulative_attention', type: 'FLOAT', description: 'Running average attention % across semester' }
    ]
  },
  {
    tableName: 'attention_logs',
    columns: [
      { name: 'log_id', type: 'BIGINT', key: 'PRIMARY KEY', description: 'Auto-incrementing telemetry event ID' },
      { name: 'student_id', type: 'VARCHAR(32)', key: 'FOREIGN KEY', description: 'Target student reference' },
      { name: 'timestamp', type: 'TIMESTAMPTZ', description: 'Exact ISO-8601 UTC timestamp of frame scan' },
      { name: 'attention_score', type: 'FLOAT', description: 'Calculated 0.0 to 100.0 instantaneous score' },
      { name: 'head_pitch', type: 'FLOAT', description: 'Euler angle in degrees (-90 to +90)' },
      { name: 'head_yaw', type: 'FLOAT', description: 'Euler angle in degrees (-90 to +90)' },
      { name: 'eye_aspect_ratio', type: 'FLOAT', description: 'EAR metric (<0.22 indicates blink/sleeping)' },
      { name: 'detected_emotion', type: 'VARCHAR(32)', description: 'Classified facial expression' },
      { name: 'flag_phone_usage', type: 'BOOLEAN', description: 'YOLO detection object class #67' },
      { name: 'flag_sleeping', type: 'BOOLEAN', description: 'Triggered when EAR < 0.20 for > 3.0 sec' }
    ]
  },
  {
    tableName: 'attendance_sessions',
    columns: [
      { name: 'session_id', type: 'UUID', key: 'PRIMARY KEY', description: 'Unique classroom session ID' },
      { name: 'subject_code', type: 'VARCHAR(16)', key: 'FOREIGN KEY', description: 'Reference to academic syllabus' },
      { name: 'teacher_id', type: 'VARCHAR(32)', key: 'FOREIGN KEY', description: 'Instructor conducting class' },
      { name: 'camera_stream_rtsp', type: 'VARCHAR(256)', description: 'RTSP video feed endpoint URI' },
      { name: 'start_time', type: 'TIMESTAMP', description: 'Session initiation' },
      { name: 'end_time', type: 'TIMESTAMP', description: 'Session termination' },
      { name: 'avg_class_engagement', type: 'FLOAT', description: 'Aggregated KPI score computed post-lecture' }
    ]
  },
  {
    tableName: 'ml_predictions',
    columns: [
      { name: 'prediction_id', type: 'UUID', key: 'PRIMARY KEY', description: 'Inference batch ID' },
      { name: 'student_id', type: 'VARCHAR(32)', key: 'FOREIGN KEY', description: 'Target student ID' },
      { name: 'predicted_exam_score', type: 'FLOAT', description: 'XGBoost regressor output' },
      { name: 'dropout_risk_level', type: 'VARCHAR(16)', description: 'LOW | MEDIUM | HIGH' },
      { name: 'generated_at', type: 'TIMESTAMPTZ', description: 'Cron batch job execution timestamp' }
    ]
  }
];

export const mockAPIEndpoints: APIEndpoint[] = [
  {
    method: 'POST',
    path: '/api/v1/cv/stream/infer',
    description: 'Ingests raw base64 webcam frame or RTSP chunk, returns bounding boxes, 68 face mesh landmarks, attention %, and flags.',
    payload: '{ "frame_base64": "/9j/4AAQSkZJRg...", "camera_id": "CAM-ROOM-302" }',
    response: '{ "status": "success", "detections": [{ "student_id": "STU-1001", "bbox": [120, 80, 240, 310], "attention": 94.2, "emotion": "Happy", "ear": 0.31 }] }',
    auth: 'Bearer JWT / API-Key Header'
  },
  {
    method: 'GET',
    path: '/api/v1/analytics/classroom/realtime',
    description: 'Server-Sent Events (SSE) / WebSocket endpoint broadcasting live classroom KPIs (Present count, avg attention, alerts) every 1000ms.',
    response: 'event: telemetry\ndata: { "present": 48, "absent": 4, "avg_attention": 84.6, "sleeping_count": 2 }',
    auth: 'Bearer JWT (Teacher/Admin Scope)'
  },
  {
    method: 'POST',
    path: '/api/v1/ml/predict/student-risk',
    description: 'Triggers XGBoost + LSTM pipeline to evaluate dropout risk and future semester GPA based on historical attention logs.',
    payload: '{ "student_id": "STU-1003", "semester_window_days": 30 }',
    response: '{ "student_id": "STU-1003", "dropout_risk": "Medium", "predicted_exam_percent": 65.4, "topper_prob": 0.08, "intervention_suggested": true }',
    auth: 'Bearer JWT (Admin Scope)'
  },
  {
    method: 'GET',
    path: '/api/v1/reports/export',
    description: 'Generates formatted multi-page PDF or XLSX workbook containing detailed academic engagement summary.',
    response: 'Binary Stream (application/pdf or application/vnd.openxmlformats-officedocument.spreadsheetml.sheet)',
    auth: 'Bearer JWT'
  }
];

export const mockInterviewQuestions: InterviewQA[] = [
  {
    category: 'Computer Vision',
    question: 'How does your system distinguish between a student looking down to take notes versus looking down at a mobile phone or sleeping?',
    answer: 'Our pipeline combines multi-task cues: 1) MediaPipe computes Euler head pose angles (pitch > 25° indicating looking down). 2) Simultaneously, YOLOv11 scans the student ROI for object class "cell phone". 3) Eye Aspect Ratio (EAR) is calculated from the 6 eye contour landmarks. If EAR > 0.24 and hands/pen are detected near table plane without phone bbox, the state is classified as "Focused (Note Taking)". If EAR < 0.20 for > 3 seconds, it triggers "Sleeping". If phone bbox is present with downward pitch, it triggers "Mobile Phone Distraction".',
    keyConcepts: ['Euler Head Pose Estimation', 'Eye Aspect Ratio (EAR)', 'Multi-Modal Sensor Fusion', 'YOLO Object Bounding Boxes']
  },
  {
    category: 'Machine Learning',
    question: 'How did you handle the class imbalance problem where 85% of classroom time students are normal/focused and only 15% are drowsy/distracted?',
    answer: 'During FER-CNN and XGBoost classifier training, we utilized Focal Loss (γ=2.0, α=0.25) instead of standard Cross-Entropy to penalize easy focused examples and force gradient updates on rare minority classes (sleeping, yawning, frustrated). Furthermore, in tabular data preprocessing, we applied SMOTE-Tomek link sampling to synthesize boundary minority samples while cleaning noisy overlapping instances.',
    keyConcepts: ['Focal Loss', 'SMOTE-Tomek', 'Class Imbalance', 'Precision-Recall Tradeoff']
  },
  {
    category: 'System Architecture',
    question: 'How do you process 50 simultaneous 1080p CCTV video streams at 30 FPS without incurring severe cloud server bandwidth and GPU bottlenecks?',
    answer: 'We deploy an Edge-to-Cloud Distributed Architecture. Heavy video decoding and YOLOv11 TensorRT inference run on local classroom Edge AI Jetson Orin Nano appliances. Only extracted lightweight structured metadata (student IDs, bounding coordinates, attention float values ~1.5 KB/sec per camera) are transmitted via WebSockets/MQTT to the central FastAPI / PostgreSQL cloud backend. This reduces cloud bandwidth by 99.8% and achieves <35ms end-to-end latency.',
    keyConcepts: ['Edge Computing / TensorRT', 'MQTT / Structured Telemetry', 'Bandwidth Optimization', 'Asynchronous FastAPI']
  },
  {
    category: 'Business Intelligence',
    question: 'What exact mathematical formula did you formulate to calculate the "Classroom Engagement Score" from raw computer vision telemetry?',
    answer: 'Engagement Score E = w1*(Attn) + w2*(Gaze) + w3*(Participation) - w4*(DistractionPenalty). Specifically: Attn is normalized head pose stability (0-100), Gaze is % time eye vector intersects blackboard plane, Participation is normalized hand-raise & verbal QA frequency, and DistractionPenalty = 15*(phone_count) + 25*(sleep_duration_mins). Weights are calibrated via Ridge Regression against actual historical mid-term GPA scores.',
    keyConcepts: ['Feature Weight Calibration', 'Composite KPI Design', 'Telemetry Normalization']
  }
];

export const linkedInKitText = `🚀 Thrilled to unveil my latest industry-grade EdTech AI Project: "Smart Classroom Attention Detection System" 🎓💡

As modern classrooms transition into hybrid learning hubs, understanding student engagement in real-time is crucial. I designed & engineered an end-to-end AI + Computer Vision platform that acts like a billion-dollar dashboard (inspired by Tesla, Power BI & Google Analytics) to revolutionize classroom productivity.

✨ Key Functional Capabilities:
• Real-time Computer Vision: Detects Face Orientation, 68-landmark Eye Gaze ratio, Head Pose (Pitch/Yaw/Roll), Blink rate & Yawning via YOLOv11 + MediaPipe.
• Instant Distraction Telemetry: Automatically flags Sleeping students, Mobile Phone usage, and inter-student talking with sub-35ms edge latency.
• Biometric Attendance: DeepFace ArcFace 512-dimensional vector matching for touchless automated attendance.
• Predictive ML Pipeline: XGBoost & LSTM forecasters predicting exam scores (95.1% accuracy), weak subject areas, and dropout risk before mid-terms.
• Enterprise Dashboard: Dark glassmorphic UI featuring live heatmaps, treemaps, radar charts, and downloadable PDF/XLSX academic reports.

🛠️ Tech Stack: React 19, Tailwind CSS, TypeScript, FastAPI (Python), PostgreSQL, OpenCV, YOLO, MediaPipe, DeepFace, XGBoost, PyTorch & Docker.

Check out the interactive live demo below! Open to feedback from fellow AI Engineers, Data Scientists, and EdTech innovators. 👇

#ArtificialIntelligence #ComputerVision #MachineLearning #DataScience #DeepLearning #EdTech #Python #React #OpenCV #Portfolio #TechInnovation`;
