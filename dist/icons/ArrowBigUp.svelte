<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M9 18v-6H5l7-7 7 7h-4v6H9z"/>';
</script>

<Icon {...p} name='arrow-big-up' svg={svg}/>
