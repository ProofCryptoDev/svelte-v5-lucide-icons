<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="m18 15-6-6-6 6"/>';
</script>

<Icon {...p} name='chevron-up' svg={svg}/>
