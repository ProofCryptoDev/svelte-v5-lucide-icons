<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>';
</script>

<Icon {...p} name='arrow-up-square' svg={svg}/>
