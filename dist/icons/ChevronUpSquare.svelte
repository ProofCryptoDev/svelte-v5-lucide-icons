<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 14 4-4 4 4"/>';
</script>

<Icon {...p} name='chevron-up-square' svg={svg}/>
