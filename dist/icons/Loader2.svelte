<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>';
</script>

<Icon {...p} name='loader-2' svg={svg}/>
