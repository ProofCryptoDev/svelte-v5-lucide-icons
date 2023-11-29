<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>';
</script>

<Icon {...p} name='power' svg={svg}/>
