<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M6 11h8a4 4 0 0 0 0-8H9v18"/><path d="M6 15h8"/>';
</script>

<Icon {...p} name='russian-ruble' svg={svg}/>
