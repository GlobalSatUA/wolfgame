import React from 'react';

interface StartBtnProps {
  className?: string;
}

const StartBtn: React.FC<StartBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      Start
    </button>
  );
};

export default StartBtn;