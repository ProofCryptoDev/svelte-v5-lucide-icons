<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m2 8 2 2-2 2 2 2-2 2"/><path d="m22 8-2 2 2 2-2 2 2 2"/><path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"/><path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34"/><line x1="2" x2="22" y1="2" y2="22"/>';
</script>

<Icon {...p} name='vibrate-off' svg={svg}/>
