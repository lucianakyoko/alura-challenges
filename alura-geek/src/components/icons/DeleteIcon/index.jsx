import React from "react";

import {
  DeleteIconContainer,
} from './style';

export function DeleteIcon() {
  return (
    <DeleteIconContainer
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_166_4040)">
        <path
          fill="#fff"
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_166_4040">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </DeleteIconContainer>
  );
}