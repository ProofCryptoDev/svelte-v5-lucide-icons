<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>';
</script>

<Icon {...p} name='mouse' svg={svg}/>
