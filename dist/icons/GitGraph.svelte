<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="5" cy="6" r="3"/><path d="M5 9v6"/><circle cx="5" cy="18" r="3"/><path d="M12 3v18"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/>';
</script>

<Icon {...p} name='git-graph' svg={svg}/>
