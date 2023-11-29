<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/>';
</script>

<Icon {...p} name='arrow-big-left' svg={svg}/>
