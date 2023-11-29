<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<line x1="6" x2="6" y1="4" y2="20"/><polygon points="10,4 20,12 10,20"/>';
</script>

<Icon {...p} name='step-forward' svg={svg}/>
