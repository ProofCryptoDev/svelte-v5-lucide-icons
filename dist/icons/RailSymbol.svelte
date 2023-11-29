<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M5 15h14"/><path d="M5 9h14"/><path d="m14 20-5-5 6-6-5-5"/>';
</script>

<Icon {...p} name='rail-symbol' svg={svg}/>
