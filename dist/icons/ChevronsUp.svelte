<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/>';
</script>

<Icon {...p} name='chevrons-up' svg={svg}/>
