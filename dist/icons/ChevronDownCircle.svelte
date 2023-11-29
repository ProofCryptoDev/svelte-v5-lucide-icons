<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/>';
</script>

<Icon {...p} name='chevron-down-circle' svg={svg}/>
