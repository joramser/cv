// Import the data directly to avoid circular dependency
import { data } from "./index";

// Create web-specific data with summarized experience highlights
export const webData = {
  ...data,
  experience: [
    {
      ...data.experience[0], // Ready Player Me
      highlights: [
        "Developed a monetization storefront enabling companies to sell and manage their in-game avatar assets, implementing inventory management and webhook events.",
        "Helped launch PlayerZero avatar collectible platform from concept to production, implementing social features including user profiles, avatar galleries, and a rewards system that increased user engagement and retention.",
        "Contributed to the design and launch of Ready Player Me's experimental gaming platform, working with cross-functional teams to validate new product concepts through rapid MVP development.",
        "Added new features in our public API for developers like improved documentation and new endpoints for avatar customization.",
      ],
    },
    {
      ...data.experience[1], // Veriff
      highlights: [
        "Built a myriad of features for the end-user's IDV SDK, including continuous verification flow, mobile handover, barcode extraction, proof of address verification and more, which drove improvements in E2E conversion.",
        "Collaborated with our AI/ML teams to integrate new models and build new capabilities like real-time capture feedback, document and liveness detection, and more. All with a focus on reliability and performance.",
        "Ported key end-user features to our public API, enabling clients to build custom verification flows on top of our backend.",
        "Led a full rewrite of our IDV platform from a legacy Aurelia frontend and older Node.js backend to modern React/TypeScript stack, improving development velocity and code maintainability across the entire end-user platform.",
        "Implemented quality-of-life improvements for the team like creating our i18n infrastructure, creating a reusable backend SDK and improving our analytics pipeline.",
      ],
    },
    {
      ...data.experience[2], // Jobbatical
      highlights: [
        "Built new core features for Jobbatical's platform like candidate pre-screening and more comprehensive CV data gathering to improve both recruiter and candidate experiences.",
        "Participated in site redesign initiative, collaborating with design and product teams to improve both talent acquisition and client hiring experiences through enhanced UI and UX.",
        "Implemented event-based architecture and broke down the original monolithic application into microservices, improving system reliability, deployability, and enabling independent team development workflows.",
        "Helped the company transition to Kubernetes and Docker by containerizing services and setting up CI/CD pipelines with CircleCI.",
      ],
    },
    {
      ...data.experience[3], // Evercheck Technical Lead
      highlights: [
        "Led a cross-functional team of 3 developers in designing and building EverCheck Wallet and Education products from concept to execution, managing project timelines, technical requirements, and stakeholder communication.",
        "Implemented microservices including secure storage services, OAuth-based authentication systems, and a new caregivers data processing pipeline using Node.js and AWS.",
        "Helped the company transition from .NET stack to a Node and React stack by being the first adopting team and sharing knowledge across teams.",
        "Mentored junior developers and gave internal talks on JavaScript's basics and best practices to improve team knowledge and code quality.",
      ],
    },
    {
      ...data.experience[4], // Evercheck Full-Stack
      highlights: [
        "Implemented all kinds of new features like new compliance data sources besides state licenses, employee attachments, integration with third-party HR platforms, and more.",
        "Contributed to a full redesign and rearchitecture of the main EverCheck web application using modern SASS, Knockout.js and a custom server hydration framework.",
        "Led a complete app migration from a legacy Oracle 10 database to a normalized schema in Oracle 12, improving data integrity and query performance.",
        "Expanded the coverage of our license verification tool by automating data extraction via web scraping.",
      ],
    },
    {
      ...data.experience[5], // Zeus Tecnología
      highlights: [
        "Developed new hospitality software products like a web-based POS system to be used in restaurants and bars.",
        "Helped migrate complex legacy desktop hospitality management application to a web-based platform using ASP.NET MVC, Bootstrap, jQuery and SQL Server.",
      ],
    },
  ],
};
