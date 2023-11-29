<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>';
</script>

<Icon {...p} name='chevrons-right' svg={svg}/>
