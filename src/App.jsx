import React from 'react';
import NestedList from './NestedList';
import './style.css';

const App = () => {
  const nestedData = [
    { id: 1, name: 'src', isDir: true },
    { id: 2, name: 'public', isDir: true },
    { id: 3, name: 'scripts', isDir: true },
    { id: 4, name: 'build', isDir: true },
    { id: 5, name: 'favicon.ico', parent: 2 },
    { id: 6, name: 'logo.png', parent: 2 },
    { id: 7, name: 'index.html', parent: 2 },
    { id: 8, name: 'robots.txt', parent: 2 },
    { id: 9, name: 'components', parent: 1, isDir: true },
    { id: 10, name: 'styles', parent: 1, isDir: true },
    { id: 11, name: 'index.tsx', parent: 1 },
    { id: 12, name: 'setupTests.ts', parent: 1 },
    { id: 13, name: 'App', parent: 9, isDir: true },
    { id: 14, name: 'App.scss', parent: 13 },
    { id: 15, name: 'main.scss', parent: 10 },
    { id: 16, name: 'App.tsx', parent: 13 },
    { id: 17, name: 'index.ts', parent: 9 },
  ];

  return (
      <NestedList data={nestedData} />
  );
};

export default App;
