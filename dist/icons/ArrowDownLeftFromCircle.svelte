<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 12a10 10 0 1 1 10 10"/><path d="m2 22 10-10"/><path d="M8 22H2v-6"/>';
</script>

<Icon {...p} name='arrow-down-left-from-circle' svg={svg}/>
