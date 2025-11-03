import React from 'react';

const StatsCard = ({ title, count, percentage, bgColor, textColor }: any) => {
    return (
        <div className={`${bgColor} rounded-xl p-6`}>
            <p className="text-gray-700 mb-3">{title}</p>
            <div className="flex items-baseline gap-3">
                <h2 className={`text-4xl font-bold ${textColor}`}>{count}</h2>
                <div className="text-sm text-gray-600 flex">
                    <span className='flex gap-2'>Impression {percentage}% </span>
                    <span>↗</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;