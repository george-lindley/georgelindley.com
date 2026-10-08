---
title: "Saudi Tender Intelligence: An AI Bid Desk for Pearson"
description: "AI matching of Saudi government tenders for Pearson, with estimates of each tender's value, competition and compliance risk, and a market view that informed strategy in KSA."
pubDate: 2026-10-08
categories: ["Analytics","AI"]
graph:
  path: ["New tenders", "AI matching", "Bid shortlist"]
  edges: [["Pearson profile", "AI matching"], ["Award history", "Bid shortlist"]]
card:
  role: "Self-initiated, Pearson KSA · Python, OpenAI, Qdrant"
  problem: "Pearson had no bid desk in Saudi Arabia, and about 100 government tenders are published every day, in Arabic."
  action: "I built an AI pipeline that matches each new tender to Pearson's catalogue and estimates its value, likely competitors and compliance risk."
  outcome: "It surfaces the 2–3 a month worth acting on, and informed briefings to the Head of ELL and the business case for a regional HQ in KSA."
---

## Solution Overview

Saudi government procurement runs through Etimad, the national tendering platform. It publishes about 100 new tenders a day, roughly 50,000 a year, almost all of them in Arabic. Pearson had no bid desk in the Kingdom, so education tenders that fitted its products went unseen, and nobody could say how much public education business existed in Saudi Arabia.

I built a tender intelligence pipeline to answer both questions: which tenders should Pearson bid for this week, and what does the public education market look like as a whole.

## How It Works

-   **Collection.** Etimad is scraped five times a day, so new tenders are picked up while there is still time to respond.
-   **Matching.** Each tender is embedded with OpenAI embeddings and searched against Pearson's English product profile in Qdrant, a vector database. Cross-lingual retrieval matches Arabic tenders to English product descriptions without translating everything first.
-   **Explanation.** An LLM writes the reason behind each match in plain English, so colleagues can see in seconds why a tender was flagged and decide whether to act.
-   **Estimation.** For each recommended tender, the tool estimates its likely value, the number of competitors to expect and the compliance risk, so the bid decision rests on more than a keyword match.

## From Bid Alerts to Market Strategy

The same data that finds individual opportunities also shows the shape of the market: which ministries and universities buy education services, how often, and at what scale.

-   A year of this evidence became a series of presentations to the Head of English Language Learning on the opportunities in KSA.
-   It informed the business case for establishing Pearson's regional headquarters in Saudi Arabia.
-   Day to day, it narrows about 2,000 new tenders a month down to the 2–3 worth acting on.

## Research Behind It

The estimates draw on the same questions as my MSc dissertation at Aston University, *Saudi Procurement Bid Intelligence*, which back-scraped six years of Etimad awards (75,000 competitions, 2020–2025) to test how far public award data can guide supplier bids: how many rivals to expect, how likely a bid is to be rejected, and what the winning price tends to be.

## Next Steps

-   A multilingual embedding model, to compare against the current cross-lingual matching.
-   A two-tower recommendation model trained on six years of awards, to measure the matcher's precision against what suppliers actually won.

**Stack:** Python, web scraping, OpenAI embeddings and LLM, Qdrant, scheduled jobs.
