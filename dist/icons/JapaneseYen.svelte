<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"/><path d="M6 15h12"/><path d="M6 11h12"/>';
</script>

<Icon {...p} name='japanese-yen' svg={svg}/>
