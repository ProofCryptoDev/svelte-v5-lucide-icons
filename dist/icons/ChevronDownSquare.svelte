<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 10-4 4-4-4"/>';
</script>

<Icon {...p} name='chevron-down-square' svg={svg}/>
