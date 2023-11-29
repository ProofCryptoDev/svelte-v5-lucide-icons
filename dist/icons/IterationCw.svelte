<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"/><polyline points="8 22 4 18 8 14"/>';
</script>

<Icon {...p} name='iteration-cw' svg={svg}/>
