<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>';
</script>

<Icon {...p} name='filter' svg={svg}/>
