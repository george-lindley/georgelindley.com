---
title: "Saudi Tender Intelligence: A Recommender for Public Education Tenders"
description: "My own AI tool for Saudi government tenders: a neural-network recommender scores each new tender, with estimates of its value, competition and compliance risk. Built on my MSc research."
pubDate: 2026-10-08
categories: ["Analytics","AI"]
cover: "../../assets/uploads/2026/10/tender-matches.jpg"
banner: "../../assets/uploads/2026/10/tender-matches-banner.jpg"
card:
  role: "Self-initiated · Python, OpenAI, Qdrant, neural recommender"
  problem: "Saudi Arabia publishes about 100 government tenders a day, in Arabic, and the education ones are easy to miss."
  action: "I built a tool that scores each new tender with a neural-network recommender and estimates its value, likely competitors and compliance risk."
  outcome: "Its scored shortlists inform my work at Pearson, from tender links for colleagues to briefings on the KSA market."
---

## Solution Overview

Saudi government procurement runs through Etimad, the national tendering platform. It publishes about 100 new tenders a day, roughly 50,000 a year, almost all of them in Arabic. Education tenders are scattered across ministries, universities and directorates, and without a systematic way to read them, good opportunities go unseen and nobody can say how much public education business there is.

In June 2025 I started collecting the data and building my own tool to answer two questions: which new tenders are worth a closer look this week, and what does the public education market in Saudi Arabia look like as a whole. It builds on my MSc research at Aston University, below.

## How It Works

-   **Collection.** Etimad is scraped five times a day, so new tenders are picked up while there is still time to respond.
-   **Matching.** Each tender is embedded with OpenAI embeddings and searched in Qdrant, a vector database, against an English profile of the education products I work with. Cross-lingual retrieval matches Arabic tenders to English descriptions without translating everything first.
-   **Scoring.** The candidates are then ranked by a neural recommender system, described below. Its output is the fit score on each match.
-   **Explanation.** An LLM writes the reason behind each match in plain English, so it takes seconds to see why a tender was flagged.
-   **Estimation.** For each shortlisted tender, the tool estimates its likely winning price, the number of competitors to expect and the chance of rejection on compliance, so a decision rests on more than a keyword match.

![Illustrative example with sample data: the intelligence panel for one tender. Under the notice details Etimad publishes, three estimates: a likely winning price of SAR 2.4 to 3.1 million, 3 to 5 likely bidders, and a 1 in 4 chance of rejection on compliance, mostly for missing local-content documents.](../../assets/uploads/2026/10/tender-intelligence.jpg)

Each run produces a scored file of opportunities. Of about 2,000 new tenders a month, typically 2–3 are worth acting on, and I send colleagues the links to those.

## The Recommender Behind the Scores

The fit scores come from a two-tower neural network, the standard architecture for large recommender systems. One tower turns each tender into a vector from its text, agency, activity and value; the other does the same for a supplier from what it offers and what it has won before. A tender and a supplier that belong together end up close in that shared space, and the distance between them becomes the score. The model is trained on six years of Etimad awards, so it learns from what suppliers actually won rather than from keyword overlap. That makes the system two-stage, like most production recommenders: fast embedding search narrows 100 new tenders a day to a shortlist, and the recommender ranks the shortlist.

## Understanding the Market

The same data that finds individual opportunities also shows the shape of the market: which ministries and universities buy education services, how often, at what scale, and what is being asked for in tenders that are only published in Arabic. That picture informs my work at Pearson, and a year of it became a series of presentations to the Head of English Language Learning on the opportunities in KSA.

## From Research to a Working Tool

The estimates are built on my MSc dissertation at Aston University, *Saudi Procurement Bid Intelligence*. The dissertation asked what is possible: it back-scraped six years of Etimad awards (75,000 competitions, 2020–2025) and tested how far public award data can predict the number of rivals, the risk of rejection and the winning price. This tool turns those findings into something I use every week. The neural recommender goes beyond the dissertation, which tested what award data can predict but did not build a recommender.

## Next Steps

-   A multilingual embedding model, to compare against the current cross-lingual matching.

**Stack:** Python, web scraping, OpenAI embeddings and LLM, Qdrant, two-tower neural recommender, scheduled jobs.
