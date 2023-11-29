<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/>';
</script>

<Icon {...p} name='text' svg={svg}/>
