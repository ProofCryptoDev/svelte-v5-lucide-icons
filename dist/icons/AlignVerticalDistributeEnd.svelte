<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 20h20"/><path d="M2 10h20"/>';
</script>

<Icon {...p} name='align-vertical-distribute-end' svg={svg}/>
