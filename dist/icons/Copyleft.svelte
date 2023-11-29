<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/>';
</script>

<Icon {...p} name='copyleft' svg={svg}/>
