<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>';
</script>

<Icon {...p} name='chevrons-up-down' svg={svg}/>
