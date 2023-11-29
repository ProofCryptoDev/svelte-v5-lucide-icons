<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>';
</script>

<Icon {...p} name='list-filter' svg={svg}/>
