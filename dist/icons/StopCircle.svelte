<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><rect width="6" height="6" x="9" y="9"/>';
</script>

<Icon {...p} name='stop-circle' svg={svg}/>
