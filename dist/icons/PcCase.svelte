<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M15 14h.01"/><path d="M9 6h6"/><path d="M9 10h6"/>';
</script>

<Icon {...p} name='pc-case' svg={svg}/>
