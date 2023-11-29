<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polyline points="14 15 9 20 4 15"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/>';
</script>

<Icon {...p} name='corner-left-down' svg={svg}/>
