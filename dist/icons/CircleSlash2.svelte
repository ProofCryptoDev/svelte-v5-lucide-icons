<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12" cy="12" r="10"/><path d="M22 2 2 22"/>';
</script>

<Icon {...p} name='circle-slash-2' svg={svg}/>
