<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 3h6l6 18h6"/><path d="M14 3h7"/>';
</script>

<Icon {...p} name='option' svg={svg}/>
