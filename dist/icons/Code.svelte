<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>';
</script>

<Icon {...p} name='code' svg={svg}/>
