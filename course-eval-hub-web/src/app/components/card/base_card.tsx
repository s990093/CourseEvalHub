import React from "react";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
  color?: string;
  onClick?: () => void; // Add onClick prop
}

const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className,
  color = "#38bdf8",
  rounded = "30",
  onClick,
}) => {
  return (
    <div
      className={`${className} flex bg-[#bae6fd] rounded-[30px] shadow-lg`}
      onClick={onClick} // Attach onClick handler to the div
    >
      {children}
    </div>
  );
};

export default BaseCard;
