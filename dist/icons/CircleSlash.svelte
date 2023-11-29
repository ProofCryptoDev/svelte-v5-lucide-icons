<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<line x1="9" x2="15" y1="15" y2="9"/><circle cx="12" cy="12" r="10"/>';
</script>

<Icon {...p} name='circle-slash' svg={svg}/>
