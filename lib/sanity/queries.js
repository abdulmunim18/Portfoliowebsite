// =============================================
// GROQ Queries for Sanity CMS
// =============================================

// ----- Site Settings (singleton) -----
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  heroTitle,
  heroSubtitle,
  heroTypingTexts,
  bio,
  shortBio,
  profileImage,
  resumeFile{
    asset->{url}
  },
  socialLinks,
  currentStatus,
  email,
  siteTitle,
  siteDescription
}`

// ----- Projects -----
export const allProjectsQuery = `*[_type == "project"] | order(order asc, publishedAt desc){
  _id,
  title,
  slug,
  description,
  coverImage,
  "techStack": techStack[]->{ name, icon },
  liveUrl,
  repoUrl,
  featured,
  publishedAt
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc, publishedAt desc)[0...4]{
  _id,
  title,
  slug,
  description,
  coverImage,
  "techStack": techStack[]->{ name, icon },
  liveUrl,
  repoUrl,
  publishedAt
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  body,
  coverImage,
  gallery,
  "techStack": techStack[]->{ name, icon },
  liveUrl,
  repoUrl,
  featured,
  publishedAt
}`

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)]{
  "slug": slug.current
}`

// ----- Blog Posts -----
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  tags,
  publishedAt,
  readingTime,
  body
}`

export const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  tags,
  publishedAt,
  readingTime
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  coverImage,
  tags,
  publishedAt,
  readingTime
}`

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`

// ----- Skills -----
export const allSkillsQuery = `*[_type == "skill"] | order(order asc){
  _id,
  name,
  category,
  icon,
  proficiency,
  order
}`

// ----- Experience -----
export const allExperienceQuery = `*[_type == "experience"] | order(order asc){
  _id,
  company,
  role,
  startDate,
  endDate,
  description,
  "techUsed": techUsed[]->{ name, icon },
  companyUrl,
  order
}`

// ----- All slugs for sitemap -----
export const allSlugsQuery = `{
  "projects": *[_type == "project" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "posts": *[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }
}`

// ----- Prompts -----
export const allPromptsQuery = `*[_type == "prompt"] | order(publishedAt desc){
  _id,
  title,
  prompt,
  category,
  outputType,
  outputText,
  outputImage,
  publishedAt
}`

// ----- Portfolio V2: Worklog -----
export const latestWorklogsQuery = `*[_type == "worklog"] | order(publishedAt desc)[0...3]{
  _id, title, slug, publishedAt, excerpt, tags, githubUrl, externalUrl,
  "project": projectRef->{title, slug}
}`

export const allWorklogsQuery = `*[_type == "worklog"] | order(publishedAt desc){
  _id, title, slug, publishedAt, excerpt, body, tags, githubUrl, externalUrl,
  "project": projectRef->{title, slug}
}`

export const worklogBySlugQuery = `*[_type == "worklog" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, excerpt, body, tags, githubUrl, externalUrl,
  "project": projectRef->{title, slug}
}`

// ----- Portfolio V2: Writing -----
export const allArticlesQuery = `*[_type in ["article", "post"]] | order(publishedAt desc){
  _id, title, slug, publishedAt, excerpt, body, tags, coverImage, seoTitle, seoDescription
}`

export const articleBySlugQuery = `*[_type in ["article", "post"] && slug.current == $slug][0]{
  _id, title, slug, publishedAt, excerpt, body, tags, coverImage, seoTitle, seoDescription
}`

export const v2ContentSlugsQuery = `{
  "articles": *[_type in ["article", "post"] && defined(slug.current)]{ "slug": slug.current, _updatedAt },
  "worklogs": *[_type == "worklog" && defined(slug.current)]{ "slug": slug.current, _updatedAt }
}`

