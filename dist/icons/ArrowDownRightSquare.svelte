<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 8 8 8"/><path d="M16 8v8H8"/>';
</script>

<Icon {...p} name='arrow-down-right-square' svg={svg}/>
