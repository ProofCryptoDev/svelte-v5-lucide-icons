<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"/><rect width="10" height="7" x="12" y="13.5" ry="2"/>';
</script>

<Icon {...p} name='picture-in-picture' svg={svg}/>
