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
      <Header />

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="New Orders"
          count={245}
          percentage={20}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
        />
        <StatsCard
          title="Pending Orders"
          count={123}
          percentage={11}
          bgColor="bg-purple-50"
          textColor="text-purple-600"
        />
        <StatsCard
          title="Delivered Orders"
          count={150}
          percentage={18}
          bgColor="bg-orange-50"
          textColor="text-orange-600"
        />
      </div>

      <OrderTable orders={orders} />

    </div>
  );
}

export default App;
