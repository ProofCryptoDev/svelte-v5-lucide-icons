<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>';
</script>

<Icon {...p} name='arrow-left' svg={svg}/>
