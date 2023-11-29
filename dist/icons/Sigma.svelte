<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 7V4H6l6 8-6 8h12v-3"/>';
</script>

<Icon {...p} name='sigma' svg={svg}/>
