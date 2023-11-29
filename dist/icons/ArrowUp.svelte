<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>';
</script>

<Icon {...p} name='arrow-up' svg={svg}/>
