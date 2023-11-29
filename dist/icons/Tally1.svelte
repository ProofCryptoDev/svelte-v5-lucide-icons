<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 4v16"/>';
</script>

<Icon {...p} name='tally-1' svg={svg}/>
