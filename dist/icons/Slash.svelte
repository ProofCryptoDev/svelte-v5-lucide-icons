<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M22 2 2 22"/>';
</script>

<Icon {...p} name='slash' svg={svg}/>
