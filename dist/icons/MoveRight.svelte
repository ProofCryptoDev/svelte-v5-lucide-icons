<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>';
</script>

<Icon {...p} name='move-right' svg={svg}/>
