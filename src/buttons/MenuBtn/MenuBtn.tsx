import React from 'react';

interface MenuBtnProps {
    onClick?: () => void;
    className?: string;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      Menu
    </button>
  );
};

export default MenuBtn;