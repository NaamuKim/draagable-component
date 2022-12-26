import React, { ReactNode } from 'react';

function Draggable({ children }: { children: ReactNode }) {
  return <div className='draggable-area'>{children}</div>;
}

export default Draggable;
