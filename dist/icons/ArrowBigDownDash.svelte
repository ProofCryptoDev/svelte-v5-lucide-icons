<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M15 5H9"/><path d="M15 9v3h4l-7 7-7-7h4V9h6z"/>';
</script>

<Icon {...p} name='arrow-big-down-dash' svg={svg}/>
