<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M10 7v10"/><path d="M16 17a2 2 0 0 1-2-2V7"/>';
</script>

<Icon {...p} name='pi-square' svg={svg}/>
