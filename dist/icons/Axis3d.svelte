<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 4v16h16"/><path d="m4 20 7-7"/>';
</script>

<Icon {...p} name='axis-3d' svg={svg}/>
