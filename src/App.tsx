import { useState } from 'react'
import { Stage, Container } from '@pixi/react';

function App() {
  const x = 0;
  const y = 0;
  const [angle, setAngle] = useState(0); 
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0});

  return (
    <Stage
    key={angle}
    width={size.width}
    height={size.height}
  >
      <Container
        x={x}
        y={y}
        pivot={{ x, y }}
        angle={angle}
      />
  </Stage>
  )
}

export default App
