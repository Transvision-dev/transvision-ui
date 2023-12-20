import React, { useState } from 'react';

interface AppDropzoneProps {
    onFileUpload: (file: File) => void;
}

const AppDropzone: React.FC<AppDropzoneProps> = ({ onFileUpload }) => {
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
            className={`dropzone ${dragOver ? 'drag-over' : ''}`}
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


