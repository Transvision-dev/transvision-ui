import React, { useState } from 'react';

interface AppDropzoneProps {
    onFileUpload: (file: File) => void;
    className?: string;
}

const AppDropzone: React.FC<AppDropzoneProps> = ({ onFileUpload, className }) => {
    const [dragOver, setDragOver] = useState(false);

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);

        const file = event.dataTransfer.files[0];
        onFileUpload(file);
    };

    return (
        <div
            className={
                `dropzone ${dragOver ? 'drag-over' : ''}
                bg-white border-2 border-dashed border-gray-300
                text-center
                px-4 py-6 rounded-lg shadow-sm
                text-sm font-medium text-gray-700
                h-96 w-5/6 ${className? className : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragEnter}
            onDrop={handleDrop}
        >
            <p>Drag and drop a file here</p>
        </div>
    );
};

export default AppDropzone;


