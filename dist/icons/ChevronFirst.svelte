<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m17 18-6-6 6-6"/><path d="M7 6v12"/>';
</script>

<Icon {...p} name='chevron-first' svg={svg}/>
