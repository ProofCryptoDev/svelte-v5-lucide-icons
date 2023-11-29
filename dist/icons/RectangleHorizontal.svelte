<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="20" height="12" x="2" y="6" rx="2"/>';
</script>

<Icon {...p} name='rectangle-horizontal' svg={svg}/>
