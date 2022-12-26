import React from 'react';
import './App.css';
import Box from './component/Box';
import Draggable from './component/Draggable';

function App() {
  return (
    <div className='App'>
      <Draggable>
        <Box />
      </Draggable>
    </div>
  );
}

export default App;
