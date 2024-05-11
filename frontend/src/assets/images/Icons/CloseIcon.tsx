import { IconProps } from "./model";

export function CloseIcon({ style }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      style={style}
    >
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 8 8 8m0-8-8 8"
      />
    </svg>
  )
}
