<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>';
</script>

<Icon {...p} name='arrow-right' svg={svg}/>
