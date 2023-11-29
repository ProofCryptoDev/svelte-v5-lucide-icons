<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M10 2v20"/><path d="M20 2v20"/>';
</script>

<Icon {...p} name='align-horizontal-distribute-end' svg={svg}/>
