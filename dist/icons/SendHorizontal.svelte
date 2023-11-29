<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/>';
</script>

<Icon {...p} name='send-horizontal' svg={svg}/>
