<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="3 11 22 2 13 21 11 13 3 11"/>';
</script>

<Icon {...p} name='navigation' svg={svg}/>
