<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="18" r="4"/><path d="M16 18V2"/>';
</script>

<Icon {...p} name='music-3' svg={svg}/>
