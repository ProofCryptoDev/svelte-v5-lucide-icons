<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/>';
</script>

<Icon {...p} name='music-2' svg={svg}/>
