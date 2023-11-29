<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/>';
</script>

<Icon {...p} name='tally-3' svg={svg}/>
