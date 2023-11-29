<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="6" height="14" x="3" y="5" rx="2"/><rect width="6" height="10" x="15" y="7" rx="2"/><path d="M3 2v20"/><path d="M21 2v20"/>';
</script>

<Icon {...p} name='align-horizontal-space-between' svg={svg}/>
