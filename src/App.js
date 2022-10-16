import React, { useState } from 'react';
import './App.css';
import {StatusCard} from './StatusCard';
import {ActionsCard} from './ActionsCard';
import Context from './Context';

function App() {
  const [counter, setCounter] = useState(0);

  const count = n => setCounter(n + counter);

  return (
    <Context.Provider
      value={{
        counter,
        count,
      }}
    >
      <div className="App">
        <header className="App-header">
          <StatusCard />
          <ActionsCard />
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
