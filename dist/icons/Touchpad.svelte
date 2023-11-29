<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 14h20"/><path d="M12 20v-6"/>';
</script>

<Icon {...p} name='touchpad' svg={svg}/>
