<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 11V5H11"/><path d="M5 5L19 19"/>';
</script>

<Icon {...p} name='move-up-left' svg={svg}/>
