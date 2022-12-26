import React, { DragEvent, useEffect, useRef } from 'react';

interface BoxProps {
  boxPosition: { top: string; left: string };
  setBoxPosition: React.Dispatch<
    React.SetStateAction<{
      top: string;
      left: string;
    }>
  >;
}

function Box({ boxPosition, setBoxPosition }: BoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      const boxWidth = boxRef.current?.offsetWidth;
      const boxHeight = boxRef.current?.offsetHeight;
      const left = e.clientX - (boxWidth as number) / 2 + 'px';
      const top = e.clientY - (boxHeight as number) / 2 + 'px';
      const right = e.clientX + (boxWidth as number) / 2;
      const bottom = e.clientY + (boxHeight as number) / 2;
      const isOverClientWidth = Number(left.slice(0, -2)) < 0 || right > window.innerWidth;
      const isOverClientHeight = Number(top.slice(0, -2)) < 0 || bottom > window.innerHeight;
      if (isOverClientWidth || isOverClientHeight) {
        return;
      }
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
    <div data-cy='box' ref={boxRef} style={boxPosition} className='box' draggable={true} onDragStart={startDrag}>
      Drag Me!
    </div>
  );
}

export default Box;
