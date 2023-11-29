<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 3v18h18"/><rect width="12" height="4" x="7" y="5" rx="1"/><rect width="7" height="4" x="7" y="13" rx="1"/>';
</script>

<Icon {...p} name='bar-chart-horizontal-big' svg={svg}/>
