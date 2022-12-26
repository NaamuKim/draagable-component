import React, { useState, useEffect, useCallback } from 'react';
import { BOX_SIZE } from '../constants';
import Box from './Box';
interface DraggableProps {
  boxPosition: { top: string; left: string };
  setBoxPosition: React.Dispatch<
    React.SetStateAction<{
      top: string;
      left: string;
    }>
  >;
}

function Draggable({ boxPosition, setBoxPosition }: DraggableProps) {
  const [areaSize, setAreaSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const resizeHandler = useCallback(() => {
    // 박스 정중앙에 위치
    setBoxPosition({
      top: document.body.clientHeight / 2 - BOX_SIZE.height / 2 + 'px',
      left: document.body.clientWidth / 2 - BOX_SIZE.width / 2 + 'px',
    });
    setAreaSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return (
    <div style={areaSize} className='draggable-area'>
      <Box boxPosition={boxPosition} setBoxPosition={setBoxPosition} />
    </div>
  );
}

export default Draggable;
