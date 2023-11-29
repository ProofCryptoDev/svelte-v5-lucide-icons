<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>';
</script>

<Icon {...p} name='bluetooth' svg={svg}/>
