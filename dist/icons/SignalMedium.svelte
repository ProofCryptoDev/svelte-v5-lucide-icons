<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/>';
</script>

<Icon {...p} name='signal-medium' svg={svg}/>
