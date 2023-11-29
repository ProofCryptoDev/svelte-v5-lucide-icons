<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 3v6"/><circle cx="12" cy="12" r="3"/><path d="M12 15v6"/>';
</script>

<Icon {...p} name='git-commit-vertical' svg={svg}/>
