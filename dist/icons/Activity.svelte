<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>';
</script>

<Icon {...p} name='activity' svg={svg}/>
