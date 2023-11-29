<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/>';
</script>

<Icon {...p} name='framer' svg={svg}/>
