<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M16 8V6H8v2"/><path d="M12 6v7"/><path d="M10 13h4"/>';
</script>

<Icon {...p} name='book-type' svg={svg}/>
