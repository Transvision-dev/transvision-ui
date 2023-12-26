import React from 'react';
import SidebarContent from './SidebarContent';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block h-100" >
            <SidebarContent />
        </aside>
    );
};

export default Sidebar;
