<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/>';
</script>

<Icon {...p} name='tv-2' svg={svg}/>
