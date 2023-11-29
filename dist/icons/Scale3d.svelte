<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M5 7v12h12"/><path d="m5 19 6-6"/>';
</script>

<Icon {...p} name='scale-3d' svg={svg}/>
