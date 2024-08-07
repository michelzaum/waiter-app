import { IconProps } from "../model";

export function ProfileIcon({ style }: IconProps) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M12.1 6.40002C13.3 7.60002 13.3 9.50002 12.1 10.6C10.9 11.7 9.00002 11.8 7.90002 10.6C6.80002 9.40002 6.70002 7.50002 7.90002 6.40002C9.10002 5.30002 10.9 5.20002 12.1 6.40002M3.90002 17C5.50002 15.5 7.60002 14.5 10 14.5C12.3 14.5 14.5 15.4 16.1 17M2 14C1.4 12.8 1 11.4 1 10C1 5 5 1 10 1C15 1 19 5 19 10C19 11.4 18.6 12.8 18 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
