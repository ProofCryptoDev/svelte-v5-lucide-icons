<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M6 8L2 12L6 16"/><path d="M2 12H22"/>';
</script>

<Icon {...p} name='move-left' svg={svg}/>
