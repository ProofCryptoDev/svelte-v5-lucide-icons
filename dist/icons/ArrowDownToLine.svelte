<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>';
</script>

<Icon {...p} name='arrow-down-to-line' svg={svg}/>
