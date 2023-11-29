<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M19 15V9"/><path d="M15 15h-3v4l-7-7 7-7v4h3v6z"/>';
</script>

<Icon {...p} name='arrow-big-left-dash' svg={svg}/>
