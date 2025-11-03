import { useState } from 'react';

const OrderTable = ({ orders }: any) => {
    const [activeTab, setActiveTab] = useState('All Orders');

    const tabs = ['All Orders', 'Pending Orders', 'Delivered Orders', 'Booked Orders', 'Cancelled Orders'];

    const filteredOrders = orders.filter((order: any) => {
        if (activeTab === 'All Orders') return true;
        if (activeTab === 'Pending Orders') return order.status === 'Pending';
        if (activeTab === 'Delivered Orders') return order.status === 'Delivered';
        if (activeTab === 'Cancelled Orders') return order.status === 'Cancelled';
        return true;
    });

    const getStatusColor = (status: string) => {
        if (status === 'Delivered') return 'text-green-600 bg-green-50';
        if (status === 'Cancelled') return 'text-red-600 bg-red-50';
        if (status === 'Pending') return 'text-gray-600 bg-gray-50';
        return 'text-gray-600 bg-gray-50';
    };

    return (
        <div className="bg-white rounded-xl p-6">
            <div className="flex gap-8 border-b mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 ${activeTab === tab
                            ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium'
                            : 'text-gray-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b text-left">
                        <th className="py-4 px-4 text-gray-600 font-medium text-sm">
                            <span className="mr-2">≡</span>Order ID
                        </th>
                        <th className="py-4 px-4 text-gray-600 font-medium text-sm">
                            <span className="mr-2">📅</span>Ordered Date
                        </th>
                        <th className="py-4 px-4 text-gray-600 font-medium text-sm">
                            <span className="mr-2">📦</span>Product Name
                        </th>
                        <th className="py-4 px-4 text-gray-600 font-medium text-sm">
                            <span className="mr-2">💵</span>Product Price
                        </th>
                        <th className="py-4 px-4 text-gray-600 font-medium text-sm">
                            <span className="mr-2">📊</span>Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order: any, index: number) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-4">
                                <span className="text-gray-400 mr-2">≡</span>
                                {order.id}
                            </td>
                            <td className="py-4 px-4 text-gray-600">
                                {order.date}
                            </td>
                            <td className="py-4 px-4 text-gray-600">
                                {order.product}
                            </td>
                            <td className="py-4 px-4 text-gray-700">
                                {order.price} USD
                            </td>
                            <td className="py-4 px-4">
                                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                                    {order.status === 'Delivered' && '✓ '}
                                    {order.status === 'Cancelled' && '✕ '}
                                    {order.status === 'Pending' && '○ '}
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;