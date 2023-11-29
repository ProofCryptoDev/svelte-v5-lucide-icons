<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M13 5H19V11"/><path d="M19 5L5 19"/>';
</script>

<Icon {...p} name='move-up-right' svg={svg}/>
