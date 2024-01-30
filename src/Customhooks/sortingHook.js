import { useState } from 'react';

function useSortableData(array, defaultSortConfig = { key: '', direction: 'ascending' }) {
  const [sortConfig, setSortConfig] = useState(defaultSortConfig);

  const sortedItems = [...array].sort((a, b) => {
    if (sortConfig.key === '') {
      return 0;
    }

    const varA = a[sortConfig.key];
    const varB = b[sortConfig.key];

    const comparison = varA.localeCompare(varB, undefined, { numeric: true });

    return sortConfig.direction === 'ascending' ? comparison : -comparison;
  });

  const requestSort = (key, defaultDirection = 'ascending') => {
    const direction =
      key === sortConfig.key && sortConfig.direction === 'ascending'
        ? 'descending'
        : defaultDirection;
    setSortConfig({ key, direction });
  };

  return { sortedItems, requestSort };
}

export default useSortableData;

// how to use it 

/*
    import React from 'react';
import useSortableData from './useSortableData';

const YourComponent = () => {
  const data = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];

  const { sortedItems, requestSort } = useSortableData(data, {
    key: 'name',
    direction: 'ascending',
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Name</th>
            <th onClick={() => requestSort('age', 'descending')}>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;


*/