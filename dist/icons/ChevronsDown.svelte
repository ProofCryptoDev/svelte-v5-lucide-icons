<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/>';
</script>

<Icon {...p} name='chevrons-down' svg={svg}/>
