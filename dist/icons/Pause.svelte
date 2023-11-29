<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/>';
</script>

<Icon {...p} name='pause' svg={svg}/>
