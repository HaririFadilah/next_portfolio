import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Muhamad",
  lastName: "Hariri Fadilah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Network Engineer & Web Developer",
  avatar: "/images/me2.jpg",
  email: "haririfadilah36@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.lastName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Github",
    icon: "github",
    link: "https://github.com/HaririFadilah ",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhamad-hariri-fadilah-086369278/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "My Portfolio",
  // title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">MBG Sytem</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Hariri, a Network Engginer & Web Developer at Entusiast, where I craft
      intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hariri is a Depok-based IT engineer with a passion for designing
        scalable infrastructure, securing digital environments, and building
        user-focused web applications. With a multidisciplinary background in
        network engineering, system administration, cloud computing, and
        full-stack web development, he brings a holistic approach to solving
        technical challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Myarsyila Indonesia Interkoneksi",
        timeframe: "July 2023 - Present",
        roles: [
          {
            title: "Network Operation Manager",
            achievements: [
              <>
                Makes sure the DNS servers function properly for all domain name
                requests.
              </>,
              <>
                Defines and implements routing policies for traffic flow,
                ensuring efficient and secure routing across networks.
              </>,
              <>
                Handles the exchange of routing information between networks
                using BGP for inter-domain routing.
              </>,
              <>
                Implements security policies to protect data and the network
                from external and internal threats.
              </>,
              <>
                Performs routine maintenance and software updates to ensure
                performance and security.
              </>,
            ],
          },
          {
            title: "Network Operation Center",
            achievements: [
              <>
                Adding or configuring Optical Network Terminals (ONT) on Optical
                Line Terminal (OLT) devices.
              </>,
              <>
                Continuously monitoring the network to detect issues or
                disruptions in real-time.
              </>,
              <>
                Diagnosing and resolving issues faced by end users, such as
                internet connectivity or service disruptions.
              </>,
              <>
                Opening, tracking, and closing tickets for issues reported by
                users or systems.
              </>,
              <>
                Adjusting bandwidth allocations and ensuring optimal service
                quality for users.
              </>,
              <>
                Creating reports on network status, incident resolutions, and
                documenting configurations and procedures.
              </>,
              <>
                Reconfiguring network devices and ensuring regular maintenance
                is carried .
              </>,
            ],
          },
        ],
        images: [
          {
            src: "/images/teknikal/network2.jpg",
            alt: "Work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/teknikal/network3.jpg",
            alt: "Work",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pamulang",
        description: <>Informatic Engginering.</>,
      },
      {
        name: "SMK Bina Rahayu",
        description: <>Compute & Network Engginering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Networking",
        description: (
          <>
            Proficient in configuring and managing enterprise-level network
            infrastructures using multiple routing platforms such as{" "}
            <strong> MikroTik, Juniper, Cisco, Huawei, and Etc</strong>.
            Experienced in implementing dynamic routing protocols (e.g., BGP,
            OSPF), VLAN segmentation, firewall policies, and QoS across
            heterogeneous network environments. Adept at troubleshooting complex
            network issues and optimizing routing performance for high
            availability and security.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/teknikal/router.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/teknikal/juniper.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "System Admnistration",
        description: (
          <>
            Experienced in deploying, configuring, and maintaining core server
            infrastructure including DNS servers (BIND, PowerDNS), Mail servers
            (Postfix, Dovecot, Roundcube), and Web servers (Apache, Nginx).
            Skilled in Linux-based system administration (Ubuntu, CentOS,
            Debian) for production environments. Able to automate routine tasks
            with shell scripting and manage user access, backups, and system
            security.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/teknikal/linux.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/teknikal/proxmox.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud Infrastructure & DevOps",
        description: (
          <>
            Skilled in designing, deploying, and managing scalable cloud
            infrastructure on AWS, GCP, and Alibaba Cloud. Proficient with
            cloud-native tools such as EC2, S3, Cloud DNS, and IAM. Experienced
            in infrastructure as code (IaC) using Terraform and automated
            deployments with CI/CD tools like GitHub Actions and GitLab CI.
            Comfortable working with containerized applications using Docker and
            orchestrating with Docker Compose or Kubernetes in staging
            environments.
          </>
        ),
        images: [
          {
            src: "/images/teknikal/cloud1.jpg",
            alt: "Cloud Network Diagram",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Developper",
        description: (
          <>
            Experienced in building responsive, performant, and scalable web
            applications using modern frontend frameworks such as{" "}
            <strong>React</strong>, <strong>Next.js</strong>, and combined with
            backend technologies like <strong>Laravel</strong>, and{" "}
            <strong>RESTful APIs</strong>. Proficient in HTML5, CSS3, Tailwind
            CSS, JavaScript/TypeScript, and integrating frontend with backend
            using JSON and third-party APIs. Familiar with authentication
            systems, database management (MySQL, PostgreSQL), and deployment to
            platforms such as Vercel, Netlify, or VPS.
          </>
        ),
        images: [
          {
            src: "/images/teknikal/web1.jpeg",
            alt: "Full-stack app architecture",
            width: 16,
            height: 9,
          },
          {
            src: "/images/teknikal/web2.PNG",
            alt: "MBG",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, blog, gallery };
