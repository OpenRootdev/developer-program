# Joining as an OpenRoot builder

You choose what to build. The program can consider software in any category, provided it is lawful, safe to host, respects others' rights, and meets the published cohort requirements.

Bring your own ideas. Any programming language and repository/documentation language is welcome, including non-English repositories. You choose your stack, scope, roadmap and project direction; this is not an English-only or AI-only project collection.

You can keep a repository private during development. Agree on the duration and any public-release requirement before enrolling in a funded cohort. No arbitrary timer or automatic publication is applied. A milestone requiring public release or adoption still needs its agreed evidence. Other builders do not automatically get access to your private code; organization owners retain administrative access.

## Application and access

The application asks for your email and exact GitHub username. OpenRoot approval is required. Portal signup is not open to everyone, and signing in with Google or email does not bypass that approval.

A GitHub account is a prerequisite. Approved builders accept an invitation to the OpenRoot GitHub organization and build their repositories inside it. The website accepts applications for manual review at https://openroot.dev/apply. Submission does not create an account or grant access. Additional accounts, GitHub Apps and project-team requests can be included for review. Never submit passwords, tokens or private keys.

Approval creates a pending portal account and sends an email with instructions. Sign in at https://openroot.dev/portal with your approved email and enter the emailed code only on that page. Kristofer manually sends the GitHub organization invitation before approving the portal account. Approval then sends one combined welcome email with invitation-acceptance and repository-creation steps. Automated GitHub identity linking, project metrics, full enrollment and reward claims are not available yet. Pending accounts keep the application’s original 90-day expiry. Approval alone does not grant a funded reward.

## Applying before choosing a project

Check “I’m not sure what I’m going to build yet” if you have not chosen a project. Your interests note is optional and you do not need to invent a proposal or repository URL. This is an undecided application for manual review, not an approved project or reward-bearing cohort. A specific project and milestone terms still need approval before reward eligibility.

## Application terms and published policies

Before submitting, explicitly accept the current [Application Terms](https://openroot.dev/apply#application-terms) and the published builder and [reward policies](rewards.md). Acceptance is separate from privacy consent. The backend requires and records the current terms version, **2026-10-12-1**, with your submission timestamp. Unchecked, missing or outdated acceptance is rejected.

Application rules:

- Provide truthful information and only material you have permission to share. Do not include credentials, private source code or sensitive personal information.
- An application requests manual review, not an account, organization membership, repository access or a promised reward. Applying without a chosen project is allowed.
- No project, code rights or repository is transferred by applying. Later accepted projects must respect others’ rights and the published builder policies.
- Project approval, access, milestones, reward availability and transfers require separate review and agreed terms. Signup alone is not reward eligibility.
- Enrollment, project/departure and funded reward agreements remain separate. Applying does not accept unpublished future terms or unannounced reward thresholds.

Privacy, retention and correction/deletion requests are explained below. Questions: hello@openroot.dev.

## Application privacy

OpenRoot, operated by Kristofer Jussmann, collects your email, exact GitHub username, project proposal, optional evidence, collaboration/access requests, referral details, optional discovery source and consent record for application review and related communication. The optional, applicant-declared discovery source helps us understand where builders find OpenRoot; it does not use tracking cookies. Do not submit credentials, private source code or sensitive personal information. List other accounts only with their permission.

Submissions are stored privately on Google Cloud in Finland and are available only to authorized administrators. Records are scheduled to expire after 90 days; automatic deletion is asynchronous. Approved portal accounts will have separate terms before activation. Hosting infrastructure handles technical request logs; the application service does not deliberately log application content.

Applying does not subscribe you to the newsletter. Contact hello@openroot.dev to access, correct or delete a submission, or withdraw consent. Identity verification may be needed before acting on a request. Submission is not proof that you control the supplied email or GitHub account.

## Your role

Builders develop their projects, attract users, maintain them, and provide milestone evidence. OpenRoot helps promote member projects through its publication and social channels, completely free of charge and as much as it can. It does not operate every project's marketing campaign or guarantee coverage, reach, a positive review or success.

Participation is not exclusive. Enter hackathons, collaborate outside OpenRoot and take part in other activities with your project. Check the event's own rules and any contributor/license obligations; joining OpenRoot does not require giving up those opportunities.

GitHub teams and repository roles scope collaboration. Access to your project does not grant organization-wide administration. The planned portal shows repositories associated with you, including team projects; the person who created a repository is not automatically its only contributor or reward recipient.

## Your project stays yours

The intended program policy is that you retain ownership of your own code and lead your project. The GitHub repository is hosted under OpenRoot's organization, with repository-level Admin for the approved project lead. Organization owners retain administrative access. Repository Admin is not personal ownership of the GitHub namespace; licensing and departure/transfer arrangements must be agreed before enrollment.

## Existing projects and collaboration

You may propose an existing repository with users, downloads or stars. Submit its URL and dated evidence first; do not transfer it before review. Membership, transfer approval, enrollment and reward claims are separate manual decisions. Existing metrics qualify only under explicitly agreed baseline and cohort rules, not merely because the repository entered the organization.

Project-specific teams can cover multiple approved repositories. Leads get scoped Admin; collaborators receive the reviewed project role. Avoid blanket write access and unintended parent-team inheritance. Extra automation accounts do not count as independent rewarded builders.

## Before you enroll

Project rights, software license, maintainer responsibilities, departure/transfer arrangements, and team reward allocation must be disclosed and agreed. The final project agreement is still being prepared. Joining a GitHub organization alone does not settle these questions.

An enrolled cohort must state the available rewards, its capacity, thresholds, measurement period, and review rules. Until these exist, interest in the program does not establish an entitlement to a reward.

See [how it works](how-it-works.md) and [milestones and rewards](rewards.md).

## Referrals

The planned [builder referral program](referrals.md) recognizes referrals of approved builders who reach verified project milestones, not signup counts. Applications can include a referrer's exact GitHub username for review. Funding and final eligibility/benefit rules must be published before activation.

## Pending portal privacy

A reviewed approval creates a pending portal account with your email, GitHub username and onboarding status. It keeps the original application expiry; it does not extend the 90-day retention window. Sign-in uses a necessary secure browser-session cookie that expires after eight hours. Email-code challenges expire after ten minutes; the service stores code hashes, not plaintext codes. Google Cloud processes private account and review records; Resend processes transactional sign-in and approval emails. Only authorized administrators can review applications, and builders can access only their own portal information. No newsletter subscription, advertising tracking or automatic GitHub invitation is created. Full enrollment and active-profile retention require separate terms. Ask hello@openroot.dev about access, correction or deletion.

## Bringing an existing project: step by step

**An accepted existing project must be hosted under OpenRootdev.** After project review, either transfer the original repository or copy its code into a new organization repository. A link to a repository outside the organization is not enough. These instructions replace the create-new-project step for existing projects.

**Before either route:** submit the original URL, confirm your authority and contributor/license rights, agree the migration with OpenRoot, and accept your organization invitation. Back up the project and review secrets, integrations and Actions billing before moving or pushing anything. Contact hello@openroot.dev if approval or permissions are unclear.

### Option A: Transfer the original repository

Recommended when preserving stars, issues, pull requests and Git history matters.

- **1.** Open the original repository on GitHub, then **Settings → General → Danger Zone → Transfer**. You need repository Admin and permission to create repositories in OpenRootdev; transfers out of another organization may need its owner.
- **2.** Set the new owner to **OpenRootdev**. Check the destination name is free, read GitHub's warnings (private repositories may lose paid-plan features on GitHub Free), then type the repository name and confirm.
- **3.** Check the repository URL now starts with `https://github.com/OpenRootdev/`. Ask OpenRoot to verify your repository-level Admin and the intended team access; organization owners retain administrative access.
- **4.** In each existing local clone run `git remote set-url origin https://github.com/OpenRootdev/YOUR-REPOSITORY.git`. Check integrations, deployments, Pages, secrets and workflows before resuming work. Do not recreate the old repository path, as this can break redirects.

### Option B: Copy the code into a new organization repository

Use this if you want to keep the original repository where it is and maintain the approved project copy in OpenRootdev.

- **1.** Open [New repository](https://github.com/new?owner=OpenRootdev). Verify **Owner = OpenRootdev**, choose the agreed name and public/private visibility. **Do not initialize** a README, license or .gitignore; create an empty repository.
- **2.** In a terminal, replace the example names and use a new local folder: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git openroot-project`, then `cd openroot-project`.
- **3.** Add the destination without changing the original remote: `git remote add openroot https://github.com/OpenRootdev/YOUR-REPOSITORY.git`.
- **4.** Push the checked-out branch: `git push openroot HEAD:main`. Confirm the files appear in the organization repository. For later updates, push to `openroot`, not the original `origin`. If the destination is not empty or a push is rejected, stop and ask for help; do not force-push.
- **5.** This copies the selected branch's reachable commit history, **not stars, issues, pull requests, releases, repository settings or every branch/tag**. Git LFS objects and submodules need separate handling; ask for help. Retain license/attribution files, and do not copy secrets.

Send OpenRoot the final organization repository URL to associate it with your reviewed project. Existing adoption and rewards still require an agreed baseline and separate approval; no double-counting across copies. Do not delete the original repository just to participate. You retain rights to your own code; hosting under an organization does not remove its owners' administrative access.

Official references: [transfer](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository), [new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository), [Git push](https://git-scm.com/docs/git-push).
