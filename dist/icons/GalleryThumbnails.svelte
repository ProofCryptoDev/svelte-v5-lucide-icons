<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/>';
</script>

<Icon {...p} name='gallery-thumbnails' svg={svg}/>
