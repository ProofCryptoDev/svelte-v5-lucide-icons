<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M2 20h.01"/><path d="M7 20v-4"/>';
</script>

<Icon {...p} name='signal-low' svg={svg}/>
