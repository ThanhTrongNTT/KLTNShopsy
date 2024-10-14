import React from "react";
type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};
export const RightArrowIcon = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style, width: "25px", height: "25px" }}
      onClick={onClick}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M242.16 97.1599L345 200L242.16 302.84"
        stroke="#191919"
        stroke-width="12"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M345 200L55 200"
        stroke="#191919"
        stroke-width="12"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LeftArrowIcon = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style, width: "25px", height: "25px" }}
      onClick={onClick}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M157.84 302.84L55 200L157.84 97.1602"
        stroke="#191919"
        stroke-width="12"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M55 200L345 200"
        stroke="#191919"
        stroke-width="12"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
