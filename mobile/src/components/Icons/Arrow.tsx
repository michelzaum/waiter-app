import { SvgXml } from 'react-native-svg';
import { IconProps } from './types';

export function Arrow({ color }: IconProps) {
  const markup = `<svg width="14" height="14" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 1L1 5L5 9" stroke=${color || "#323232"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}
