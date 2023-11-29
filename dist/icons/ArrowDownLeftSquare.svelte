<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 8-8 8"/><path d="M16 16H8V8"/>';
</script>

<Icon {...p} name='arrow-down-left-square' svg={svg}/>
