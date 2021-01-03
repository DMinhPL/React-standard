import React from 'react';


interface ButtonProps {
    label?: string;
    big?: boolean;
    themes?: 'primary' | 'secondary';
}
const Button: React.FC<ButtonProps> = ({ label, big, themes }) => {
    return (
        <button className={big ? `big` : ''}>
            {label} {themes}
        </button>
    )
}
export default Button;