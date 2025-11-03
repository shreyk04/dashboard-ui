
const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: '📊', active: false },
        { name: 'Orders', icon: '📦', active: true },
        { name: 'Clients', icon: '👥', active: false },
        { name: 'Statistics', icon: '📈', active: false },
        { name: 'Finance', icon: '💰', active: false },
        { name: 'FAQ', icon: '❓', active: false },
        { name: 'Support', icon: '💬', active: false },
    ];

    return (
        <div className="w-64 bg-white h-screen flex flex-col">
            <div className="p-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                    U
                </div>
                <span className="text-xl font-semibold">untlip</span>
            </div>


            <div className="flex-1 px-4">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer ${item.active
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>



            <div className="mx-4 mb-6 flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span>🚪</span>
                <span>Log Out</span>
            </div>

            <div className="m-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
                <div className="mb-3 text-4xl">👨‍💻</div>
                <p className="font-semibold">Upgrade</p>
                <p className="text-sm text-gray-600">your plan →</p>
            </div>
        </div>
    );
};

export default Sidebar;