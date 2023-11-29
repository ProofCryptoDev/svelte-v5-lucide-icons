<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 10"/>';
</script>

<Icon {...p} name='clock-10' svg={svg}/>
