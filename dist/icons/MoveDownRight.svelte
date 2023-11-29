<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M19 13V19H13"/><path d="M5 5L19 19"/>';
</script>

<Icon {...p} name='move-down-right' svg={svg}/>
