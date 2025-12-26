+++
title = "About"
date = "2014-04-09"
aliases = ["about","about me","contact"]
[ author ]
  name = "Shagun Attri"
+++

<style>
/* Accent colors - UNC Dunks inspired (Bright Sky Blue + Orange) */
:root {
  --about-accent: #4FC3F7;
  --about-accent-hover: #29B6F6;
  --about-accent-secondary: #FF7043;
  --about-accent-secondary-hover: #E65100;
  --gradient-accent: linear-gradient(135deg, #4FC3F7, #FF7043);
}

/* Timeline styles with proper light/dark theme support */
.timeline {
  position: relative;
  max-width: 100%;
  margin: 40px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: var(--about-accent);
  top: 0;
  bottom: 0;
  left: 50px;
  margin-left: -3px;
}

.timeline-item {
  padding: 20px 0 20px 80px;
  position: relative;
  background-color: inherit;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 41px;
  background-color: #fff;
  border: 3px solid var(--about-accent);
  border-radius: 50%;
  z-index: 1;
}

@media (prefers-color-scheme: dark) {
  .timeline-item::after {
    background-color: #232425;
  }
}

[data-theme=dark] .timeline-item::after {
  background-color: #232425;
}

[data-theme=light] .timeline-item::after {
  background-color: #fff;
}

.timeline-item.current::after {
  background-color: var(--about-accent);
  box-shadow: 0 0 0 4px rgba(79, 195, 247, 0.3);
}

.timeline-content {
  padding: 20px 30px;
  background-color: #eaeaea;
  border-left: 4px solid transparent;
  border-image: linear-gradient(180deg, var(--about-accent), var(--about-accent-secondary)) 1;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(93, 165, 216, 0.03), rgba(255, 112, 67, 0.02));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

@media (prefers-color-scheme: dark) {
  .timeline-content {
    background-color: #3b3d42;
  }
}

[data-theme=dark] .timeline-content {
  background-color: #3b3d42;
}

[data-theme=light] .timeline-content {
  background-color: #eaeaea;
}

.timeline-content:hover {
  transform: translateX(8px);
  background-color: #ddd;
  box-shadow: 0 8px 24px rgba(79, 195, 247, 0.12), 0 4px 12px rgba(255, 112, 67, 0.08);
}

.timeline-content:hover::before {
  opacity: 1;
}

@media (prefers-color-scheme: dark) {
  .timeline-content:hover {
    background-color: #4a4d52;
  }
}

[data-theme=dark] .timeline-content:hover {
  background-color: #4a4d52;
}

[data-theme=light] .timeline-content:hover {
  background-color: #ddd;
}

.timeline-date {
  color: var(--about-accent);
  font-weight: 600;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.timeline-title {
  font-size: 1.3em;
  font-weight: 700;
  margin: 5px 0;
  color: #222;
}

@media (prefers-color-scheme: dark) {
  .timeline-title {
    color: #fff;
  }
}

[data-theme=dark] .timeline-title {
  color: #fff;
}

[data-theme=light] .timeline-title {
  color: #222;
}

.timeline-company {
  font-size: 1.1em;
  font-weight: 600;
  color: #666;
  margin-bottom: 10px;
}

@media (prefers-color-scheme: dark) {
  .timeline-company {
    color: #b3b3bd;
  }
}

[data-theme=dark] .timeline-company {
  color: #b3b3bd;
}

[data-theme=light] .timeline-company {
  color: #666;
}

.timeline-description {
  line-height: 1.6;
  color: #555;
}

@media (prefers-color-scheme: dark) {
  .timeline-description {
    color: #a9a9b3;
  }
}

[data-theme=dark] .timeline-description {
  color: #a9a9b3;
}

[data-theme=light] .timeline-description {
  color: #555;
}

.timeline-description ul {
  margin: 10px 0;
  padding-left: 20px;
}

.timeline-description li {
  margin: 5px 0;
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 30px 0;
}

@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 684px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  padding: 20px;
  background-color: #eaeaea;
  border-radius: 8px;
  border-left: 4px solid transparent;
  border-image: linear-gradient(180deg, var(--about-accent), var(--about-accent-secondary)) 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--about-accent), var(--about-accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .skill-category {
    background-color: #3b3d42;
  }
}

[data-theme=dark] .skill-category {
  background-color: #3b3d42;
}

[data-theme=light] .skill-category {
  background-color: #eaeaea;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(79, 195, 247, 0.15), 0 4px 8px rgba(255, 112, 67, 0.1);
  background-color: #ddd;
}

.skill-category:hover::before {
  transform: scaleX(1);
}

@media (prefers-color-scheme: dark) {
  .skill-category:hover {
    background-color: #4a4d52;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
}

[data-theme=dark] .skill-category:hover {
  background-color: #4a4d52;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

[data-theme=light] .skill-category:hover {
  background-color: #ddd;
}

.skill-category h3 {
  margin-top: 0;
  color: var(--about-accent);
  font-size: 1.1em;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.skill-tag {
  background: linear-gradient(135deg, var(--about-accent), var(--about-accent-secondary));
  background-size: 200% 200%;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  background-position: 100% 100%;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 112, 67, 0.3);
}

/* Achievements grid */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.achievement-card {
  padding: 15px 20px;
  background-color: #eaeaea;
  border-radius: 8px;
  border-left: 4px solid transparent;
  border-image: linear-gradient(180deg, var(--about-accent), var(--about-accent-secondary)) 1;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.achievement-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, transparent 50%, rgba(255, 112, 67, 0.1) 50%);
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 195, 247, 0.12), 0 4px 10px rgba(255, 112, 67, 0.08);
}

.achievement-card:hover::after {
  width: 60px;
  height: 60px;
}

@media (prefers-color-scheme: dark) {
  .achievement-card {
    background-color: #3b3d42;
  }
}

[data-theme=dark] .achievement-card {
  background-color: #3b3d42;
}

[data-theme=light] .achievement-card {
  background-color: #eaeaea;
}

.achievement-card strong {
  color: var(--about-accent);
  display: block;
  margin-bottom: 5px;
}

.intro-section {
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 40px;
}

/* Stats container */
.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
}

.stat-box {
  text-align: center;
  padding: 20px;
  background-color: #eaeaea;
  border-radius: 8px;
  min-width: 150px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-box::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--about-accent), var(--about-accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(93, 165, 216, 0.12), 0 4px 10px rgba(255, 112, 67, 0.08);
}

.stat-box:hover::before {
  transform: scaleX(1);
}

@media (prefers-color-scheme: dark) {
  .stat-box {
    background-color: #3b3d42;
  }
}

[data-theme=dark] .stat-box {
  background-color: #3b3d42;
}

[data-theme=light] .stat-box {
  background-color: #eaeaea;
}

.stat-number {
  font-size: 2em;
  font-weight: 700;
  background: linear-gradient(135deg, var(--about-accent), var(--about-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
}

@media (prefers-color-scheme: dark) {
  .stat-label {
    color: #a9a9b3;
  }
}

[data-theme=dark] .stat-label {
  color: #a9a9b3;
}

[data-theme=light] .stat-label {
  color: #666;
}

/* Mobile responsive */
@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-item::after {
    left: 22px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    flex-direction: column;
  }
}
</style>

```console
$ whoami
Shagun Attri

$ cat profile.json
{
  "role": "Senior Product Manager",
  "company": "ArmorCode",
  "focus": ["ASPM", "RBVM", "B2B SaaS", "DevSecOps"],
  "location": "Chandigarh, India",
  "interests": ["Products", "Cybersecurity", "Startups", "AI"],
  "hobbies": ["Photography", "Writing", "Travel", "Reading"],
  "sports": ["F1", "Cricket"]
}
```

<div class="intro-section">

Hi, I'm **Shagun Attri** — a Senior Product Manager, cybersecurity enthusiast, and perpetual learner. This site serves as my digital notebook and library where I share insights from my professional life, technical explorations, book reviews, and guides.

Currently, I'm building the **ArmorCode platform** — an AI-powered ASPM (Application Security Posture Management) solution that helps organizations ship software fast and ship it securely. I make scalable B2B SaaS products by collaborating with multiple stakeholders to solve complex problems at the intersection of cybersecurity, product design, and developer experience.

I'm deeply passionate about cybersecurity and aspire to scale organizations dedicated to online security. Beyond work, I'm an avid reader curious about technology, continuously exploring new horizons.

</div>

<div class="stats-container">
  <div class="stat-box">
    <div class="stat-number">3+</div>
    <div class="stat-label">Years in Product</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">250+</div>
    <div class="stat-label">Security Integrations</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">5+</div>
    <div class="stat-label">Hackathon Wins</div>
  </div>
</div>

---

## Professional Journey

<div class="timeline">

<div class="timeline-item current">
<div class="timeline-content">
<div class="timeline-date">June 2025 - Present</div>
<div class="timeline-title">Senior Product Manager</div>
<div class="timeline-company">ArmorCode Inc.</div>
<div class="timeline-description">
Leading product strategy and execution for AI-powered ASPM solutions in the cybersecurity space.
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">February 2024 - May 2025</div>
<div class="timeline-title">Product Manager</div>
<div class="timeline-company">ArmorCode Inc.</div>
<div class="timeline-description">
<ul>
<li>Built and maintained an ecosystem of <strong>250+ security tool integrations</strong></li>
<li>Scaled the <strong>DevSecOps Automation</strong> portfolio</li>
<li>Led <strong>Product-Led Growth (PLG)</strong> and Product Onboarding workflows</li>
<li>Developed <strong>Asset Management and Discovery</strong> correlation workflow</li>
<li>Managed Product Documentation and Release Notes</li>
</ul>
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">December 2022 - February 2024</div>
<div class="timeline-title">Associate Product Manager</div>
<div class="timeline-company">ArmorCode Inc.</div>
<div class="timeline-description">
<ul>
<li>Built and scaled the ArmorCode platform to help organizations ship software fast and securely</li>
<li>Scaled security tool integrations from <strong>~100 to 180+</strong> with collaboration across multiple stakeholders and partners</li>
<li>Established <strong>Product-Led Growth</strong> with multiple community initiatives</li>
<li>Simplified UX with enhancements to Product Onboarding workflows</li>
<li>Managed Story Writing and prioritization of features using Agile methodologies</li>
<li>Worked closely with Executives, Marketing, Sales, PR, Design, and Support teams to successfully bring new features to market</li>
</ul>
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">June 2022 - December 2022</div>
<div class="timeline-title">Associate Product Manager</div>
<div class="timeline-company">Sennovate</div>
<div class="timeline-description">
<ul>
<li>Launched the <strong>Beta version of Sennovate+</strong></li>
<li>Built automation tooling that reduced application provisioning time from <strong>weeks to just a few minutes</strong></li>
<li>Open-sourced internal tooling to fix security loopholes in major IAM products</li>
<li>Spearheaded the product marketing campaign for the launch of Sennovate+ Beta</li>
<li>Launched <strong>IAM Health Checkup</strong> — a tool to check IAM infrastructure state and get personalized Action Plans</li>
<li>Built wireframes for all features and integrations on the Sennovate+ Dashboard</li>
<li>Shipped releases using Agile methodology with the Scrum Framework</li>
</ul>
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">February 2021 - May 2022</div>
<div class="timeline-title">Cyber Security Solutions - Intern</div>
<div class="timeline-company">Sennovate</div>
<div class="timeline-description">
<ul>
<li>Deployed and set up IAM, PAM, and SOC solutions from enterprise partners</li>
<li>Automated daily tasks with Power Automate and Microsoft Flow</li>
<li>Managed Azure Active Directory and Organizational Units</li>
<li>Worked on Microsoft Azure services to set up Enterprise Applications (BambooHR, Salesforce, O365) with SAML SSO and MFA</li>
<li>Worked with ForgeRock OpenAM, BeyondTrust, Centrify, CyberArk Identity, Okta, and more</li>
<li><strong>Intern of the Month x2</strong></li>
</ul>
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">October 2020 - January 2021</div>
<div class="timeline-title">Pentester</div>
<div class="timeline-company">XPentest</div>
<div class="timeline-description">
<ul>
<li>Analyzed and pentested domains for potential vulnerabilities</li>
<li>Conducted pentests for web applications and managed security configurations</li>
<li>Utilized Acunetix to perform analysis and generate reports</li>
<li>Consulted clients on infrastructure security configuration</li>
</ul>
</div>
</div>
</div>

</div>

---

## Education

<div class="timeline">

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">2022</div>
<div class="timeline-title">Stoa Charter</div>
<div class="timeline-company">Stoa</div>
<div class="timeline-description">
Business Management and Administration - General
</div>
</div>
</div>

<div class="timeline-item">
<div class="timeline-content">
<div class="timeline-date">2018 - 2022</div>
<div class="timeline-title">B.Tech in Computer Science and Engineering</div>
<div class="timeline-company">SRM University</div>
<div class="timeline-description">
Bachelor of Technology with focus on Computer Science, Security, and Software Engineering
</div>
</div>
</div>

</div>

---

## Core Expertise

<div class="skills-grid">

<div class="skill-category">
<h3>Product Management</h3>
<div class="skill-tags">
<span class="skill-tag">Product Design</span>
<span class="skill-tag">Strategic Roadmaps</span>
<span class="skill-tag">B2B SaaS</span>
<span class="skill-tag">Product-Led Growth</span>
<span class="skill-tag">User Research</span>
<span class="skill-tag">Agile/Scrum</span>
<span class="skill-tag">Stakeholder Management</span>
<span class="skill-tag">Release Management</span>
</div>
</div>

<div class="skill-category">
<h3>Security & Identity</h3>
<div class="skill-tags">
<span class="skill-tag">ASPM</span>
<span class="skill-tag">RBVM</span>
<span class="skill-tag">DevSecOps</span>
<span class="skill-tag">Vulnerability Management</span>
<span class="skill-tag">IAM/PAM</span>
<span class="skill-tag">Penetration Testing</span>
<span class="skill-tag">Network Security</span>
<span class="skill-tag">SIEM/SOC</span>
</div>
</div>

<div class="skill-category">
<h3>Technical Skills</h3>
<div class="skill-tags">
<span class="skill-tag">Linux/Unix</span>
<span class="skill-tag">Docker</span>
<span class="skill-tag">Git</span>
<span class="skill-tag">Azure AD</span>
<span class="skill-tag">SAML/SSO</span>
<span class="skill-tag">Shell Scripting</span>
<span class="skill-tag">Vim</span>
<span class="skill-tag">Command Line</span>
<span class="skill-tag">Power Automate</span>
</div>
</div>

<div class="skill-category">
<h3>Tools & Platforms</h3>
<div class="skill-tags">
<span class="skill-tag">ForgeRock</span>
<span class="skill-tag">CyberArk</span>
<span class="skill-tag">Okta</span>
<span class="skill-tag">Acunetix</span>
<span class="skill-tag">Microsoft Azure</span>
<span class="skill-tag">BeyondTrust</span>
<span class="skill-tag">Metasploit</span>
<span class="skill-tag">Salesforce</span>
</div>
</div>

</div>

---

## Achievements & Recognition

<div class="achievements-grid">

<div class="achievement-card">
<strong>Head Boy</strong>
Leadership recognition for exceptional contribution and responsibility
</div>

<div class="achievement-card">
<strong>HAC (Hack Against Covid)</strong>
Top 15 - Hackathon focused on solving COVID-19 challenges
</div>

<div class="achievement-card">
<strong>SIH 2020</strong>
6th Rank - Smart India Hackathon, national-level innovation competition
</div>

<div class="achievement-card">
<strong>Bhopal Smart City Hackathon 2.0</strong>
Top 20 - Smart city solutions and urban innovation
</div>

<div class="achievement-card">
<strong>Hacked Hackathon 2021</strong>
Top 10 - Competitive programming and problem-solving
</div>

<div class="achievement-card">
<strong>QuineSnake Publication</strong>
Published research on "QuineSnake - The Code is the Game"
</div>

</div>

---

## Security Deep Dives

My interest in security extends beyond my day job. On this site, I frequently explore topics ranging from defensive best practices and privacy:

- [Protecting Your Digital Self](blog/protecting_your_digital_self) — Best practices for personal digital security
- [Password Breaches](blog/passwordbreaches) — Understanding and preventing credential compromises

To the technical details of security tools and concepts:

- [Metasploit](blog/metasploit) — Penetration testing framework deep dive
- [CTFs (Capture The Flag)](blog/c4ptur3-th3-fl4g) — Security challenges and learning
- [Network Security](blog/networksecurity) — Fundamentals of securing network infrastructure

---

## Technical Explorations

While my primary focus is product strategy, I enjoy diving into the technical weeds. I'm comfortable in Linux environments (having previously run Arch Linux, now primarily on macOS) and enjoy working with various development tools and technologies:

**Containerization & Infrastructure**

- [Docker Architecture](blog/dockerarchitechture) — Understanding container orchestration
- [Containerization](blog/containerization) — Modern application deployment

**Development Workflow**

- [VCS (Version Control Systems)](blog/vcs) — Git workflows and best practices
- [Vim](blog/vim) — The timeless text editor
- [Shell Scripting](blog/shellscripting) — Automation and productivity
- [Shell](blog/shell) — Command-line mastery

**My Setup**

- [Development Environment & Configurations](blog/setup) — Tools, dotfiles, and productivity setup

All my projects and experiments are available on [GitHub](https://github.com/shagunattri).

---

## Reading & Writing

As an avid reader, I share my thoughts on books I've found insightful, particularly around technology, product, business, and personal development:

- [Books I've Read](blog/Books) — Reviews and key takeaways
- [Reading Lists](blog/wutiread010123) — Curated recommendations

I believe in continuous learning and often write about concepts that challenge my thinking or offer new perspectives on building products and understanding technology.

---

## Beyond Work

When I'm not building products or exploring technology, you'll find me:

- **Photography**: Capturing moments and perspectives through the lens
- **Writing**: Sharing insights and learnings on this site and [Twitter](https://twitter.com/shagunattri_)
- **Travel**: Exploring new places and cultures
- **Reading**: Always have a book (or three) in progress
- **F1**: Following the drama and engineering excellence of Formula 1
- **Cricket**: Enjoying the strategic depth of the game

---

## Certifications

- **Stoa Charter** — Business Management
- **Introduction to Cybersecurity** — Foundational security concepts
- **LeanAppSec Fall Edition Certificate** — Application security best practices
- **Cloud Development** — Cloud infrastructure and services
- **DFIR: The Divide and Conquer Process** — Digital Forensics and Incident Response

---

## Get In Touch

I'm always interested in connecting with fellow product enthusiasts, technologists, security professionals, and curious minds. Whether you want to discuss product strategy, cybersecurity, or just chat about F1 and books — feel free to reach out!

- **Linktree**: [linktr.ee/shagunattri](https://linktr.ee/shagunattri)
- **Email**: [mail@shagun.xyz](mailto:mail@shagun.xyz) | [pingshagunattri@gmail.com](mailto:pingshagunattri@gmail.com)
- **LinkedIn**: [linkedin.com/in/shagunattri](https://www.linkedin.com/in/shagunattri/)
- **Twitter**: [@shagunattri_](https://twitter.com/shagunattri_)
- **GitHub**: [github.com/shagunattri](https://github.com/shagunattri)

---

<small>This site is built with [Hugo](https://gohugo.io/) — a blazingly fast static site generator. The source code is available on [GitHub](https://github.com/shagunattri/site).</small>
