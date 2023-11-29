<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M7 10h10"/><path d="M7 14h10"/><circle cx="12" cy="12" r="10"/>';
</script>

<Icon {...p} name='circle-equal' svg={svg}/>
