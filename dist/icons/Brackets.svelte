<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M16 3h3v18h-3"/><path d="M8 21H5V3h3"/>';
</script>

<Icon {...p} name='brackets' svg={svg}/>
