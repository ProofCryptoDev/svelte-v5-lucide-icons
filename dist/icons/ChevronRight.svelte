<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m9 18 6-6-6-6"/>';
</script>

<Icon {...p} name='chevron-right' svg={svg}/>
