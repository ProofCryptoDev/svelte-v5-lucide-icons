<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/><path d="m16 12 5 3-5 3v-6Z"/>';
</script>

<Icon {...p} name='list-video' svg={svg}/>
