<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M18 12H2v4h16"/><path d="M22 12v4"/><path d="M7 12v4"/><path d="M18 8c0-2.5-2-2.5-2-5"/><path d="M22 8c0-2.5-2-2.5-2-5"/>';
</script>

<Icon {...p} name='cigarette' svg={svg}/>
