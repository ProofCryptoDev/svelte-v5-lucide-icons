<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m18 9-6-6-6 6"/><path d="M12 3v14"/><path d="M5 21h14"/>';
</script>

<Icon {...p} name='arrow-up-from-line' svg={svg}/>
