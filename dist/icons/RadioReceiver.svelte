<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 16v2"/><path d="M19 16v2"/><rect width="20" height="8" x="2" y="8" rx="2"/><path d="M18 12h0"/>';
</script>

<Icon {...p} name='radio-receiver' svg={svg}/>
