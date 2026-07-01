# Modern CMS-Driven Developer Portfolio Website

A premium, dark-first, self-service developer portfolio website built using **Next.js 14+ (App Router)**, **Sanity CMS**, and **Tailwind CSS**, hosted on **Vercel** with email delivery powered by **Resend**.

---

## 🚀 Key Features

*   **Dark Mode First Aesthetic**: Vibrant cyan/blue details over charcoal background. Designed for WCAG AA compliance.
*   **Fully Headless CMS Driven**: Manage projects, tech skills, work experience, bio, and blog posts directly from Sanity Studio without redeploying code.
*   **Dynamic Command Palette**: Hit `⌘K` or `Ctrl+K` to search and navigate pages instantly.
*   **High Performance**: Time to Interactive (TTI) < 2s with automatic Next.js image optimization, responsive layout, and Edge OG sharing cards.
*   **Spam Protection**: Spam honeypots and rate limiting built into the contact form endpoints.
*   **Print-Friendly Timeline**: Print stylesheets included for downloading clean resume pages.
*   **SEO Optimized**: Sitemap, PWA manifest, robots.txt, dynamic headers, and JSON-LD structured schema.

---

## 🛠️ Local Installation & Development

### Prerequisite
Ensure you have **Node.js (v18+)** and **npm** installed.

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd portfolio-site
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill out the variables inside `.env.local` using the instructions below.

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the result.

---

## 🗄️ Setting Up Sanity.io CMS

1.  **Create an Account**: Go to [sanity.io](https://www.sanity.io/) and create an account.
2.  **Initialize Sanity**: Run the CLI in the project directory:
    ```bash
    npx sanity@latest init
    ```
    *   Choose to create a new project.
    *   Set the dataset to `production`.
    *   Choose the schema output path or project mapping options.
3.  **Get Credentials**:
    *   Log into [sanity.io/manage](https://www.sanity.io/manage)
    *   Copy your **Project ID** and paste it as `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`.
    *   Go to **API** tab → **Tokens** → **Add API Token** with **Viewer/Read** access. Copy this token and paste it as `SANITY_API_TOKEN` in `.env.local`.
4.  **Local Studio**: Next.js hosts the CMS Studio inside this deployment at `/studio`!
    You can run development mode and navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to log in and start editing content.

---

## ✍️ Non-Technical Content Editor's Guide

This guide is for **Abdul Munim** (or any administrator) to manage the website content without touching any code.

### 1. Access the Studio
*   In development: Go to `http://localhost:3000/studio`
*   In production: Go to `https://your-domain.com/studio`
*   Sign in with your Sanity credentials.

### 2. Schema Management Types
In the sidebar, you will see the following categories:

*   **Site Settings (Singleton)**: Contains global details:
    *   *Hero Title & Subtitle*: The main messages shown on the home page.
    *   *Hero Typing Texts*: Phrases typed out in the terminal simulation box.
    *   *About Page Bio*: Full RichText description for the about page.
    *   *Resume / CV PDF*: Upload your latest PDF file.
    *   *Current Status*: Pulsing green dot message on the home page (e.g., "Open to work").
*   **Projects**:
    *   Create new projects with title, slug, short description, main cover image, and a list of tags.
    *   Use the *Block Content* editor to write case studies.
    *   Add additional screenshots to the *Image Gallery* to show carousel mockups.
*   **Blog Posts**:
    *   Add articles with titles, slugs, code snippets, categories, and cover images.
*   **Skills**:
    *   Create skills with proficiency percentages (1-100) and categories (Frontend, Backend, etc.).
*   **Experience**:
    *   List work milestones, company names, start/end dates, achievement bullet lists, and associate skills.

---

## 📨 Configuring the Contact Form

The contact form delivers messages directly to your email using **Resend** (free tier: 100 emails/day).

1.  Create an account at [resend.com](https://resend.com).
2.  Navigate to **API Keys** and generate a new key.
3.  Add the key as `RESEND_API_KEY` in `.env.local`.
4.  Set `CONTACT_EMAIL` in `.env.local` to the email address where you want to receive inquiries.
5.  *Optional*: Verify a custom domain in Resend to send emails from your own domain. If not verified, emails will send from `onboarding@resend.dev`.

---

## ⚡ Deployment to Vercel

1.  Create a public or private GitHub repository and push your project code.
2.  Go to [Vercel](https://vercel.com) and click **Add New Project**.
3.  Import the repository.
4.  In the **Environment Variables** section, copy the contents of your `.env.local` and add them.
5.  Click **Deploy**.
6.  *On-Demand Revalidation (Webhooks)*:
    *   To make the site update instantly when you publish content in Sanity, go to [sanity.io/manage](https://www.sanity.io/manage).
    *   Select your project → **API** tab → **Webhooks** → **Create Webhook**.
    *   **Name**: Next.js Revalidation
    *   **URL**: `https://<your-vercel-domain>.vercel.app/api/revalidate?secret=<your-revalidation-secret>`
    *   **Dataset**: `production`
    *   **Trigger on**: `Create`, `Update`, `Delete`
    *   **Filter**: (leave blank to listen to all documents)
    *   **HTTP Method**: `POST`
    *   **Projection**: `_type`
