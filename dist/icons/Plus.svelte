<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 12h14"/><path d="M12 5v14"/>';
</script>

<Icon {...p} name='plus' svg={svg}/>
