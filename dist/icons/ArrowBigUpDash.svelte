<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M9 19h6"/><path d="M9 15v-3H5l7-7 7 7h-4v3H9z"/>';
</script>

<Icon {...p} name='arrow-big-up-dash' svg={svg}/>
