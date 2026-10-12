// SPDX-License-Identifier: MIT
import { readFile,readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
export const root = fileURLToPath(new URL('../',import.meta.url));
export const locales = ['zh-CN','pt-BR','es','fr','ja'];
export const documents = ['README.md',...['builders','how-it-works','rewards','referrals','partners','faq'].map(n=>`docs/${n}.md`)];
export const translationPath = (locale,doc) => `docs/i18n/${locale}/${path.basename(doc)}`;
export const hash = value => createHash('sha256').update(value.replace(/\r\n/g,'\n')).digest('hex');
export function validateSnapshot(manifest,current) {
  const errors=[];
  for(const doc of documents) {
    if(manifest.sources?.[doc]!==current.sources[doc])errors.push(`English source changed: ${doc}`);
    for(const locale of locales) {
      const key=translationPath(locale,doc),record=manifest.translations?.[key];
      if(!current.translations[key])errors.push(`Missing translation: ${key}`);
      else if(record?.source!==current.sources[doc]||record?.text!==current.translations[key])errors.push(`Translation needs review: ${key}`);
    }
  }
  return errors;
}
export async function snapshot() {
  const publicDocs=(await readdir(path.join(root,'docs'))).filter(name=>name.endsWith('.md')).map(name=>'docs/'+name);
  const unknown=publicDocs.filter(doc=>!documents.includes(doc));
  if(unknown.length)throw Error('New public documents need five translations and manifest coverage: '+unknown.join(', '));
  const current={sources:{},translations:{}};
  for(const doc of documents) {
    current.sources[doc]=hash(await readFile(path.join(root,doc),'utf8'));
    for(const locale of locales) {
      const key=translationPath(locale,doc);
      try{current.translations[key]=hash(await readFile(path.join(root,key),'utf8'));}
      catch(error){if(error.code!=='ENOENT')throw error;}
    }
  }
  return current;
}
export async function checkTranslations() {
  const manifest=JSON.parse(await readFile(path.join(root,'translation-manifest.json'),'utf8'));
  const errors=validateSnapshot(manifest,await snapshot());
  if(errors.length)throw Error('Translation release blocked:\n'+errors.join('\n'));
  return {sources:documents.length,translations:documents.length*locales.length};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try{console.log('PASS:',await checkTranslations());}catch(error){console.error(error.message);process.exitCode=1;}
}
