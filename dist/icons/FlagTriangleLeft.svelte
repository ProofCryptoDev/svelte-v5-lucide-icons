<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M17 22V2L7 7l10 5"/>';
</script>

<Icon {...p} name='flag-triangle-left' svg={svg}/>
