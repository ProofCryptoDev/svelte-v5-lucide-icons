<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<line x1="12" x2="12" y1="3" y2="21"/><polyline points="8 8 4 12 8 16"/><polyline points="16 16 20 12 16 8"/>';
</script>

<Icon {...p} name='separator-vertical' svg={svg}/>
