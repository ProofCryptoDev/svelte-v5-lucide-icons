<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 7v5"/><path d="M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"/>';
</script>

<Icon {...p} name='power-square' svg={svg}/>
