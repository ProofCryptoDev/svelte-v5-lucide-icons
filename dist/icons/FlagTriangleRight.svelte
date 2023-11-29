<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M7 22V2l10 5-10 5"/>';
</script>

<Icon {...p} name='flag-triangle-right' svg={svg}/>
