---
title: "Causal Blocks: Interactive Causal Inference"
description: "An interactive tool for learning causal inference: drag data onto a canvas, draw causal arrows, and watch the DoWhy estimate update."
pubDate: 2026-09-29
categories: ["Analytics","Data Visualisation"]
link: "https://causalblocks.com"
cover: "../../assets/uploads/2026/09/causal-blocks-cover.jpg"
card:
  role: "Designer & developer · Python, DoWhy, JavaScript"
  problem: "Causal reasoning is powerful but hard to explain to anyone who isn't a specialist."
  action: "Causal Blocks lets people draw a causal graph over real UK education data and watch the estimate update with every arrow."
  outcome: "It shows why the naive reading of \"small towns score better\" is wrong."
---

## Solution Overview

"Correlation is not causation" is one of the first things anyone learns about data. Almost nobody is taught what to do instead. Most statistics and analytics courses teach estimation in depth, then leave students with a rule of thumb: when in doubt, control for more variables. That rule can quietly change the question being answered, or create bias that wasn't there.

Causal Blocks is an interactive tool for learning causal inference by doing it. Students drag data columns onto a canvas as blocks, draw arrows for what they believe causes what, and watch an estimate from DoWhy, the open-source causal inference library started at Microsoft, update with every arrow. No Python required. Each block is coloured by the role the graph gives it: confounder, mediator, collider or instrument. The graph explains itself.

[![Screenshot of the Causal Blocks demo: a causal graph of region, town size, deprivation and coastal location feeding an education score, beside a panel reporting a total effect of −0.70 for larger towns.](../../assets/uploads/2026/09/demo.png)](https://causalblocks.com)

## What's New, and What Isn't

Causal graphs are not my invention. Directed acyclic graphs (DAGs) are the standard language of causal inference, formalised by Judea Pearl, and good tools already exist on both sides. [DAGitty](https://www.dagitty.net/) lets you draw a DAG and tells you what to control for. [DoWhy](https://www.pywhy.org/dowhy/) estimates causal effects from data and tests them, but you have to write Python to use it.

What Causal Blocks adds is the bridge between the two, in a form built for learning:

-   **Drawing and estimating in one place.** The blocks you draw become the graph DoWhy uses, so every arrow you add or remove changes the estimate in front of you, with no code to write.
-   **Blocks that show their role.** Each block's colour comes from where it sits in the graph, so a confounder, a mediator and a collider look different the moment you draw them, and the tool explains what that means for what to control for. In the game (see Future Development), the blocks go further and get personalities, so younger learners can recognise causal patterns by character.
-   **A learning environment, not a research tool.** Guided presets, deliberate "common mistake" modes and plain-English coaching are designed for people meeting causal inference for the first time.

## Inspiration

The project started with a dataset. In January 2024, [#TidyTuesday](https://github.com/rfordatascience/tidytuesday/blob/main/data/2024/2024-01-23/readme.md), the weekly open-data project from the R community, republished the Office for National Statistics data on educational attainment in English towns. It came with the ONS article [*Why do children and young people in smaller towns do better academically than those in larger towns?*](https://www.ons.gov.uk/peoplepopulationandcommunity/educationandchildcare/articles/whydochildrenandyoungpeopleinsmallertownsdobetteracademicallythanthoseinlargertowns/2023-07-25) (July 2023).

The title asks a causal question. The body of the article answers it with correlations. That gap, between the question people want answered and the methods they are taught, is what convinced me causal thinking needs to reach a much wider audience, and that the way to get it there is to make it something people can see and play with.

## The Demo: England's Small Towns

The first example uses UK Office for National Statistics (ONS) data on educational attainment across 1,082 English towns. The ONS reported that children in smaller towns do better at school. The demo shows three readings of the same data:

-   The correlation: small towns look better.
-   Controlling for everything: the sign flips, and large towns look better.
-   The causal graph: it explains why. The small-town advantage runs almost entirely through deprivation, and among equally deprived towns, larger ones come out ahead.

Two red "common mistake" presets let students reproduce each wrong reading and see what went wrong.

The demo runs on the towns dataset. Uploading your own CSV is in development: a proof of concept already runs the full DoWhy pipeline in the browser, with results identical to native Python, so no data has to leave the student's machine.

## Analytics Approach

-   Precomputed causal estimates. Every combination of treatment, outcome and adjustment set across seven variables (960 in total) was run through DoWhy in advance, each with three refutation tests. The site answers instantly and needs no server.
-   Identification in the browser. DoWhy's rules for choosing what to adjust for were ported to JavaScript, covering both the total and the direct effect. Automated tests check the port against DoWhy itself on 600 randomly generated graphs.
-   Plain-English coaching. Each result comes with a headline sentence ("Larger towns score 0.70 points lower on education") and an explanation of what the graph did: which variables were adjusted for, which were left out, and why.

## Who It's For

-   Students in statistics, analytics and data science, learning why the choice of controls matters.
-   Lecturers who want a live classroom example of confounding, mediation and collider bias.
-   Analysts who were taught to "control for everything" and want to see where that goes wrong.

## System Architecture

A static site hosted on GitHub Pages, with no backend. A Python build step runs DoWhy across every combination and writes the results to a small data file. In the browser, the graph logic picks the same adjustment set DoWhy would and looks the answer up. A companion Python library, causalblocks, derives variable roles from graph structure for use in notebooks, and has its own test suite.

## Future Development

The next step is a game that teaches causal thinking to middle schoolers, long before they meet a regression. Players explore small worlds where things happen for a reason (a crop fails, a town floods, a team starts winning) and work out why by drawing the arrows, testing a change, and seeing whether the world behaves the way their graph predicts.

It is being built in two halves that shape each other. A coding agent builds the worlds and the game mechanics quickly enough to try an idea in a day. My side is the learning design: what a 12-year-old can reason about, how to sequence ideas from "this causes that" up to confounders and hidden common causes, and where to put the scaffolding so each level is a stretch but never a wall. Each playtest feeds both: what children struggle with changes the curriculum, and the curriculum decides what the agent builds next.

It draws on the same thing as the rest of Causal Blocks: ten years of curriculum and course development, and a belief that causality is a way of thinking worth teaching early.

## Links

-   Live site: [causalblocks.com](https://causalblocks.com)
-   Data: [ONS, Educational attainment of young people in English towns](https://www.ons.gov.uk/peoplepopulationandcommunity/educationandchildcare/articles/whydochildrenandyoungpeopleinsmallertownsdobetteracademicallythanthoseinlargertowns/2023-07-25), via [#TidyTuesday, 23 January 2024](https://github.com/rfordatascience/tidytuesday/blob/main/data/2024/2024-01-23/readme.md)
-   Essay: [Do small towns really educate children better?](/do-small-towns-really-provide-better-education-a-uk-detective-story/)
-   Source code: [github.com/george-lindley/causal-blocks](http://github.com/george-lindley/causal-blocks) (open source, MIT)
