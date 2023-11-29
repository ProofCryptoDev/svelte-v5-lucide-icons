<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>';
</script>

<Icon {...p} name='message-circle' svg={svg}/>
