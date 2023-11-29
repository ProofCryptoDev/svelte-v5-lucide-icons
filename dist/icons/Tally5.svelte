<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/><path d="M19 4v16"/><path d="M22 6 2 18"/>';
</script>

<Icon {...p} name='tally-5' svg={svg}/>
