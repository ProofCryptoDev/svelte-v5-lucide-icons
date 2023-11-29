<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>';
</script>

<Icon {...p} name='line-chart' svg={svg}/>
