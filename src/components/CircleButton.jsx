import React from 'react';

const CircleButton = ({ onClick, children, style }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#6200ea', // You can change this color
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                ...style, // Allow additional styles to be passed in
            }}
        >
            {children}
        </button>
    );
};

export default CircleButton;

