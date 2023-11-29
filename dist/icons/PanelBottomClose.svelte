<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="15" y2="15"/><path d="m15 8-3 3-3-3"/>';
</script>

<Icon {...p} name='panel-bottom-close' svg={svg}/>
