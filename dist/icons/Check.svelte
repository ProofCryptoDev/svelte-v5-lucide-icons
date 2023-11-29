<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M20 6 9 17l-5-5"/>';
</script>

<Icon {...p} name='check' svg={svg}/>
