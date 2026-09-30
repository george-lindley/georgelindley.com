// Everything about George that isn't a blog post or a project.
// Pages read from here, so editing the site's copy never means touching markup.

export const profile = {
  name: "George Lindley",
  role: "AI Solutions Consultant",
  location: "Riyadh, KSA",
  email: "george.j.lindley@gmail.com",
  cv: "/files/george_lindley_cv_forward_deployed_ai_2026.pdf",
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
      text: "a governed compliance analytics platform for fragmented regulatory data. I handle the centralisation, cleaning, analysis and visualisation of the regulatory data.",
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
      period: "July 2021 - Present",
      title: "Regional Commercial Lead",
      org: "Pearson Middle East",
      points: [
        "Led regional commercial and growth strategy across five Middle East markets, contributing to 18% year-on-year revenue growth while strengthening segmentation, institutional demand forecasting, CRM analytics and competitive landscape assessment.",
        "Directed cross-line-of-business initiatives at Regional Headquarters, aligning product, assessment and partnership strategy to evolving education system priorities and workforce demands.",
        "Designed and implemented multi-market expansion and market entry strategies, establishing long-term institutional partnerships across universities and vocational providers.",
        "Integrated CRM and market data analysis into regional planning processes, strengthening forecasting accuracy and strategic resource allocation.",
        "Partnered with product, academic and senior leadership teams to translate sector insight into pricing strategy, positioning and scalable go-to-market frameworks.",
      ],
    },
    {
      period: "October 2019 - July 2021",
      title: "Learning Consultant",
      org: "Pearson Middle East",
      points: [
        "Advised regional universities on English language program development and learning outcomes optimization, aligning institutional needs with Pearson solutions",
        "Led implementation of digital learning platforms across major assessment projects, managing stakeholder relationships and change management processes",
        "Conducted regional market analysis and education trend research to inform product strategy and sales approach",
      ],
    },
    {
      period: "November 2017 - September 2019",
      title: "Sales Manager",
      org: "Pearson Saudi Arabia",
      points: [
        "Managed regional sales operations including revenue forecasting, territory planning, and account strategy development",
        "Conducted market analysis and competitive intelligence to inform product selection and sales representative training programs",
        "Led development of regional product line that became multi-million revenue generator and market leader in the region",
      ],
    },
    {
      period: "April 2016 - October 2017",
      title: "Language Teacher",
      org: "King Saud University",
      points: [
        "Delivered academic English instruction to preparatory year students, designing curriculum and assessment strategies",
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
        { name: "Vector Search / RAG", value: 90 },
        { name: "Data Visualisation and Dashboards", value: 80 },
        { name: "Evaluation Design", value: 70 },
        { name: "Git / Version Control", value: 70 },
        { name: "Product Prototyping", value: 70 },
      ],
    },
  ],
};
