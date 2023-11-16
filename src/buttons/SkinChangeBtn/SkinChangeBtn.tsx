import React from 'react';

interface SkinChangeBtnProps {
  className?: string;
}

const SkinChangeBtn: React.FC<SkinChangeBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      Change skin
    </button>
  );
};

export default SkinChangeBtn;