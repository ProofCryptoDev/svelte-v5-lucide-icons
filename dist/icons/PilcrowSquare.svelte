<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17"/><path d="M12 7v10"/><path d="M16 7v10"/>';
</script>

<Icon {...p} name='pilcrow-square' svg={svg}/>
