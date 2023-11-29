<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/>';
</script>

<Icon {...p} name='chevrons-left-right' svg={svg}/>
