import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import icons from 'lucide-static/icon-nodes.json';

interface Attributes {
  [key: string]: string;
}

const SRC_DIR = __dirname;
const DIST_DIR = resolve(SRC_DIR, '../dist');
const ICONS_DIR = resolve(DIST_DIR, './icons');

const toPascalCase = (string: string) => {
  const camelCase = string.replace(/^([A-Z])|[\s-_]+(\w)/g, (_match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const getAttributesString = (attrs: Attributes) => {
  let attrsString = '';
  Object.keys(attrs).forEach((attr) => { attrsString += ` ${attr}="${attrs[attr]}"` });
  return attrsString;
};

const getSvelteComponentString = (iconName: string, svgPaths: string) => `\
<script lang='ts'>
  import Icon from '../Icon.svelte';

  let {...p} = $props<IconProps>();

  const svg = '${svgPaths}';
</script>

<Icon {...p} name='${iconName}' svg={svg}/>
`;

// Create the dist and dist/icons directories if necessary
if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR);
if (!existsSync(ICONS_DIR)) mkdirSync(ICONS_DIR);

let iconsSkipped = 0;
let iconsProcessed = 0;
let iconsIndexFileString = '';

Object.entries(icons).forEach(([iconName, svgPaths]) => {

  if (svgPaths?.length) {
    let svgPathsString = '';

    svgPaths.forEach(([tag, attrs]) => {
      svgPathsString += `<${tag}${getAttributesString(attrs as Attributes)}/>`;
    });

    const iconNamePascalCase = toPascalCase(iconName);
    const iconFileName = `./${iconNamePascalCase}.svelte`;
    const svelteComponentString = getSvelteComponentString(iconName, svgPathsString);
    
    // Create the .svelte component file for the icon
    writeFileSync(resolve(ICONS_DIR, iconFileName), svelteComponentString, 'utf-8');

    // Add the icon's export to the index file
    iconsIndexFileString += `export { default as ${iconNamePascalCase} } from '${iconFileName}';\n`;

    iconsProcessed++;
  } else iconsSkipped++;

});

// Create the dist/index.ts file
const indexFileString = `\
export * from './icons';
export * as icons from './icons';
export { default as Icon } from './Icon.svelte';
`;

writeFileSync(resolve(DIST_DIR, './index.ts'), indexFileString, 'utf-8');

// Create the dist/icons/index.ts file with all of the exported .svelte components
writeFileSync(resolve(ICONS_DIR, './index.ts'), iconsIndexFileString, 'utf-8');

// Copy the index.d.ts and Icon.svelte files to the dist directory
copyFileSync(resolve(SRC_DIR, 'index.d.ts'), resolve(DIST_DIR, 'index.d.ts'));
copyFileSync(resolve(SRC_DIR, 'Icon.svelte'), resolve(DIST_DIR, 'Icon.svelte'));

console.log(`Finished creating .svelte components for ${iconsProcessed} icons. Skipped ${iconsSkipped} icons.`);