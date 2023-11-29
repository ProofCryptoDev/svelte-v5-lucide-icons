<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 16s9-15 20-4C11 23 2 8 2 8"/>';
</script>

<Icon {...p} name='fish-symbol' svg={svg}/>
