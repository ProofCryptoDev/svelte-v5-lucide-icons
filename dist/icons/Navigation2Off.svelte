<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17"/><path d="M14.53 8.88 12 2l-1.17 3.17"/><line x1="2" x2="22" y1="2" y2="22"/>';
</script>

<Icon {...p} name='navigation-2-off' svg={svg}/>
