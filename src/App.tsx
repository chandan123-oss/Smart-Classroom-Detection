/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HomeView } from './components/views/HomeView';
import { LiveClassroomView } from './components/views/LiveClassroomView';
import { StudentAnalyticsView } from './components/views/StudentAnalyticsView';
import { TeacherAnalyticsView } from './components/views/TeacherAnalyticsView';
import { AttendanceView } from './components/views/AttendanceView';
import { HeatmapView } from './components/views/HeatmapView';
import { ReportsView } from './components/views/ReportsView';
import { AIPipelineView } from './components/views/AIPipelineView';
import { ArchitectureView } from './components/views/ArchitectureView';
import { AdminView } from './components/views/AdminView';
import { ExtrasView } from './components/views/ExtrasView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isStreaming, setIsStreaming] = useState(true);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'live':
        return <LiveClassroomView />;
      case 'student-analytics':
        return <StudentAnalyticsView />;
      case 'teacher-analytics':
        return <TeacherAnalyticsView />;
      case 'attendance':
        return <AttendanceView />;
      case 'heatmap':
        return <HeatmapView />;
      case 'reports':
        return <ReportsView />;
      case 'ai-pipeline':
        return <AIPipelineView />;
      case 'architecture':
        return <ArchitectureView />;
      case 'admin':
        return <AdminView />;
      case 'extras':
        return <ExtrasView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar 
        activeTab={activeTab} 
        isStreaming={isStreaming} 
        setIsStreaming={setIsStreaming} 
      />
      
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        
        <main className="flex-1 min-w-0 p-6 sm:p-8 max-w-7xl mx-auto overflow-y-auto">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
