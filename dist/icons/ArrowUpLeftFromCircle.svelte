<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 8V2h6"/><path d="m2 2 10 10"/><path d="M12 2A10 10 0 1 1 2 12"/>';
</script>

<Icon {...p} name='arrow-up-left-from-circle' svg={svg}/>
