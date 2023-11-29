<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M11 19H5V13"/><path d="M19 5L5 19"/>';
</script>

<Icon {...p} name='move-down-left' svg={svg}/>
