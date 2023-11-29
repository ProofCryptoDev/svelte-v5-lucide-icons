<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/>';
</script>

<Icon {...p} name='arrow-right-to-line' svg={svg}/>
