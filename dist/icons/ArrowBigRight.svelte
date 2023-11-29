<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M6 9h6V5l7 7-7 7v-4H6V9z"/>';
</script>

<Icon {...p} name='arrow-big-right' svg={svg}/>
