import React from 'react';

export const Badge = ({ item, index }) => {

    return (
        <div key={index} className="rounded px-3 py-1 bg-app-black-3">
            <span className="text-sm text-white">{item}</span>
        </div>
    )
}