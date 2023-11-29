<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 16V4a2 2 0 0 1 2-2h11"/><path d="M5 14H4a2 2 0 1 0 0 4h1"/><path d="M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"/>';
</script>

<Icon {...p} name='book-copy' svg={svg}/>
