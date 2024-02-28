"use client";
/*
Usage: pass in tableProps as object of react bootstrap table props i.e. {'bordered': true}
pass in tableCols as an array of objects of the table column headers i.e. [{ header: 'fileName', name: 'File Name' }, ...]
pass in tableData as an array of objects where each object represents a row of the table i.e. [{ Name: 'John', Age: 23, ...}, ...]
*/
import React, { useState } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ tableProps, tableCols, tableData, customColumns }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (sortConfig.key && a[sortConfig.key] !== b[sortConfig.key]) {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] < b[sortConfig.key] ? -1 : 1;
      } else {
        return a[sortConfig.key] > b[sortConfig.key] ? -1 : 1;
      }
    }
    return 0;
  });

  return (
    <BootstrapTable {...tableProps}>
      <thead>
        <tr>
          {tableCols.map((column) => (
            <th key={column.header} onClick={() => handleSort(column.header)}>
              {column.name}
              {sortConfig.key === column.header && (
                <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {tableCols.map((column) => (
              <td key={column.header + '-body'}>
                {customColumns && customColumns[column.header]
                  ? customColumns[column.header](rowData)
                  : rowData[column.header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;

