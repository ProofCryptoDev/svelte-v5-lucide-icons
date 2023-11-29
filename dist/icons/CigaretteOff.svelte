<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<line x1="2" x2="22" y1="2" y2="22"/><path d="M12 12H2v4h14"/><path d="M22 12v4"/><path d="M18 12h-.5"/><path d="M7 12v4"/><path d="M18 8c0-2.5-2-2.5-2-5"/><path d="M22 8c0-2.5-2-2.5-2-5"/>';
</script>

<Icon {...p} name='cigarette-off' svg={svg}/>
