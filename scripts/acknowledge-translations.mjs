// SPDX-License-Identifier: MIT
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { root,documents,locales,translationPath,snapshot } from './check-translations.mjs';
if(!process.argv.includes('--reviewed'))throw Error('Update and review all corresponding translations, then pass --reviewed.');
const current=await snapshot(),translations={};
for(const doc of documents)for(const locale of locales) {
  const key=translationPath(locale,doc);
  if(!current.translations[key])throw Error(`Missing translation: ${key}`);
  translations[key]={source:current.sources[doc],text:current.translations[key]};
}
await writeFile(path.join(root,'translation-manifest.json'),JSON.stringify({revision:'2026-10-12',review:'Authoring comparison complete; independent native-speaker review pending.',sources:current.sources,translations},null,2)+'\n');
console.log('Recorded reviewed source/translation hashes. No linguistic certification is implied.');
