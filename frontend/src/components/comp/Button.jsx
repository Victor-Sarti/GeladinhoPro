
import React from 'react';

const Button = ({ text, onClick, className, variant = 'primary' }) => {
    const baseClasses = 'font-semibold rounded-md border-2 px-6 py-2 duration-200';
    const variantClasses = variant === 'primary' 
        ? 'bg-primary text-white hover:bg-white hover:text-primary border-primary'
        : 'bg-secondary text-secondary hover:bg-secondary hover:text-white border-secondary';

    return (
        <button 
            className={`${baseClasses} ${variantClasses} ${className}`} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;