import React from 'react';

interface containerProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Container: React.FC<containerProps> = ({ children, className, style }) => {
    return (
        <div 
            className={
                `p-4 mx-0 xl:px-0 w-full ${className ? className : ""}`
            }
            style={style}
        >
            {children}
        </div>
    );
};

export default Container;
