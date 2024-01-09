"use client"
import { useState } from 'react';

function Button({ onConvertShapesToJson }:any) {
  const [drawnShapes, setDrawnShapes] = useState([]);

  return (
    <button onClick={() => onConvertShapesToJson(drawnShapes)}>
      Convert to JSON
    </button>
  );
}

export default Button;