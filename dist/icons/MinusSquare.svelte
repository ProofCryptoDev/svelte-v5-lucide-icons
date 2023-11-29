<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/>';
</script>

<Icon {...p} name='minus-square' svg={svg}/>
