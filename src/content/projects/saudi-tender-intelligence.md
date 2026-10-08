---
title: "Saudi Tender Intelligence: An AI Bid Desk for Pearson"
description: "AI matching of Saudi government tenders for Pearson, with estimates of each tender's value, competition and compliance risk, and a market view that informed strategy in KSA."
pubDate: 2026-10-08
categories: ["Analytics","AI"]
cover: "../../assets/uploads/2026/10/tender-matches.jpg"
card:
  role: "Self-initiated, Pearson KSA · Python, OpenAI, Qdrant"
  problem: "Pearson had no bid desk in Saudi Arabia, and about 100 government tenders are published every day, in Arabic."
  action: "I built an AI pipeline that matches each new tender to Pearson's catalogue and estimates its value, likely competitors and compliance risk."
  outcome: "It surfaces the 2–3 a month worth acting on, and informed a series of briefings to the Head of ELL on opportunities in KSA."
---

## Solution Overview

Saudi government procurement runs through Etimad, the national tendering platform. It publishes about 100 new tenders a day, roughly 50,000 a year, almost all of them in Arabic. Pearson had no bid desk in the Kingdom, so education tenders that fitted its products went unseen, and nobody could say how much public education business existed in Saudi Arabia.

In June 2025 I started collecting the data and building a tender intelligence pipeline to answer both questions: which tenders should Pearson bid for this week, and what does the public education market look like as a whole.

## How It Works

-   **Collection.** Etimad is scraped five times a day, so new tenders are picked up while there is still time to respond.
-   **Matching.** Each tender is embedded with OpenAI embeddings and searched against Pearson's English product profile in Qdrant, a vector database. Cross-lingual retrieval matches Arabic tenders to English product descriptions without translating everything first.
-   **Explanation.** An LLM writes the reason behind each match in plain English, so colleagues can see in seconds why a tender was flagged and decide whether to act.
-   **Estimation.** For each recommended tender, the tool estimates its likely winning price, the number of competitors to expect and the chance of rejection on compliance, so the bid decision rests on more than a keyword match.

![Illustrative example with sample data: the intelligence panel for one tender. Under the notice details Etimad publishes, three estimates: a likely winning price of SAR 2.4 to 3.1 million, 3 to 5 likely bidders, and a 1 in 4 chance of rejection on compliance, mostly for missing local-content documents.](../../assets/uploads/2026/10/tender-intelligence.jpg)

## From Bid Alerts to Market Strategy

The same data that finds individual opportunities also shows the shape of the market: which ministries and universities buy education services, how often, and at what scale.

-   A year of this evidence became a series of presentations to the Head of English Language Learning on the opportunities in KSA.
-   It informed Pearson's strategy in KSA.
-   Day to day, it narrows about 2,000 new tenders a month down to the 2–3 worth acting on.

## From Research to a Working Tool

The estimates are built on my MSc dissertation at Aston University, *Saudi Procurement Bid Intelligence*. The dissertation asked what is possible: it back-scraped six years of Etimad awards (75,000 competitions, 2020–2025) and tested how far public award data can predict the number of rivals, the risk of rejection and the winning price. This project turned those findings into something Pearson uses every week.

## Next Steps

-   A multilingual embedding model, to compare against the current cross-lingual matching.
-   A neural recommendation model (a two-tower network) trained on six years of awards, to rank tenders by what similar suppliers actually won and measure the matcher's precision. This goes beyond the dissertation.

**Stack:** Python, web scraping, OpenAI embeddings and LLM, Qdrant, scheduled jobs.
