import React from 'react';
import DataTable from './DataTabel';
import "./App.css";

const data = [
  {
    firstName: 'Prasath',
    lastName: 'C',
    email: 'prasath@gmail.com',
    phone: '123-456-7890',
  },
  {
    firstName: 'Satheesh',
    lastName: 'R',
    email: 'Satheesh@example.com',
    phone: '987-654-3210',
  },
  // Add more data items here
];

const App = () => {
  return (
    <div>
      <h1>Table with Search</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;
