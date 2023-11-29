<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>';
</script>

<Icon {...p} name='check-check' svg={svg}/>
