import React from 'react';
import logo from './logo.svg';
import Search from './components/search/search';

function App() {
  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData);
  };
  return (
    <div className="max-width-md mx-auto my-20">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
