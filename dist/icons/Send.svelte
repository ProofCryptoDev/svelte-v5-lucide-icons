<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
</script>

<Icon {...p} name='send' svg={svg}/>
