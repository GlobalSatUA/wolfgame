import React from 'react';

interface PrivacyPolicyBtnProps {
  className?: string;
}

const PrivacyPolicyBtn: React.FC<PrivacyPolicyBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      Privacy policy
    </button>
  );
};

export default PrivacyPolicyBtn;