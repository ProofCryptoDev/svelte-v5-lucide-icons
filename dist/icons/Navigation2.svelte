<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="12 2 19 21 12 17 5 21 12 2"/>';
</script>

<Icon {...p} name='navigation-2' svg={svg}/>
