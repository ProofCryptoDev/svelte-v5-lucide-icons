<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>';
</script>

<Icon {...p} name='volume' svg={svg}/>
