<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 20h.01"/>';
</script>

<Icon {...p} name='signal-zero' svg={svg}/>
