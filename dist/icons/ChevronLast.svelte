<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 18 6-6-6-6"/><path d="M17 6v12"/>';
</script>

<Icon {...p} name='chevron-last' svg={svg}/>
