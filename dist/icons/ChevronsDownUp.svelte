<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/>';
</script>

<Icon {...p} name='chevrons-down-up' svg={svg}/>
