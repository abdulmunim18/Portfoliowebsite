# Portfolio V2 implementation checklist

## Repository audit

- Framework: Next.js 16.2.9 with App Router and React 19.
- Styling: Tailwind CSS 4 plus a legacy dark-first token layer.
- CMS: Sanity Studio at `/studio`; schemas existed for projects, posts, skills, experience, prompts, and site settings.
- Email: Resend route with an in-memory rate limiter and honeypot.
- SEO: root metadata, dynamic OG route, sitemap, robots, and manifest.
- Assets: one profile image and the current resume PDF.
- Deployment: Vercel-oriented configuration; no repository `vercel.json` required.

## Decisions

### Retain

- Next.js App Router, Vercel deployment model, Sanity Studio, Resend, image optimization, metadata routes, resume asset, and verified social links.

### Refactor

- Contact validation, Sanity content models, navigation hierarchy, metadata defaults, data separation, and reusable layout primitives.

### Remove

- Dark-first template UI, command-palette gimmick, fake employers, demo projects/URLs, sample articles, unsupported seniority and years, skill percentages, Prompt Library primary route, and invented tool claims.

### Rebuild

- Light-first visual system, recruiter-first homepage, projects/case studies, services hierarchy, Worklog, Writing empty state, About, Skills, Experience, Contact, navigation, and footer.

## TypeScript migration

- Migrate incrementally to reduce risk.
- Use TypeScript for all new V2 routes, data modules, interactive form code, and shared components.
- Keep stable Sanity configuration/schema files in JavaScript for now; migrate integration modules after the V2 content model is settled.

## Sanity verification

- The client reads project ID, dataset, and API version from environment variables and safely returns no CMS content when credentials are absent.
- Sanity Studio is embedded at `/studio`.
- Worklog and Article schemas are now present.
- Project schema should be expanded further for structured case-study sections during the core portfolio phase.

## Delivery checklist

- [x] Create safe `portfolio-v2` branch.
- [x] Establish light-first tokens, typography, responsive container, buttons, cards, focus states, and reduced-motion behavior.
- [x] Build new responsive navigation and footer.
- [x] Centralize verified personal, skills, services, and project data.
- [x] Build recruiter-first V2 homepage.
- [x] Replace demo projects with two resume-verified projects.
- [x] Add Services, Worklog, Writing, Skills, About, Experience, Projects, and Contact routes.
- [x] Add Worklog and Article Sanity schemas.
- [x] Add typed client/server contact validation and environment documentation.
- [x] Pass ESLint, TypeScript, production build, desktop browser, 360px viewport, navigation, and console-error checks.
- [ ] Add verified project screenshots and repository/live URLs.
- [ ] Add verified professional experience details.
- [ ] Connect real Sanity project/worklog/article content and create detail routes.
- [ ] Configure Resend and Sanity environment variables in Vercel.
- [ ] Run production Lighthouse and deploy a preview before replacing production.
