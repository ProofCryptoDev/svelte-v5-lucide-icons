<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>';
</script>

<Icon {...p} name='mountain' svg={svg}/>
