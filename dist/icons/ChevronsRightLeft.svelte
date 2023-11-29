<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m20 17-5-5 5-5"/><path d="m4 17 5-5-5-5"/>';
</script>

<Icon {...p} name='chevrons-right-left' svg={svg}/>
