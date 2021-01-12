import React from 'react';

interface InputProps {
    type?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text' }) => (
    <div className="a-input">
        <input type={type} />
    </div>
);

export default Input;
