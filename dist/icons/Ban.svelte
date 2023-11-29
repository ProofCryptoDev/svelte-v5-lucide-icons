<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>';
</script>

<Icon {...p} name='ban' svg={svg}/>
