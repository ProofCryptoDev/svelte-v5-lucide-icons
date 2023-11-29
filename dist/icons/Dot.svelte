<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<circle cx="12.1" cy="12.1" r="1"/>';
</script>

<Icon {...p} name='dot' svg={svg}/>
