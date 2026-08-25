import resumePdf from "./assets/documents/Sainik_Khaddar_Resume.pdf";

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sainik's Portfolio",
  description:
    "Software Engineer with 2.5+ years building scalable backend systems, REST APIs, microservices, and cloud-native applications in C#/.NET and TypeScript.",
  og: {
    title: "Sainik Khaddar Portfolio",
    type: "website",
    url: "https://sainikkhaddar.space/",
    image: "https://sainikkhaddar.space/social-preview.png",
  },
};

//Home Page
const greeting = {
  title: "Sainik Khaddar",
  logo_name: "sainik",
  //nickname: "layman_brother",
  subTitle:
    "Software Engineer building scalable backend systems and cloud-native applications in C#/.NET, ASP.NET Core, TypeScript, React, and React Native.",
  resumeLink:
    "https://drive.google.com/file/d/1XjCcD8iBRi4kBl2B3JAc_un4Fya8ziv0/view",
  resumeDownloadLink: resumePdf,
  portfolio_repository: "https://github.com/sainikcodes24x7/masterPortfolio",
  githubProfile: "https://github.com/sainikcodes24x7",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sainikcodes24x7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sainik-khaddar-2295a31b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sainikwarror132@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sainikkhaddar_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cloud-Native Backend Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing and implementing end-to-end CI/CD pipelines with Azure DevOps YAML for zero-downtime deployments, hands-on experience on multi cloud platform (Azure/AWS),",
        "⚡ Containerizing applications with Docker and deploying scalable workloads on Azure Kubernetes Service (AKS)",
        "⚡ Automating infrastructure provisioning and management using Terraform, Ansible and Infrastructure as Code (IaC)",
        "⚡ Designing ETL pipelines  to sync configuration/reference data across environments while preserving schema integrity & audit trails",
        "⚡ Monitoring, logging, and securing deployments with Azure Monitor, App Insights, and Helm-based rollouts",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos-microsoft-azure",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos-terraform",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "vscode-icons:file-type-azurepipelines",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing scalable and secure REST APIs using C# .NET and Node.js",
        "⚡ Building cloud-native integrations with SAP, Salesforce, and Azure SQL",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Designing microservices architectures and containerized APIs using Docker & Kubernetes",
        "⚡ Managing databases, queries, and performance tuning for backend services",
      ],
      softwareSkills: [
        {
          skillName: "C# .NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },

        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },

    {
      title: "Scalable System Architecture & Design",
      fileName: "SystemArchitectureImg",
      skills: [
        "⚡ Designing high-level architectures for large-scale, fault-tolerant, and distributed systems",
        "⚡ Applying low-level design principles to ensure clean APIs, modular components, and efficient workflows",
        "⚡ Building microservices-based systems with API gateways, service discovery, and inter-service communication",
        "⚡ Implementing caching strategies, load balancing, and database sharding/replication to improve performance and designing event-driven, asynchronous architectures for reliability and scalability (Kafka, RabbitMQ)",

        "⚡ Optimizing data storage layers with relational and NoSQL databases for real-time and analytical workloads",
      ],
      softwareSkills: [
        {
          skillName: "Microservices",
          fontAwesomeClassname: "simple-icons:microgenetics",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "API Gateway",
          fontAwesomeClassname: "simple-icons:apachesuperset",
          style: {
            color: "#20A4F3",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "Redis (Caching)",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "NGINX (Load Balancer)",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/sainikkhaddar_/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Sainik",
    },

    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://leetcode.com/WarriorKnight/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jadavpur University",
      subtitle: "B.E. in Electrical Engineering",
      logo_path: "julogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied electrical engineering subjects like Digital Signal Processing, Signal Systems, Electrical Machines, Power System etc.",
        "⚡ Apart from this, I have done courses on DBMS, OS, Machine Learning and OOPs. I was into full-stack development and cloud architectures",
        "⚡ Apart from academics, I actively participated in club activities and fests. I was the Class Representative, also Technical Lead of IEEE-Students Branch Kolkata Chapter",
        "⚡ Won IEEE Kolkata Section BEST VOLUNTEER AWARD in 2024 for organizing 20+ events with 500+ footfall each within a span of 2 yrs",
      ],
      website_link: "https://jadavpuruniversity.in/",
    },
    {
      title: "South Point High School",
      subtitle: "Science with Computer Science",
      logo_path: "sphs (2).jpeg",
      alt_name: "Indiana University Bloomington",
      duration: "2020 passout",
      descriptions: [
        "⚡ Got 95% in class 12 boards and 97% in class 10 boards CBSE",
        "⚡ Apart from this, I have also participated in various extra-curricular activities like cricket, chess and basketball tournaments",
        "⚡ Was awarded Certificate of Merit for always maintaining Top-10 rank in Science stream every year",
      ],
      website_link: "https://southpoint.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Software Engineer with 2.5+ years of experience building scalable backend systems, microservices, REST APIs, event-driven services, and cloud-native applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Lead Software Engineer (Associate)",
          company: "PricewaterhouseCoopers (PwC India)",
          company_url: "https://www.pwc.in/",
          logo_path: "pwclogo.jpg",
          duration: "May 2024 - Present",
          location: "Kolkata, India",
          description: [
            {
              area: "B2B E-Commerce Client · Microservices Backend",
              summary:
                "Engineered a 13-service ASP.NET Core platform with 110+ EF Core entities, repository patterns, AutoMapper, API version gating, and centralized exception logging.",
              impact: [
                "30% faster feature delivery",
                "40% lower MTTR",
                "3,500+ retailers · ₹8–10 Cr monthly GMV",
              ],
            },
            {
              area: "B2B E-Commerce Client · Distributor Operations",
              summary:
                "Architected a React 18/TypeScript dispatch console using MUI DataGrid, TanStack Query, Redux Toolkit, and drag-and-drop planning across 15 warehouses and ~8,000 daily orders.",
              impact: [
                "3–4 hours → under 5 minutes",
                "65% fewer pick-pack errors",
                "35% higher throughput",
              ],
            },
            {
              area: "B2B E-Commerce Client · Referral & Loyalty",
              summary:
                "Built a secure referral system across ASP.NET Identity and a .NET 8 Azure Function, with cryptographic codes, idempotent batch processing, OAuth 2.0, and Dynamics 365 synchronization.",
              impact: [
                "22% more net-new signups",
                "₹1.4 Cr+ incremental GMV",
                "18% lower CAC · 99.6% sync rate",
              ],
            },
            {
              area: "B2B E-Commerce Client · GST Dispatch Platform",
              summary:
                "Unified four dispatch workflows into an idempotent, trip-scoped SO→TO and GST E-Way Bill platform with one-click E-Way Bill and Delivery Challan exports.",
              impact: [
                "₹4 Cr+/month movement enabled",
                "40 hours/week saved",
                "₹12 lakh/month inventory recovered",
              ],
            },
            {
              area: "B2B E-Commerce Client · Search Performance",
              summary:
                "Re-architected Azure Cognitive Search and Redis caching with versioned multi-tenant keys, barcode lookup, cache-poisoning protection, and real-time inventory enrichment.",
              impact: [
                "63% lower p95 latency",
                "58% → 84% cache hit rate",
                "9% higher conversion · ₹60–75 L/month",
              ],
            },
            {
              area: "B2B E-Commerce Client · Mobile & Delivery",
              summary:
                "Built a React Native/TypeScript data layer with Redux Toolkit, 112+ TanStack Query hooks, resilient JWT refresh, Branch.io deep links, and Docker-to-Azure CI/CD for mobile and backend releases.",
              impact: [
                "50+ managed query keys",
                "Android 16KB compliance",
                "Play Store & App Store delivery",
              ],
            },
            {
              area: "D2C E-Commerce Client · Distributed Platform",
              summary:
                "Architected 12+ .NET 6/8 services behind Ocelot API Gateway with JWT/RBAC, plus bulk CSV pipelines using EFCore.BulkExtensions and Azure Blob Storage.",
              impact: [
                "99.9% uptime · 3× peak traffic",
                "50K+ rows in under 90 seconds",
                "120 → 300+ distributors",
              ],
            },
            {
              area: "D2C E-Commerce Client · Payments & Subscriptions",
              summary:
                "Integrated PayU with SHA512 callbacks and an idempotent payment state machine, then delivered recurring subscriptions and geolocation-based serviceability.",
              impact: [
                "91% → 97.5% payment success",
                "₹1.8 Cr+ recurring monthly GMV",
                "75% fewer undeliverable orders",
              ],
            },
            {
              area: "D2C E-Commerce Client · Data & Notifications",
              summary:
                "Optimized SQL Server/EF Core across 97 repositories and built an FCM + WATI notification hub handling ~400K customer messages each month.",
              impact: [
                "63% faster APIs · 35% lower DB CPU",
                "₹1.5 L/month infrastructure saved",
                "₹25 L/month cart value recovered",
              ],
            },
            {
              area: "Pharmaceutical Client · Event-Driven Middleware",
              summary:
                "Architected event-driven contract-lifecycle middleware using .NET 8 Azure Functions, HTTP/Timer/Service Bus triggers, decoupled queues, at-least-once delivery, and exponential retries across SAP Ariba, Icertis, and SAP ECC.",
              impact: [
                "7 days → under 2 hours",
                "40 hours/week eliminated",
                "₹4,500 Cr procurement supported",
              ],
            },
            {
              area: "Pharmaceutical Client · Enterprise Integrations",
              summary:
                "Built resilient HttpClientFactory/Polly clients and an exactly-once Dapper synchronization layer across SAP, Azure SQL, and Salesforce using idempotent upserts and SQL locking.",
              impact: [
                "92% fewer duplicate postings",
                "500K+ records/day · 99.9% accuracy",
                "$120M+ annual revenue supported",
              ],
            },
            {
              area: "Pharmaceutical Client · Cloud Observability",
              summary:
                "Owned Azure DevOps YAML delivery, ARM-provisioned infrastructure, App Insights tracing, local Azure emulation, processing state machines, and centralized audit logging.",
              impact: [
                "60% lower detection time",
                "30% YoY volume growth",
                "Zero added operational overhead",
              ],
            },
          ],

          color: "#000000",
        },
        {
          title: "Lead Software Developer",
          company: "Pegman (Startup)",
          company_url: "https://legatohealthtech.com/",
          logo_path: "pegnamindiapvtltd_logo.jpeg",
          duration: "Aug 2023 - July 2024",
          location: "Remote",
          description:
            "I worked as a System Design Engineer and Backend Developer, where I was responsible for building the backend architecture of a liquor delivery platform from scratch. I designed the system with scalability in mind — breaking services into independent modules, setting up APIs, and ensuring smooth communication between them. On the backend side, I built REST APIs in .NET, integrated with third-party services like payment gateways and delivery tracking, and optimized database queries to reduce latency during peak load. \n I also led resolution of a critical production outage in a Kubernetes-based microservices environment, where a new feature increased database calls 5x, causing a 2-hour downtime for the payment API. Diagnosed root cause via Kubernetes pod logs and metrics, rolled back the feature using Helm rollback, and scaled up database workloads and read replicas via Terraform-managed infrastructure. Conducted a post-mortem and implemented Ansible playbooks for automated rollback, advanced database monitoring with Prometheus/Grafana, API latency alerts, and realistic traffic load testing in staging, reducing future incident detection time from 30 minutes to under 2 minutes",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "DevOps Engineer Intern",
          company: "Bespoke Labs-AI",
          company_url: "https://www.bespokelabs.ai/",
          logo_path: "bespoke-labs.png",
          duration: "Apr 2023 - May 2023",
          location: "California, USA · Remote",
          description: [
            {
              area: "Production-Grade Local DevOps Environment",
              summary:
                "Deployed a FastAPI and PostgreSQL microservice stack with Prometheus/Grafana observability via Helm on Kubernetes, then engineered a Docker-in-Docker k3d image that bootstraps the cluster, installs charts, and exposes every endpoint.",
              impact: [
                "Single-image environment bootstrap",
                "Reproducible Kubernetes stack",
                "End-to-end observability",
              ],
            },
          ],
          color: "#ff5a2f",
        },
        {
          title: "Junior Software Engineer",
          company: "Ezage.ai",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "ezage.jpeg",
          duration: "Jan 2023 - June 2023",
          location: "Remote",
          description:
            "Worked on React-JS to build the frontend of the application and improved user experience. Also worked on REST APIs in nodejs and some hands-on in SQL",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company:
            "University of California, Berkeley, Haas School of Business",
          company_url: "https://haas.berkeley.edu/",
          logo_path: "ucbark.png",
          duration: "May 2022 - June 2022",
          location: "Remote",
          description:
            "Performed data analysis reports using over 10M+ data regarding population census and implemented Machine learning algorithms to make prediction of future population of some districts which improved the research metrics by 30%. Prepared Research analyst reports using knowledge of statistics that increased contributions by 12%",
          color: "#ee3c26",
        },
        {
          title: "Software Developer Intern",
          company: "Expertrons",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Aug 2021 - Dec 2021",
          location: "Work From Home",
          description:
            "Built RESTful APIs with a team of 4 developers that served data to the frontend based on dynamically chosen user inputs that handled over 500,000 concurrent users",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technical Lead + IAS Chairperson",
          company: "IEEE Jadavpur University SB",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "Feb 2022 - Feb 2024",
          location: "Kolkata",
          description:
            "Managing the whole tech team, assigning works regarding website building, scaling of microservices to increase participations and taking care of load balancing. Worked with tech team to re‑architect a multi‑page web app into a single page web‑app, boosting event participations by 500+ ",
          color: "#4285F4",
        },
        {
          title: "Secretary",
          company: "IEEE Women in Engineering",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Feb 2022 - Feb 2023",
          location: "Kolkata",
          description:
            "Organized three events with 100+ participants each and took initiative to organize fundings and sponsorships",
          color: "#D83B01",
        },

        {
          title: "Developer Program Member + Hacktober Fests",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Linux, Fossasia, Netrack, Keras etc. These contributions include small bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Backend, full-stack, and applied AI projects built around scalable architecture, dependable APIs, practical product workflows, and production-minded delivery.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Roadmaps",
  description:
    "I am going to provide you customized roadmaps to upskill yourself. These roadmaps start from begineer level and go on till the most advanced topics",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "System Design & LLD Roadmap",
      createdAt: "Go-Live in September",
      description:
        "An extensive 5 months roadmap covering from basics to advanced with proper hands-on",
      url: "/",
    },
    {
      id: "mdp-diffusion",
      name: "Backend Developer Roadmap",
      createdAt: "Coming Soon",
      description:
        "An extensive 3 months roadmap covering from basics to advanced with projects",
      url: "/",
    },
    {
      id: "consistency-models",
      name: "Data Structure and Algorithms Roadmap",
      createdAt: "Coming Soon",
      description:
        "Customized DSA sheet and algorithms to aid you in job switching",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sainikProfile.JPG",
    description:
      "I am available across the links below and usually reply within 24 hours. I can help with backend engineering, C#/.NET systems, APIs, microservices, integrations, and cloud-native applications.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I will document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kolkata, West-Bengal, India",
    locality: "Kolkata",
    country: "India",
    region: "West Bengal",
    // postalCode: "700037",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
