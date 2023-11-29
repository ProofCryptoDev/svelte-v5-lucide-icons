<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>';
</script>

<Icon {...p} name='arrow-down-right' svg={svg}/>
