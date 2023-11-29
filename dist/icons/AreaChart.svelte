<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 3v18h18"/><path d="M7 12v5h12V8l-5 5-4-4Z"/>';
</script>

<Icon {...p} name='area-chart' svg={svg}/>
