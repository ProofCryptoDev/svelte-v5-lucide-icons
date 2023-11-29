<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m6 9 6 6 6-6"/>';
</script>

<Icon {...p} name='chevron-down' svg={svg}/>
