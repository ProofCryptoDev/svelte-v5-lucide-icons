<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>';
</script>

<Icon {...p} name='circle-dot' svg={svg}/>
