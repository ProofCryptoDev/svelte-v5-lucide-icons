<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/>';
</script>

<Icon {...p} name='arrow-left-to-line' svg={svg}/>
