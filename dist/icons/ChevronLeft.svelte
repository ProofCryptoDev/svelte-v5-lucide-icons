<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m15 18-6-6 6-6"/>';
</script>

<Icon {...p} name='chevron-left' svg={svg}/>
