<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M7 17V7h10"/><path d="M17 17 7 7"/>';
</script>

<Icon {...p} name='arrow-up-left' svg={svg}/>
