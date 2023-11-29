<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="12" height="20" x="6" y="2" rx="2"/>';
</script>

<Icon {...p} name='rectangle-vertical' svg={svg}/>
