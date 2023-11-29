<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M4 20h16"/><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/>';
</script>

<Icon {...p} name='baseline' svg={svg}/>
