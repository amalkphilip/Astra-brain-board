
import React from 'react';
import { LADDER_TASKS, SNAKE_TASKS } from './constants';
import { Task, TaskType } from './types';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import { LadderIcon, SnakeIcon } from './components/icons';

const TaskList: React.FC<{ title: string; tasks: Task[]; type: TaskType; icon: React.ReactNode }> = ({ title, tasks, type, icon }) => {
  const titleColor = type === TaskType.LADDER ? 'text-emerald-400' : 'text-rose-500';

  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h2 className={`text-3xl font-bold ${titleColor}`}>{title}</h2>
      </div>
      <div className="space-y-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} type={type} />
        ))}
      </div>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased relative overflow-hidden">
       <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-900/50 to-gray-900 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-rose-900/50 to-gray-900 blur-3xl"></div>
        </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <Header />
        <main className="mt-12 flex flex-col lg:flex-row lg:space-x-8">
          <TaskList 
            title="Ladder Challenges" 
            tasks={LADDER_TASKS} 
            type={TaskType.LADDER} 
            icon={<LadderIcon className="w-10 h-10 text-emerald-400" />}
          />
          <TaskList 
            title="Snake Pit" 
            tasks={SNAKE_TASKS} 
            type={TaskType.SNAKE}
            icon={<SnakeIcon className="w-10 h-10 text-rose-500" />}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
