<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 16V8l4 4 4-4v8"/>';
</script>

<Icon {...p} name='m-square' svg={svg}/>
