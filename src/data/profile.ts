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
    "Based in Riyadh, I combine 10 years’ education-sector experience with business analytics, AI product development and regional growth strategy across the Middle East.",
    "My current work focuses on turning messy institutional problems into usable software. Current projects include:",
  ],
  current: [
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
    {
      name: "Saudi Procurement Bid Intelligence",
      text: "(MSc dissertation, Aston University), testing whether national procurement award data can support supplier bid decisions, and where the limits of that intelligence lie.",
    },
  ],
  services: [
    { icon: "branch", title: "GenAI Product Development", text: "Building AI-enabled tools that turn messy institutional workflows into usable software, dashboards and decision support." },
    { icon: "trend", title: "Market & Growth Strategy", text: "Using sector insight, segmentation and commercial analysis to identify growth opportunities across education markets." },
    { icon: "bulb", title: "Education & Workforce Analytics", text: "Connecting education systems, labour-market signals and institutional data to inform programme strategy and skills alignment." },
    { icon: "people", title: "Stakeholder Implementation", text: "Bridging senior stakeholders, product teams and non-technical users to move ideas from strategy into adoption." },
  ],
} as const;

export const resume = {
  headline: "AI Solutions Consultant",
  summary: "GenAI and analytics products for education, workforce planning and institutional decision-making.",
  experience: [
    {
      period: "November 2017 - Present",
      title: "Pearson: across all roles",
      org: "Pearson Middle East",
      points: [
        "Regional revenue grew 18% a year from 2018 to 2024.",
        "Grew the anchor university account about 50% a year from 2017 to 2022, with price per course up 70% after the move to blended digital courseware.",
      ],
    },
    {
      period: "July 2021 - Present",
      title: "Regional Commercial Lead, KSA and Bahrain",
      org: "Pearson Middle East",
      points: [
        "Lead commercial and growth strategy for KSA and Bahrain; have managed an account manager since 2022.",
        "To find revenue beyond the existing product range, set up Saudi tender intelligence where Pearson had no bid desk: scraping Etimad five times a day (about 100 new tenders a day, 50,000 a year), matching Arabic tenders against Pearson's English profile, and surfacing the 2–3 a month worth acting on. Briefed senior management on a year of this evidence to inform strategy in KSA.",
        "Act as solutions consultant in university technical decisions, such as LTI integration versus batch registration for digital learning platforms.",
        "Translate institutional and workforce needs into product positioning, pricing and go-to-market decisions with senior commercial, academic and product stakeholders.",
      ],
    },
    {
      period: "October 2019 - July 2021",
      title: "Learning Consultant",
      org: "Pearson Middle East",
      points: [
        "Led market validation for Academic Progress using regional institutional data and focus groups; it became Pearson's #1 English course in Africa, the Middle East and Turkey, 2020–2022.",
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
      title: "Masters in Business Analytics",
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
      title: "Strategic Capabilities",
      items: [
        { name: "Education & Workforce Strategy", value: 90 },
        { name: "Institutional Partnerships", value: 90 },
        { name: "Market & Growth Strategy", value: 90 },
        { name: "Programme / Skills Alignment", value: 80 },
        { name: "Commercial & CRM Analytics", value: 90 },
        { name: "Stakeholder Implementation", value: 80 },
      ],
    },
    {
      title: "AI, Analytics & Product Capabilities",
      items: [
        { name: "Python / SQL Analytics", value: 80 },
        { name: "GenAI Workflow Design", value: 70 },
        { name: "Vector Search and Retrieval", value: 90 },
        { name: "Data Visualisation and Dashboards", value: 80 },
        { name: "Evaluation Design", value: 70 },
        { name: "Git / Version Control", value: 70 },
        { name: "Product Prototyping", value: 70 },
      ],
    },
  ],
};
