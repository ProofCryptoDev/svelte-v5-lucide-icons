<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43"/><path d="M17.39 11.73 22 2l-9.73 4.61"/><line x1="2" x2="22" y1="2" y2="22"/>';
</script>

<Icon {...p} name='navigation-off' svg={svg}/>
