import React from "react";

const Burger = ({ color }) => {
    return (
        <svg
            width="31"
            height="29"
            viewBox="0 0 31 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="31" height="5" rx="2" fill={color} />
            <rect y="24" width="31" height="5" rx="2" fill={color} />
            <rect y="12" width="31" height="5" rx="2" fill={color} />
        </svg>
    );
};

export default Burger;
