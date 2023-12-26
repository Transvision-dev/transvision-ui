import React from 'react';
import { Routes } from 'react-router-dom';

const SidebarContent: React.FC = () => {
    const routes = [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: 'HomeIcon',
        },
        {
            path: '/dashboard/upload-space',
            name: 'Upload Space',
            icon: 'UploadIcon',
        }, 
    ]
    return (
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                TransvisionNetwork
            </a>
            <ul className="mt-6">
                {routes.map((route: any, i : number) => (
                    <li>
                        <a
                            className={`flex items-center mt-4 py-2 px-6 bg-gray-200 bg-opacity-25 text-gray-700 dark:bg-gray-900 dark:bg-opacity-25 dark:text-gray-100 ${i === 0 && 'active'}`}
                            href={route.path}
                        >
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d={route.icon} />
                            </svg>
                            <span className="mx-3">{route.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarContent;
