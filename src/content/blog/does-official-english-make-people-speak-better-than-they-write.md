---
title: "Does official English make people speak better than they write?"
description: "Native English speakers don't top the IELTS table, and that tells us more about who sits the test than about English. A better question, and a causal answer, hides in the gap between speaking and writing."
pubDate: 2026-10-10
categories: ["Data Analytics","Education"]
graph:
  path: ["Official English", "Spoken exposure", "Speak–write gap"]
  edges: [["Colonial history", "Official English"], ["Colonial history", "School quality"], ["School quality", "Speak–write gap"]]
---

In August 2026, [#TidyTuesday](https://github.com/rfordatascience/tidytuesday/blob/main/data/2026/2026-08-18/readme.md) published three years of IELTS test statistics: mean scores in Listening, Reading, Writing and Speaking, broken down by first language and by nationality. The first thing I looked for was the obvious one. Surely the people whose first language is English score highest on an English test?

They don't. In 2024-25, German speakers led the Academic test with a mean band of 7.6. Native English speakers came third, behind Greek speakers, and fifth in General Training. In three years of data, English has never ranked first.

![Bar charts of the eight highest-scoring first languages among IELTS test takers in 2024-25. Academic: German 7.60, Greek 7.24, English 7.06, Italian 7.00. General Training: German 7.17, Marathi 6.90, Russian 6.83, Afrikaans 6.80, English 6.80.](../../assets/uploads/2026/10/ielts-01-english-not-top.png)

It's a good headline. It's also not a finding about English speakers.

## 1\. The finding that isn't

The data only contains people who chose to sit IELTS, and different people sit it for very different reasons. A German speaker usually takes it because they have decided to study abroad in English: a highly educated, self-selected group. A native English speaker usually takes it only because a visa or a registration body requires it, often in a multilingual country such as Nigeria, India or the Philippines, where English is one of several everyday languages.

A causal graph makes the problem visible:

![Causal graph: Native English and Education both point into "Sits IELTS", which is marked as a collider. A visa rule also points into Sits IELTS. Native English and Education both point to IELTS score. Education and Visa rule are faded, meaning they are not measured in the data.](../../assets/uploads/2026/10/ielts-dag-selection.png)

"Sits IELTS" is a **collider**: two arrows point into it, one from being a native speaker and one from education. Looking only at test takers means conditioning on that collider, and conditioning on a collider creates a link that isn't there in the population. Among people who sit the test, being a native English speaker becomes associated with having been *made* to sit it, while non-native speakers are disproportionately the ambitious and well-educated. This is **Berkson's paradox**, the same mechanism that can make two diseases look negatively related among hospital patients, because either one is enough to get you admitted.

So the league table measures who sits the test as much as how well they speak English. No amount of analysis on these group means can undo that, because the people who never sat the test aren't in the data.

The useful question is a different one: is there anything this data *can* answer?

## 2\. A better question

One pattern in the data kept catching my eye. Groups from multilingual African countries, where English is used every day, score far higher in **Speaking** than in **Writing**: up to nearly a band above their own average in Speaking. The natural hypothesis: where English is an official language, people hear and speak it daily, and their spoken English runs ahead of their written English.

That question has two properties the league table lacks.

-   **The outcome is a difference, not a level.** Instead of overall score, the outcome is each group's Speaking score minus its Writing score. Anything that raises all four parts together, such as wealth, education, test preparation or the ambition that brought someone to the test, cancels out. Each group acts as its own control, the same logic as a fixed-effects model.
-   **The treatment can be measured from outside the data.** Whether English is official in a country doesn't come from IELTS. I took it from Wikipedia's [list of countries where English is an official language](https://en.wikipedia.org/w/index.php?title=List_of_countries_and_territories_where_English_is_an_official_language&oldid=1378630797), pinned to one revision so anyone can rebuild the column, and kept its distinction between *de jure* status (official by law) and *de facto* status (used officially in practice).

Here is the causal story:

![Causal graph: Colonial history points to Official English, the treatment, and to School quality. Official English points to Spoken exposure, a mediator, which points to the Speak–Write gap, the outcome. School quality also points to the gap. Colonial history, Spoken exposure and School quality are faded, meaning they are not measured.](../../assets/uploads/2026/10/ielts-dag-official-english.png)

-   **Official English → Spoken exposure → Speak–write gap** is the effect we want: official status means more English heard and spoken day to day.
-   **Colonial history** is a **confounder**. Countries where English is official are mostly former British colonies, and colonial history also shaped their school systems. Schooling tends to raise writing more than speaking, so it can push the gap either way.
-   That creates a **back-door path**: Official English ← Colonial history → School quality → Gap. To estimate the effect, the path has to be closed by adjusting for colonial history or school quality.

We can't measure colonial history directly. But **region** captures much of it, so I used the [World Bank's seven regions](https://datahelpdesk.worldbank.org/knowledgebase/articles/906519) as a proxy and compared countries only with their neighbours.

## 3\. Where the comparison is possible

Comparing within regions has a price. A region can only be used if it contains both kinds of country, and most don't:

-   **Sub-Saharan Africa:** every country in the data has official English. There is no comparison group, so the striking African pattern can't be separated from everything else that differs about the region.
-   **Europe, Latin America and North America:** no variation in the other direction.
-   **East Asia & Pacific and South Asia** (and the Middle East, for the Academic test only) contain both.

This is a **positivity violation**: in some strata there are no untreated units, so there is nothing to compare against. It's a gap in the data rather than in the causal structure, which is why no graph can warn you about it. You have to look.

The test itself is a **stratified permutation test**. If official status meant nothing, shuffling the official and non-official labels between countries in the same region and year would produce differences as large as the real one quite often. Doing that 20,000 times shows how unusual the real difference is, without assuming anything about the shape of the data. I ran each year separately, so the same countries aren't counted three times.

![Two lollipop charts of speaking minus writing, 2024-25, for East Asia & Pacific and South Asia. English-official countries (teal) such as the Philippines, Malaysia, Sri Lanka, Pakistan and India sit to the right of their region's average; Vietnam, China, Japan and South Korea sit to the left, with writing stronger than speaking.](../../assets/uploads/2026/10/ielts-02-within-asia.png)

## 4\. The result

Compared with their regional neighbours, nationalities where English is official speak further ahead of their writing: **+0.16 to +0.18 of a band in the Academic test** (p ≈ 0.03 to 0.05 each year) and **+0.17 to +0.24 in General Training** (p < 0.01 each year). All six tests, two test types across three years, point the same way.

![Dot chart comparing the raw and within-region estimates for each year and test type. Academic: raw differences of +0.12 to +0.16 with p between 0.15 and 0.31; within-region differences of +0.16 to +0.18 with p between 0.03 and 0.05. General Training: raw +0.20 to +0.29; within-region +0.17 to +0.24, all with p below 0.005.](../../assets/uploads/2026/10/ielts-03-raw-vs-within-region.png)

The chart shows something worth noticing about adjustment. In the Academic test, the raw comparison is weak and not significant. Pooling all countries puts India next to Germany, Brazil and Saudi Arabia, and the non-official group mixes regions with large gaps (Europe, the Middle East, Latin America) with East Asia, where writing often beats speaking. Comparing like with like **sharpens** the effect. In General Training it goes the other way: the raw difference is inflated by the African countries and the USA, adjustment drops them for lack of a comparison group, and the effect **shrinks but holds**.

Adjusting for a confounder doesn't always discount a result. It moves the estimate towards the right comparison, in whichever direction that is.

## 5\. What this doesn't show

The result is consistent with the causal story, but it rests on assumptions the data can't check, and they should be said plainly:

-   **Region is only a proxy for colonial history.** Within Asia, the official-English countries are mostly former British colonies, so official status can't be separated from the rest of that history: the language of schooling, exams, media. The effect may belong to the whole package rather than to the legal status.
-   **Selection still applies.** These are test takers, not populations. Using a difference removes a lot of the selection problem, but not all of it if the people who sit the test differ in the *shape* of their English, not just its level.
-   **It's small and ecological.** About seven Asian countries have official English, and every row is a national average, not a person. Group sizes aren't published, so a country of a few hundred test takers counts the same as one of many thousands.
-   **Africa can't be identified.** The largest gaps in the data are in Anglophone Africa, and this design can say nothing about them.

The honest bottom line: within Asia, official English goes with speaking about a fifth of a band further ahead of writing, consistently across three years and both tests. As a causal claim, it is as strong as the assumption that region stands in for colonial history.

## 6\. Why the graph came first

The league table at the start was the easy analysis, and it was the wrong one. Not because the numbers were wrong, but because the question couldn't be answered with this data, however careful the statistics. Drawing the graph showed that before any model was fitted: one question was blocked by a collider, and another could be answered, with a known gap that needed one external column and a comparison between neighbours.

That's the case for drawing causal graphs first. They don't produce the answer. They tell you which questions your data can answer at all, and what you need to add before trying.

* * *

*Thanks to [Georgios Karamanis](https://karaman.is/blog/2026/08/tidytuesday-2026-34), whose TidyTuesday chart, "Germany speaks the best test English", coloured countries by whether English is official and set me looking at this question. His title is exactly right: the data can only describe the people who sat the test. The data is IELTS's published [test statistics](https://ielts.org/researchers/our-research/test-statistics) for 2022-23 to 2024-25, via [#TidyTuesday](https://github.com/rfordatascience/tidytuesday/blob/main/data/2026/2026-08-18/readme.md). The causal graphs are drawn in the style of [Causal Blocks](https://causalblocks.com).*
