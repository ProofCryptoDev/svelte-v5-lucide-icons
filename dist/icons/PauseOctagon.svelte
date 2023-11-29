<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M10 15V9"/><path d="M14 15V9"/><path d="M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"/>';
</script>

<Icon {...p} name='pause-octagon' svg={svg}/>
