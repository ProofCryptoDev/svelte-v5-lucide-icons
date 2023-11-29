<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/>';
</script>

<Icon {...p} name='chevron-up-circle' svg={svg}/>
