import React from 'react';
import Sidebar from './components/Sidebar';


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


    </div>
  );
}

export default App;
