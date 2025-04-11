import React from 'react';

const Form = ({ label, type = 'text', placeholder, ...props }) => {
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full mt-1 p-2 rounded border border-gray-300"
                {...props}
            />
        </div>
    );
};

export default Form;
