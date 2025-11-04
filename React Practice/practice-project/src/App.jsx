import React from 'react';
import { Sakib } from './UserContext';
import Card from './Card';

const App = () => {
  const userName = "Kuttar baccha";

  return (
    <div>
      <Sakib.Provider value={userName}>
        <Card />
      </Sakib.Provider>
    </div>
  );
};

export default App;
