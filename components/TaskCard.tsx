
import React from 'react';
import { Task, TaskType } from '../types';

interface TaskCardProps {
  task: Task;
  type: TaskType;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, type }) => {
  const isLadder = type === TaskType.LADDER;

  const cardClasses = `
    bg-gray-800/50 backdrop-blur-sm border rounded-lg p-6 
    transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
    ${isLadder 
      ? 'border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-emerald-900/50' 
      : 'border-rose-500/30 hover:border-rose-500/80 hover:shadow-rose-900/50'
    }
  `;

  const buttonClasses = `
    inline-flex items-center justify-center px-5 py-2 mt-4 text-base font-semibold
    rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-offset-gray-900
    ${isLadder 
      ? 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400' 
      : 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500'
    }
  `;

  return (
    <div className={cardClasses}>
      <h3 className="text-xl font-bold text-gray-50">{task.title}</h3>
      <p className="mt-2 text-gray-400">{task.description}</p>
      <a 
        href={task.link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        Start Task
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default TaskCard;
