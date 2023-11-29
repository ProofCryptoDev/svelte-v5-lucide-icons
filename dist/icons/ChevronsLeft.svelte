<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>';
</script>

<Icon {...p} name='chevrons-left' svg={svg}/>
