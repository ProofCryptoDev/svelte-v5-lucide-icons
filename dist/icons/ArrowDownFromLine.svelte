<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M19 3H5"/><path d="M12 21V7"/><path d="m6 15 6 6 6-6"/>';
</script>

<Icon {...p} name='arrow-down-from-line' svg={svg}/>
