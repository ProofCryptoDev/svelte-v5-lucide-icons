<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 5v14"/><path d="M21 12H7"/><path d="m15 18 6-6-6-6"/>';
</script>

<Icon {...p} name='arrow-right-from-line' svg={svg}/>
