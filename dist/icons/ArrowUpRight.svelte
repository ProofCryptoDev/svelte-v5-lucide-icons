<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>';
</script>

<Icon {...p} name='arrow-up-right' svg={svg}/>
