<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>';
</script>

<Icon {...p} name='zap' svg={svg}/>
