<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 9v6"/><path d="M9 9h3V5l7 7-7 7v-4H9V9z"/>';
</script>

<Icon {...p} name='arrow-big-right-dash' svg={svg}/>
