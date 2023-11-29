<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<line x1="18" x2="18" y1="20" y2="4"/><polygon points="14,20 4,12 14,4"/>';
</script>

<Icon {...p} name='step-back' svg={svg}/>
