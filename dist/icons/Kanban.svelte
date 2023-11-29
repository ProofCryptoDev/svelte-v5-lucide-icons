<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/>';
</script>

<Icon {...p} name='kanban' svg={svg}/>
