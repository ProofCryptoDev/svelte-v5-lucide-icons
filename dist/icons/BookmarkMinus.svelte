<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/><line x1="15" x2="9" y1="10" y2="10"/>';
</script>

<Icon {...p} name='bookmark-minus' svg={svg}/>
