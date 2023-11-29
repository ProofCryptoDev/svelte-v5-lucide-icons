<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m9 9-2 2 2 2"/><path d="m13 13 2-2-2-2"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>';
</script>

<Icon {...p} name='search-code' svg={svg}/>
