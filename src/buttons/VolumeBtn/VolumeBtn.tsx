import React from 'react';

interface VolumeBtnProps {
  className?: string;
}

const VolumeBtn: React.FC<VolumeBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      +
    </button>
  );
};

export default VolumeBtn;