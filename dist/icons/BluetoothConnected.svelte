<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 7 10 10-5 5V2l5 5L7 17"/><line x1="18" x2="21" y1="12" y2="12"/><line x1="3" x2="6" y1="12" y2="12"/>';
</script>

<Icon {...p} name='bluetooth-connected' svg={svg}/>
