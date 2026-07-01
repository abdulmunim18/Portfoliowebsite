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

