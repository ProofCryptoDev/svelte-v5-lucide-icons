<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/>';
</script>

<Icon {...p} name='chevron-right-circle' svg={svg}/>
