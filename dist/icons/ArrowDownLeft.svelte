<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>';
</script>

<Icon {...p} name='arrow-down-left' svg={svg}/>
