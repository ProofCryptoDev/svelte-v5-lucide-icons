<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="4" height="6" x="2" y="12" rx="2"/><path d="M14 2v6h6"/><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><path d="M10 12h2v6"/><path d="M10 18h4"/>';
</script>

<Icon {...p} name='file-digit' svg={svg}/>
