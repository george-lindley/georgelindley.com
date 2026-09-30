---
title: "The Human Layer: What AI Can't Replace in Data Analytics"
description: "Reflections from real analytics projects and my Masters on the parts of data analytics that still need a human."
pubDate: 2025-07-14
categories: ["Business Technology","Data Analytics"]
---

*This post is a reflection on the data analytics projects I've been involved in, as well as my Masters in Business Analytics. You can view the published projects in my portfolio at: www.georgelindley.com/portfolio.*

In an era where ChatGPT can generate charts and Claude can write code, many wonder: do we still need human data analysts? After completing my Masters in Business Analytics and working on several high-impact projects, I believe the answer is a resounding yes—but the role is evolving.

The future belongs to analysts who can work *with* AI, not those who fear being replaced by it. Through my portfolio projects, I've discovered that while AI excels at processing data and generating initial outputs, the most critical decisions still require human judgment, domain expertise, and strategic thinking.

Let me show you what I mean through a detailed example from my flagship project.

## The Regulated Plants Project: A Case Study in Human-AI Collaboration

In our **[Regulated Plants Geospatial Analysis](/portfolio)**, AI helped me process thousands of data points and generate initial visualisations. But the crucial insight came from my understanding of regulatory compliance patterns and stakeholder needs—recognizing that enforcement agencies would need county-level clustering for practical field operations, not just raw botanical data. No AI tool could have made that contextual leap from data to actionable intelligence.

### Where Human Expertise Was Irreplaceable

**1\. Data Curation and Domain Knowledge** The 'gold' of the Regulated Plants Database project is the curated database of plant species that are regulated in different states and provinces around the world. Crucially, this data isn't available in one place and lacks standardized formatting. There are different types of regulations, varying plant taxonomies, and it requires a subject matter expert to find this data and standardize the regulations. That's precisely why we secured backing from United Nations University and UC Davis Department of Plant Sciences.

**2\. Building Trust and Institutional Partnerships** Our team reached out to UNU and UC Davis for approval to use their logos and domains as a seal of trust. This took multiple meetings from our project lead—this 'seal of approval' was built on handshakes and website reviews by IT personnel. AI cannot build these human relationships or earn institutional trust.

**3\. Narrative Choice and Data Visualization Strategy** While AI tools can process data into any chart or graph format you request, the human element is crucial in choosing exactly which visualizations to use for accurately and effectively communicating the chosen narrative. This depends on understanding your specific audience—which could be one of many different stakeholder groups.

**4\. Aesthetic Design and User Experience** The aesthetics of the website and the charts/tables were initially created by AI, but were chosen and modified by humans. This taste and sense of design—creating experiences that resonate with human users—may never be fully replaceable by AI, as it's for humans, by humans.

**5\. Advanced Analytics for Visual Storytelling** Currently, I'm not aware of an LLM that can independently find and download geojson data from GitHub repositories, minimize file sizes, and pair it with geographical data from CSV files or SQL tables. This was essential for representing our CSV file of regulations through an interactive map. I'm sure this capability will evolve, but for now, this type of advanced analytics requires significant human orchestration.

### How AI Accelerated Our Work

**1\. [Claude Code for Web Development](https://www.anthropic.com/claude-code)** I used Claude Code to build the website under strict programming guidance. Having built many websites by hand using the Flask web framework, I was able to effectively guide the LLM in creating the various files and folders:

-   Created code to transform the CSV master sheet into an SQL database. When we update the CSV sheet, the code automatically updates the database.
-   Built the Flask app under strict prompting, including JavaScript/Ajax files that combine geojson data by country with data returned by the Python code.

**2\. [Railway.app for Deployment](https://railway.com/)** Railway.app provides the cloud deployment infrastructure that takes our code from development to production. It automatically reads our GitHub repository, sets up the necessary server environment, manages dependencies, and transforms our Flask application into the live web application you see today. This streamlined deployment process allowed us to focus on the analytics and user experience rather than server management.

## The Future of Human + AI Analytics

AI is transformative for analytics—an absolute godsend for practitioners in this field. AI has democratized data analytics, allowing sales managers, researchers, and others to quickly create visualizations. This also empowers data analysts to create more advanced, more visually appealing, and more effective analytics by using LLMs strategically.

However, this democratization doesn't eliminate the need for skilled analysts—it elevates our role. While anyone can now create a basic chart, it takes human expertise to:

-   Ask the right questions of the data
-   Understand the business context and implications
-   Navigate complex stakeholder needs
-   Build trust and institutional relationships
-   Make strategic decisions about what story to tell and how to tell it

This pattern of human-AI collaboration repeated across all my projects—from supply chain optimization requiring deep understanding of operational constraints, to financial modeling where regulatory knowledge shaped analytical approaches.

## Why This Matters for Your Organization

Organizations that understand this distinction—between AI-generated outputs and human-guided insights—will have a significant competitive advantage. They need analysts who can harness AI's power while providing the strategic thinking, domain expertise, and stakeholder management that only humans can deliver.

The question isn't whether AI will replace data analysts. It's whether your organization will have analysts who can effectively collaborate with AI to deliver insights that truly drive business value.
