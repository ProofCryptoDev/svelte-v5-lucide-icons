<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>';
</script>

<Icon {...p} name='minus-circle' svg={svg}/>
