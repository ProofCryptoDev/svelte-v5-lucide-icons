<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m4 6 3-3 3 3"/><path d="M7 17V3"/><path d="m14 6 3-3 3 3"/><path d="M17 17V3"/><path d="M4 21h16"/>';
</script>

<Icon {...p} name='arrows-up-from-line' svg={svg}/>
