<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>';
</script>

<Icon {...p} name='move-down' svg={svg}/>
