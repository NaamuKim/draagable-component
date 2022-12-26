import React, { DragEvent, useEffect, useRef, useState } from 'react';

function Box() {
  const [boxPosition, setBoxPosition] = useState({ top: '0', left: '0' });
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      const boxWidth = boxRef.current?.offsetWidth;
      const boxHeight = boxRef.current?.offsetHeight;
      const left = e.pageX - (boxWidth as number) / 2 + 'px';
      const top = e.pageY - (boxHeight as number) / 2 + 'px';
      setBoxPosition({ left, top });
    };

    const mouseDown = (e: MouseEvent) => {
      document.addEventListener('mousemove', moveMouse);
      boxRef.current!.onmouseup = mouseUp;
    };

    if (boxRef.current) {
      boxRef.current.onmousedown = mouseDown;
    }
    const mouseUp = () => {
      document.removeEventListener('mousemove', moveMouse);
      boxRef.current!.onmouseup = null;
    };

    return () => {
      document.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  const startDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div ref={boxRef} style={boxPosition} className='box' draggable={true} onDragStart={startDrag}>
      Box
    </div>
  );
}

export default Box;
