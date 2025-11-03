
const StatsCard = ({ title, count, percentage, bgColor, textColor }: any) => {
    return (
        <div className={`${bgColor} rounded-xl p-4`}>
            <p className="text-gray-700 mb-3">{title}</p>
            <div className="flex  items-center gap-3   ">
                <h2 className={`text-2xl font-bold ${textColor}`}>{count}</h2>
                <span className='text-blue-950'>|</span>
                <div className="text-sm text-gray-600 flex gap-1 justify-center items-center">
                    <span className='flex gap-2'>Impression {percentage}% </span>
                    <span className='bg-white h-4 w-4 rounded-full text-center  '>↗</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;