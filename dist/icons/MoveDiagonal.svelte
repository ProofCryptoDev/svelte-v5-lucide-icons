<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polyline points="13 5 19 5 19 11"/><polyline points="11 19 5 19 5 13"/><line x1="19" x2="5" y1="5" y2="19"/>';
</script>

<Icon {...p} name='move-diagonal' svg={svg}/>
