<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 10h10"/><path d="M7 14h10"/>';
</script>

<Icon {...p} name='square-equal' svg={svg}/>
