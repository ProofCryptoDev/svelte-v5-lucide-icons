<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8"/><path d="m8 16 8-8"/>';
</script>

<Icon {...p} name='arrow-up-right-square' svg={svg}/>
