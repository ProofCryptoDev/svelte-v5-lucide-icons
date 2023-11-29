<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M9 2h6l3 7H6l3-7Z"/><path d="M12 9v13"/><path d="M9 22h6"/>';
</script>

<Icon {...p} name='lamp-floor' svg={svg}/>
