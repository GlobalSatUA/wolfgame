import React from 'react';

interface ScoreDisplayProps {
  label?: string;
  score: number;
  className?: string;
}

function ScoreDisplay({ label, score, className }: ScoreDisplayProps) {
  return (
    <div className={className}>
      {label && <span>{label}: </span>}
      <span>{score}</span>
    </div>
  );
}

export default ScoreDisplay;