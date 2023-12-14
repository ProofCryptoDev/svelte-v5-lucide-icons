/// <reference types="svelte" />

interface IconProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  class?: string;
}

interface LucideIconProps extends IconProps {
  name: string;
  svg: string;
}
