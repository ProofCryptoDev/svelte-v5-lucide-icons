<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polyline points="5 11 5 5 11 5"/><polyline points="19 13 19 19 13 19"/><line x1="5" x2="19" y1="5" y2="19"/>';
</script>

<Icon {...p} name='move-diagonal-2' svg={svg}/>
