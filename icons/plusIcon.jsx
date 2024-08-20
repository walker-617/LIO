import React from 'react';

const PlusIcon = ({ height = 9, width = 9, color = '#000000' }) => (
  <svg
    viewBox="0 -0.5 9 9"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height={height}
    width={width}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-345.000000, -206.000000)" fill={color}>
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <polygon id="plus_mini-[#1523]" points="298 49 298 51 294.625 51 294.625 54 292.375 54 292.375 51 289 51 289 49 292.375 49 292.375 46 294.625 46 294.625 49"></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default PlusIcon;
