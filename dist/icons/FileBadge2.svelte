<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="m14 12.5 1 5.5-3-1-3 1 1-5.5"/>';
</script>

<Icon {...p} name='file-badge-2' svg={svg}/>
