<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/>';
</script>

<Icon {...p} name='disc-album' svg={svg}/>
