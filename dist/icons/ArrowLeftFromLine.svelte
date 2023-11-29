<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/>';
</script>

<Icon {...p} name='arrow-left-from-line' svg={svg}/>
