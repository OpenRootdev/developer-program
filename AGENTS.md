# Public program documentation maintenance

Every substantive edit to README.md or the six public docs must include equivalent updates in docs/i18n/zh-CN, pt-BR, es, fr and ja. English is the editorial source. Do not publish an English policy change while translations are stale.

Preserve meaning, not word-for-word phrasing. Keep approval gates, GitHub organization control, private development, project rights, free promotion, hackathon freedom, reward limits and pending fulfillment equally clear in every language. Preserve URLs, GitHub identifiers, numbers, units and quantities. Do not turn reported offers into guaranteed rewards or official provider partnerships.

Run `node scripts/check-translations.mjs`. When all matching translations have been updated and compared with English, run `node scripts/acknowledge-translations.mjs --reviewed`, then run the check again. Never acknowledge stale text merely to make a build pass. Hash checks detect changed files and missing coverage; they do not certify linguistic or legal accuracy. Seek native-speaker review before using translated wording as a binding agreement.

The required public-document set is defined in scripts/check-translations.mjs. Adding a public document requires all five translations and inclusion in that set. No secrets, personal applicant records or API keys belong in this repo. No automatic commits.
