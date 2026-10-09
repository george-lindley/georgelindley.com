// Everything about George that isn't a blog post or a project.
// Pages read from here, so editing the site's copy never means touching markup.

export const profile = {
  name: "George Lindley",
  role: "AI Solutions Consultant",
  location: "Riyadh, KSA",
  email: "george.j.lindley@gmail.com",
  cv: "/files/george_lindley_cv_ai_solutions_consultant_2026.pdf",
  description:
    "I build GenAI and analytics products for education, workforce planning and institutional decision-making.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/georgelindley/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/george-lindley", icon: "github" },
    { label: "X (Twitter)", href: "https://twitter.com/georgelindley_", icon: "x" },
  ],
} as const;

export const about = {
  kicker: "GenAI Products",
  intro: [
    "I build GenAI and analytics products for education, workforce planning and institutional decision-making.",
    "Based in Riyadh. 10 years in education, now in AI product and analytics. Current projects include:",
  ],
  current: [
    {
      name: "Saudi Tender Intelligence",
      href: "/project/saudi-tender-intelligence/",
      text: "an AI tool that builds on my MSc research at Aston: a neural-network recommender ranks new Saudi government tenders by fit, and estimates each one's value, competition and compliance risk. It informs my work at Pearson.",
    },
    {
      name: "Causal Blocks",
      href: "/project/causal-blocks-interactive-causal-inference/",
      text: "a data analytics project that makes causal reasoning visual and intuitive, using UK education data as the case-in-point for applying this methodology.",
    },
    {
      name: "Regulated Plants Database",
      href: "/project/invasive-plants-geospatial-analytics/",
      text: "a public reference database of regulated invasive plants, published with United Nations University (UNU-INWEH) and UC Davis. I handle the centralisation, cleaning, analysis and visualisation of the regulatory data.",
    },
  ],
} as const;

export const resume = {
  headline: "AI Solutions Consultant",
  summary: "GenAI and analytics products for education and workforce planning.",
  experience: [
    {
      period: "November 2017 - Present",
      title: "Pearson: across all roles",
      org: "Pearson Middle East",
      points: [
        "KSA revenue grew 18% a year from 2018 to 2024, helped by Academic Progress, a regional title I championed.",
        "Global titles don't sell in KSA, so I build the case for regional editions: market research, forecasts and the pitch to senior management, then the local guidelines, USP, sales strategy and distribution.",
      ],
    },
    {
      period: "July 2021 - Present",
      title: "Regional Commercial Lead, KSA and Bahrain",
      org: "Pearson Middle East",
      points: [
        "Lead commercial and growth strategy for KSA and Bahrain; have managed an account manager since 2022.",
        "Championed 3 new schools titles for the most lucrative segments (2 in 2027, 1 in 2028), with a new bundled-solutions offer.",
        "Track Arabic-language education tenders with my own AI tool, sending colleagues the 2–3 a month worth acting on.",
        "Act as solutions consultant in university technical decisions, such as LTI integration versus batch registration for digital learning platforms.",
        "Translate institutional and workforce needs into product positioning, pricing and go-to-market decisions with senior commercial, academic and product stakeholders.",
      ],
    },
    {
      period: "October 2019 - July 2021",
      title: "Learning Consultant",
      org: "Pearson Middle East",
      points: [
        "Championed Academic Progress from market research to launch: institutional data, focus groups, forecasts, local guidelines and USP. It became Pearson's #1 English course in Africa, the Middle East and Turkey, 2020–2022.",
        "Led its expansion beyond KSA, into Qatar, Kuwait and the UAE.",
        "Advised regional universities on English programmes and learning outcomes, and led digital learning platform rollouts through adoption and change management.",
      ],
    },
    {
      period: "November 2017 - September 2019",
      title: "Sales Manager",
      org: "Pearson Saudi Arabia",
      points: [
        "Ran regional sales operations: revenue forecasting, territory planning and account strategy.",
        "Grew a regional product line to USD 7M in sales and market leadership in the region.",
        "Used market analysis and competitive intelligence to shape product selection and sales training.",
      ],
    },
    {
      period: "April 2016 - October 2017",
      title: "Language Teacher / EdTech Contributor",
      org: "King Saud University",
      points: [
        "Taught academic English to preparatory-year students, and built interactive content, assessments and digital exam-preparation workflows.",
      ],
    },
  ],
  education: [
    {
      period: "January 2025 - Present",
      title: "MSc - Business Analytics",
      org: "Aston University",
      points: [
        "Dissertation: Saudi Procurement Bid Intelligence, testing whether national procurement award data can support supplier bid decisions, and where the limits of that intelligence lie.",
      ],
    },
    {
      period: "2023",
      title: "CS50x: Introduction to Computer Science",
      org: "Harvard University (online)",
      points: [
        "Foundations in programming and computer science; completed 2023.",
      ],
    },
    {
      period: "November 2021",
      title: "iSell (Sales Academy)",
      org: "Pearson Education",
      points: [
        "Internal training on advanced sales practices, including consultative selling techniques and strategic account management.",
      ],
    },
    {
      period: "December 2017",
      title: "PASS Training (Sales)",
      org: "Pearson Education",
      points: [
        "Sales methodology training for new hires, focusing on solution selling and customer engagement strategies.",
      ],
    },
    {
      period: "September 2010 - September 2011",
      title: "MA - International Relations",
      org: "University of Warwick",
      points: [
        "Modules in International Relations Theory, EU and the World, and Democracy and Development.",
      ],
    },
    {
      period: "September 2006 - June 2009",
      title: "BSc - Modern Languages",
      org: "Aston University",
      points: [
        "Modules in Teaching English as a Foreign Language, Language Pedagogy and Linguistics",
      ],
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "C1" },
    { name: "French", level: "C1" },
    { name: "Arabic", level: "Learning" },
  ],
  skills: [
    {
      title: "AI, Analytics & Product Capabilities",
      items: [
        { name: "Vector Search and Retrieval", value: 90 },
        { name: "Recommender Systems / Neural Ranking", value: 70 },
        { name: "GenAI Workflow Design", value: 70 },
        { name: "Python / SQL Analytics", value: 80 },
        { name: "Data Visualisation and Dashboards", value: 80 },
        { name: "Git / Version Control", value: 70 },
        { name: "Product Prototyping", value: 70 },
      ],
    },
    {
      title: "Strategic Capabilities",
      items: [
        { name: "Education & Workforce Strategy", value: 90 },
        { name: "Institutional Partnerships", value: 90 },
        { name: "Market & Growth Strategy", value: 90 },
        { name: "Commercial & CRM Analytics", value: 90 },
        { name: "Stakeholder Implementation", value: 80 },
      ],
    },
  ],
};
