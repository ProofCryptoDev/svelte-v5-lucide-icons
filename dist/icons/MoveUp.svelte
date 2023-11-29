<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M8 6L12 2L16 6"/><path d="M12 2V22"/>';
</script>

<Icon {...p} name='move-up' svg={svg}/>
