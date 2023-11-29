<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>';
</script>

<Icon {...p} name='arrow-down' svg={svg}/>
