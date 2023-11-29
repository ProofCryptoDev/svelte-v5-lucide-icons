<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="6" height="10" x="9" y="7" rx="2"/><path d="M4 22V2"/><path d="M20 22V2"/>';
</script>

<Icon {...p} name='align-horizontal-space-around' svg={svg}/>
