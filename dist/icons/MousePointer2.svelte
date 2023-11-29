<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/>';
</script>

<Icon {...p} name='mouse-pointer-2' svg={svg}/>
