<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M8 11h8"/><path d="M12 15V7"/>';
</script>

<Icon {...p} name='shield-plus' svg={svg}/>
