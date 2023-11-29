<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/>';
</script>

<Icon {...p} name='heading' svg={svg}/>
