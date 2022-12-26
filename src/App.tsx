import React, { useState } from 'react';
import './App.css';
import Box from './component/Box';
import Draggable from './component/Draggable';

function App() {
  const [boxPosition, setBoxPosition] = useState({ top: '0', left: '0' });
  return (
    <div className='App'>
      <Draggable boxPosition={boxPosition} setBoxPosition={setBoxPosition} />
    </div>
  );
}

export default App;
