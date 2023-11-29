<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M8 6h10"/><path d="M6 12h9"/><path d="M11 18h7"/>';
</script>

<Icon {...p} name='gantt-chart' svg={svg}/>
