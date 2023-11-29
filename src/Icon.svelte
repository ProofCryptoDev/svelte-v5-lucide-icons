<script lang='ts'>
  let {
    name,
    color = 'currentColor',
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    svg,
    className,
    ...p
  } = $props<LucideIconProps>();
</script>

<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 24 24'
  fill='none'
  stroke-linecap='round'
  stroke-linejoin='round'
  {...p}
  width={size}
  height={size}
  stroke={color}
  stroke-width={absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth}
  class={`lucide lucide-${name}${className ? (' ' + className) : ''}`}
>
  {@html svg}
</svg>
