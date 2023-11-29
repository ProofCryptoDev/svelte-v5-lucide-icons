<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"/>';
</script>

<Icon {...p} name='star-half' svg={svg}/>
