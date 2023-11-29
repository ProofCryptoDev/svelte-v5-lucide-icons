<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="5 3 19 12 5 21 5 3"/>';
</script>

<Icon {...p} name='play' svg={svg}/>
