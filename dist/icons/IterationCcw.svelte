<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"/><polyline points="16 14 20 18 16 22"/>';
</script>

<Icon {...p} name='iteration-ccw' svg={svg}/>
