<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>';
</script>

<Icon {...p} name='check-circle-2' svg={svg}/>
