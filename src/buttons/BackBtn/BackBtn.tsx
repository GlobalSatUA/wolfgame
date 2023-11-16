import React, { FC } from 'react';

interface BackBtnProps {
  className?: string;
}

const BackBtn: FC<BackBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      Back
    </button>
  );
};

export default BackBtn;