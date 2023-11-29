/// <reference types="svelte" />

interface IconProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  className?: string;
}

interface LucideIconProps extends IconProps {
  name: string;
  svg: string;
}
