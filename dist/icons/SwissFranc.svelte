<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M10 21V3h8"/><path d="M6 16h9"/><path d="M10 9.5h7"/>';
</script>

<Icon {...p} name='swiss-franc' svg={svg}/>
