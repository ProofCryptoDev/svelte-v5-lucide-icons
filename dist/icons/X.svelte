<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
</script>

<Icon {...p} name='x' svg={svg}/>
