<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 3v14"/><path d="M5 10h14"/><path d="M5 21h14"/>';
</script>

<Icon {...p} name='diff' svg={svg}/>
