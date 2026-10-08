---
title: "Hands-On with Microsoft Copilot: What Works (and What Doesn't) in Business Analytics"
description: "Testing Microsoft Copilot on real data-analysis tasks during my Masters in Business Analytics: where it helps, and where it falls short."
pubDate: 2025-07-15
categories: ["Business Technology","Data Analytics"]
graph:
  path: ["Excel data", "Copilot", "Draft charts", "Analyst review"]
  edges: [["Clear prompts", "Copilot"], ["IBCS standards", "Analyst review"]]
---

*This post documents my hands-on experience testing Microsoft Copilot for data analysis as part of my Masters in Business Analytics coursework. For more thoughts on human-AI collaboration in analytics, see my previous post: "The Human Layer: What AI Can't Replace in Data Analytics."*

Last week, while manually creating scatter plots and correlation matrices in Excel, it struck me how many tedious steps were involved—putting columns together, sorting, selecting data ranges, removing defaults, adding axis labels variable by variable. There had to be a better way.

That's when I decided to test Microsoft Copilot's data analysis capabilities, using the same car sales dataset we'd been working with in class. What I discovered was both impressive and illuminating about the current state of AI in business analytics.

## The Promise: AI-Powered Analysis in Minutes

Microsoft Copilot comes integrated across Office 365 applications—Teams, Outlook, Word, Excel, and more. While our team frequently uses it for meeting summaries, I'd never tried the data analysis features in Excel.

The setup couldn't be simpler. No installation, no coding required. Click the Copilot logo, and it immediately reads your spreadsheet data. It offers options like "Basic Analysis" or "Advanced Analysis" using Python, among other preset prompts.

I loaded the car sales data from my Masters course and clicked "Advanced Analysis." Within minutes, Copilot had created a new tab filled with charts and insights, leveraging "Python in Excel"—Microsoft's partnership with Anaconda that brings Python capabilities directly into spreadsheets.

## What Worked Impressively Well

**Prompt 1: "Create an advanced analysis of my data in this Excel sheet"**

The results were genuinely impressive. Copilot generated multiple visualization types that made analytical sense:

-   A histogram of car prices showing distribution patterns
-   Car price vs. year scatter plot revealing depreciation trends
-   Car price vs. mileage scatter plot showing usage impact
-   Boxplots comparing prices across engine sizes and fuel types

What struck me was that the computer doesn't "understand" cars or automotive markets, yet it created informative graphics by intelligently spotting correlations in the data. This would be an excellent starting point for any analyst—the kind of exploratory analysis that typically takes an hour was completed in minutes.

**Prompt 4: "Create a boxplot of car prices with outliers highlighted"**

**Prompt 5: "Create a table which includes details of the outliers from the above boxplot"**

Both of these worked perfectly, likely because the prompts were crystal clear about the expected output. The outlier analysis was particularly well-executed, providing both visual identification and detailed data tables.

## Where Human Expertise Became Essential

**Prompt 2: "Create a correlation matrix for each of the variables, with sparklines in each of the empty cells and histograms for the cells which are correlated with themselves"**

Copilot successfully created a correlation heatmap, but immediately I spotted quality issues that required human intervention. The visualization used red and blue color coding—which violates IBCS (International Business Communication Standards) accessibility recommendations for users who are colorblind.

This was perfect for exploratory purposes, allowing me as the analyst to identify correlating variables for further investigation. But it would need significant modification before presenting to stakeholders.

**Prompt 3: "Try again to create the sparklines graphs for each of the correlations"**

This simply didn't work, despite being one of Copilot's own suggested prompts. No clear explanation why—it just failed to execute.

## The Broader Implications

This hands-on experience crystallized something important about the current state of AI in business analytics. Copilot is genuinely transformative—it shifts the goalposts of what can be achieved in terms of both time and skill level.

**The democratization effect is real.** Data-literate people who aren't necessarily trained analysts—sales managers, inventory managers, researchers—can now load data and quickly generate meaningful charts. They can iterate through prompts until they have something useful for exploratory or explanatory purposes.

**But this doesn't eliminate the need for skilled analysts.** Instead, it elevates our role. The bar has been raised, and what's expected of top business analysts has risen with it.

Top analysts will increasingly be hired based on distinctly human skills:

-   **Telling compelling stories**, not just publishing incoherent graphs. This includes choosing appropriate visualizations, ensuring accessibility, and crafting narratives that resonate with specific audiences.
-   **Conducting AI tools sophisticatedly** to extract timely signals that business executives can act upon faster than ever.
-   **Applying domain expertise** to spot quality issues, context problems, and strategic implications that AI simply can't recognize.

## What This Means for Analytics Education

This experience also highlighted a gap in how we prepare future analysts. While the theoretical foundations learned at university remain important—timeless principles of design, statistical thinking, and narrative construction—fluency with AI tools like O365 CoPilot is becoming essential for top positions.

The future analyst needs to master both the art of asking the right questions and the science of orchestrating AI tools to find answers efficiently.

## The Takeaway

Microsoft Copilot for Excel is genuinely impressive and will be a permanent part of my analytics toolkit. It excels at rapid prototyping, exploratory analysis, and handling routine visualization tasks that used to consume significant time.

But my testing confirmed what I've observed across all my analytics projects: AI is incredibly powerful when guided by human expertise, but it requires that guidance to deliver truly valuable insights.

The most successful analysts won't be those who resist these tools or those who blindly trust their outputs. They'll be the ones who understand how to collaborate with AI—leveraging its speed and computational power while applying human judgment, domain knowledge, and strategic thinking to create analytics that truly drive business value.

* * *

*Want to see more examples of human-AI collaboration in analytics? Check out my [portfolio projects](/portfolio) and read about ["The Human Layer"](/the-human-layer-what-ai-cant-replace-in-data-analytics/) in data analytics on the blog.*
