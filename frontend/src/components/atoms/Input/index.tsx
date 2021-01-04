import React from 'react';

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
    return (
        <div className="a-input">
            <input type="text" />
        </div>
    );
};

export default Input;
