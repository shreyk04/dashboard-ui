import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import OrderTable from './components/OrderTable';

function App() {
  const orders = [
    { id: '#123245', date: '14-12-2020', product: 'Decorative box', price: 125, status: 'Delivered' },
    { id: '#678457', date: '13-12-2020', product: 'Plantation box', price: 120, status: 'Cancelled' },
    { id: '#123245', date: '12-12-2020', product: 'Camera film', price: 156, status: 'Delivered' },
    { id: '#123245', date: '12-12-2020', product: 'Camera film', price: 156, status: 'Delivered' },
    { id: '#87245', date: '10-12-2020', product: 'Visual lace', price: 125, status: 'Delivered' },
    { id: '#273245', date: '11-11-2020', product: 'Decorative box', price: 180, status: 'Pending' },
    { id: '#789245', date: '10-11-2020', product: 'Decorative box', price: 190, status: 'Delivered' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8 overflow-auto">
        <Header />

        <div className="mb-2 flex">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
            Orders <span>😍</span>
          </h1>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white rounded-lg font-medium shadow-sm">
              Daily
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-white rounded-lg">
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="New Orders"
            count={245}
            percentage={20}
            bgColor="bg-blue-100"
            textColor="text-blue-600"
          />
          <StatsCard
            title="Pending Orders"
            count={123}
            percentage={11}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
          <StatsCard
            title="Delivered Orders"
            count={150}
            percentage={18}
            bgColor="bg-orange-100"
            textColor="text-orange-600"
          />
        </div>

        {/* orders table */}
        <OrderTable orders={orders} />
      </div>
    </div>
  );
}

export default App;