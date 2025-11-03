
const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-gray-600">
                <span>📅</span>
                <span>October 19, 2021</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by name, name or ID..."
                        className="w-80 px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                </div>

                <div className="relative cursor-pointer">
                    <span className="text-xl">🔔</span>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>

                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white cursor-pointer">
                    U
                </div>
            </div>
        </div>
    );
};

export default Header;