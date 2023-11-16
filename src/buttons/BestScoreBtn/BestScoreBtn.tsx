import React, { FC } from 'react';

interface BestScoreBtnProps {
  onClick?: () => void;
  className?: string;
}

const BestScoreBtn: FC<BestScoreBtnProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      Best Score
    </button>
  );
};

export default BestScoreBtn;