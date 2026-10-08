---
title: "Regulated Plants: Geospatial Analytics"
description: "A public reference database of regulated invasive plants across 106 jurisdictions, published with United Nations University (UNU-INWEH) and UC Davis."
pubDate: 2025-04-02
categories: ["Analytics","Data Visualisation"]
link: "https://regulatedplants.unu.edu"
cover: "../../assets/uploads/2025/04/regulated-plants-cover.jpg"
card:
  role: "Data consultant & developer · with UNU-INWEH and UC Davis"
  problem: "Invasive plant regulations were scattered across 106 jurisdictions, with no shared format."
  action: "I centralised, cleaned and mapped them into one public database of 2,193 taxa, and built the web app."
  outcome: "Hosted by United Nations University and presented at the Dresden Nexus Conference 2025."
---

**Published with United Nations University (UNU-INWEH) and the UC Davis Department of Plant Sciences**, the Regulated Plants Database is a public reference catalogue of regulated invasive plants and noxious weeds: **2,193 taxa across 106 jurisdictions**. It is hosted at [regulatedplants.unu.edu](https://regulatedplants.unu.edu), featured in UNU's Sustainability Nexus AID Tools collection, and was presented at the Dresden Nexus Conference 2025.

Across the world, governments publish lists of regulated plant species to protect ecosystems, agriculture, and biodiversity. However, these lists are scattered across agencies, jurisdictions, and formats, making it difficult to answer even basic analytical questions:

-   Which regions face the highest regulatory burden?
-   Where do policies diverge or align?
-   Which species create the greatest cross-border compliance risk?

This data cleaning and data analytics project was built to answer those questions clearly.

## Solution Overview

We developed a comprehensive analytical database of 2,193 regulated plant taxa across 106 jurisdictions, paired with an interface designed for decision-making, not data browsing. The system supports two primary analytical entry points:

1.  **Geospatial Analysis**: Visualizing regulatory density across states/provinces through interactive mapping
2.  **Species-Based Analysis**: Searching by specific plant species to identify all jurisdictions where it faces regulation

Below is the current homepage. To explore it yourself, visit [regulatedplants.unu.edu](https://regulatedplants.unu.edu).

![The Regulated Plants Database homepage: release details and the UNU-INWEH and UC Davis publishing partners, coverage of 106 jurisdictions and 2,193 taxa, and a world map shading regions by number of regulated species, with toggles for regional, national and international regulations.](../../assets/uploads/2026/09/regulated-plants-homepage.jpg)

*The homepage: publishing partners, coverage statistics and the regulation map (geospatial analysis)*

## Data Analytics Approach

This project was designed as an analytics system from the ground up, with the interface serving the analysis for all users visiting the website.

### 1\. Data Structuring & Normalisation

Regulatory lists from multiple jurisdictions were consolidated into a unified analytical dataset, standardising:

-   Species taxonomy
-   Jurisdiction hierarchy (state, country, and international)
-   Regulatory classification (such as 'low/high', and 'A/B/C')

This step resolved inconsistencies that typically prevent meaningful comparison across regions.

### 2\. Metric & Threshold Design

To support decision-making, raw counts were transformed into interpretable signals:

-   Jurisdiction-level regulations - allowing the user to toggle between state/country/international
-   Fixed analytical thresholds enabling cross-region comparison
-   Visual encoding optimised for policy interpretation

The emphasis was on clarity and comparability.

### 3\. Analytical Interfaces

Two complementary analytical views were implemented to cater for different user groups (see 'stakeholder groups' below):

-   Geospatial analysis to reveal regulatory patterns at a glance
-   Species-centric analysis to assess cross-jurisdictional risk

## Stakeholder Impact

This analytical platform delivers measurable value to multiple stakeholder groups:

-   **Agricultural Professionals**: Identify high-risk regulatory zones to inform cultivation planning and compliance strategy
-   **Farmers and Landowners**: Quickly verify regulatory status of existing or planned plantings in specific locations
-   **Research Scientists**: Target specific regions for comparative studies based on regulatory patterns
-   **Policy Makers**: Benchmark regulatory approaches against neighboring jurisdictions to inform policy development
-   **Conservation Organizations**: Identify regions with heightened focus on invasive species control

By transforming fragmented regulatory data into actionable intelligence, this platform significantly reduces compliance research time while improving decision-making quality across multiple domains.

## System Architecture

The system architecture reflects a common analytics pattern, taking input from various *data sources*, alongside the *user interaction* to create instant and useful visualisation as can be seen in below diagram.

![System architecture diagram: government, CSV and research data flow through a Python ETL pipeline into a SQLite database, then a Flask API serving an HTML/JavaScript frontend with Leaflet.js maps.](../../assets/uploads/2025/03/system_architecture_invasive.jpg)

## Future Development: Prescriptive Analytics

A natural next step is decision APIs. We've separated the website and data storage deployments, to build a professional-grade API on top of the data. As well as powering the Regulated Plants web app, the API will also be open to paying e-commerce websites for real-time prescriptive analytics.

We are approaching e-commerce giants to integrate the API into their websites, to ensure that their customers are warned if they are purchasing plants and shipping them to a jurisdiction where they are prohibited due to their invasive quality.

## Recognition and Deployment

-   Officially hosted by United Nations University (UNU-INWEH)
-   Featured within the UNU Sustainability Nexus AID Tools collection
-   Presented at Dresden Nexus Conference 2025
-   Developed in collaboration with UC Davis Plant Sciences, with full affiliation

**Live platform:**

[https://regulatedplants.unu.edu](https://regulatedplants.unu.edu)  
**Code repository (open source):**

[https://github.com/oozr/invasive\_plants](https://github.com/oozr/invasive_plants)

**View our latest press release:**

[https://unu.edu/inweh/news/regulated-plants-database-unus-new-open-access-tool-help-prevent-spread-harmful-plants](https://unu.edu/inweh/news/regulated-plants-database-unus-new-open-access-tool-help-prevent-spread-harmful-plants)
