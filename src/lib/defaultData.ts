
import { CVData } from './types';
import { v4 as uuidv4 } from 'uuid';

export const defaultCVData: CVData = {
  basicInfo: {
    name: 'Jane Smith',
    role: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'jane.smith@example.com',
    website: 'www.janesmith.dev',
    phone: '+1 (555) 123-4567',
    github: 'github.com/janesmith',
    linkedin: 'linkedin.com/in/janesmith',
    photo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojQjhCQUMwOyIgY3g9IjI0MCIgY3k9IjI0MCIgcj0iMjQwIi8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjQwLDM2MC4wN2MtMjcuOTQ0LDAtNTMuMjk3LTExLjk5MS03Mi4wMDMtMzEuMzcyYy0wLjAxNCwxMS42MTUtMC40MzYsMjguMzc5LTMuNTE2LDQwLjYxMQ0KCQkJCWMyLjAyLDEuMjM1LDMuNTg4LDMuMjYyLDMuODk0LDUuNzg0YzMuOTkyLDMyLjQ4NCwzNC43ODEsNTYuOTc3LDcxLjYyNSw1Ni45NzdjMzYuODM2LDAsNjcuNjI1LTI0LjQ5Niw3MS42MjUtNTYuOTc3DQoJCQkJYzAuMzEtMi41MjUsMS44NDQtNC41NDksMy44OTUtNS43OGMtMy4wOC0xMi4yMzMtMy41MDMtMjguOTk5LTMuNTE3LTQwLjYxNUMyOTMuMjk3LDM0OC4wNzksMjY3Ljk0NCwzNjAuMDcsMjQwLDM2MC4wN3oiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRDdEQkUwOyIgZD0iTTMxMC40NCwzMzAuMTc0Yy0xOC41NDksMTguNDc3LTQzLjI0MiwyOS44OTYtNzAuNDQsMjkuODk2DQoJCQkJYy0yNy45NDQsMC01My4yOTctMTEuOTkxLTcyLjAwMy0zMS4zNzJjLTAuMDE0LDExLjYxNS0wLjQzNiwyOC4zNzktMy41MTYsNDAuNjExYzIuMDIsMS4yMzUsMy41ODgsMy4yNjIsMy44OTQsNS43ODQNCgkJCQljMS43NjUsMTQuMzU5LDguNzc4LDI3LjE0NCwxOS4yMjMsMzYuOTU0QzIzNS43NjYsNDA1LjI2NSwyOTAuNDM3LDM1Ny43MDIsMzEwLjQ0LDMzMC4xNzR6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zMTIsMTYwLjA3SDE3NmMtMjIuMDU1LDAtNDAsMTcuOTQ1LTQwLDQwdjQ4YzAsNjEuNzU4LDQ2LjY1NiwxMTIsMTA0LDExMnMxMDQtNTAuMjQyLDEwNC0xMTINCgkJCQl2LTU2QzM0NCwxNzQuNDI2LDMyOS42NDgsMTYwLjA3LDMxMiwxNjAuMDd6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzVDNTQ2QTsiIGQ9Ik0yOTYsNzIuMDdIMTkyYy0xNS4wNDcsMC0yNy42OTUsMTAuNDM4LTMxLjEwMiwyNC40NDlDMTMzLjM1OSwxMDAuMDIsMTEyLDEyMy41OTgsMTEyLDE1Mi4wN3Y0MA0KCQkJCWMwLDIwLjYxNyw4Ljc1MiwzOS44NTEsMjQsNTMuNTJ2LTQ1LjUyYzAtMjIuMDU1LDE3Ljk0NS00MCw0MC00MGgxMzZjMTcuNjQ4LDAsMzIsMTQuMzU1LDMyLDMydjUzLjUxMQ0KCQkJCWMxNS4yNTEtMTMuNjY3LDI0LTMyLjg5OSwyNC01My41MTF2LTQ4QzM2OCwxMDQuMzcxLDMzNS43MDMsNzIuMDcsMjk2LDcyLjA3eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNUM1NDZBOyIgZD0iTTYxLjYzMiw0MDAuNTQ0QzEwNS41NjIsNDQ5LjMxOSwxNjkuMTkxLDQ4MCwyNDAsNDgwczEzNC40MzgtMzAuNjgxLDE3OC4zNjgtNzkuNDU2DQoJCQljLTcuNjYtMTAuMzU2LTE4LjQ2Mi0xOC43Ny0zMi4zNTItMjIuNjU5Yy0wLjMyLTAuMDktMC42NDEtMC4xNi0wLjk2OS0wLjIwN2wtNjMuODU5LTkuNTgyYy0wLjM5MS0wLjA1OS0xLjIyNy0wLjA5LTEuNjI1LTAuMDkNCgkJCWMtNC4wMzksMC03LjQ0NSwzLjAxMi03LjkzOCw3LjAyM2MtNCwzMi40OC0zNC43ODksNTYuOTc3LTcxLjYyNSw1Ni45NzdjLTM2Ljg0NCwwLTY3LjYzMy0yNC40OTItNzEuNjI1LTU2Ljk3Nw0KCQkJYy0wLjUtNC4xMjktNC4yMTktNy4yMzQtOC4xNDEtNy4wMmMtMC40NjktMC4wMjctMC45MywwLjAxMi0xLjQyMiwwLjA4NmwtNjMuODU5LDkuNTgyYy0wLjMyOCwwLjA0Ny0wLjY0OCwwLjExNy0wLjk2OSwwLjIwNw0KCQkJQzgwLjA5NCwzODEuNzc1LDY5LjI5MiwzOTAuMTg4LDYxLjYzMiw0MDAuNTQ0eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg=='
  },
  summary: {
    content: 'Innovative Frontend Developer with 8+ years of experience crafting engaging user interfaces and seamless digital experiences. Passionate about clean code, performance optimization, and accessibility. Skilled in React, TypeScript, and modern frontend frameworks.'
  },
  experiences: [
    {
      id: uuidv4(),
      role: 'Senior Frontend Developer',
      company: 'TechVision Inc.',
      startDate: '2020-03-01',
      endDate: '2023-06-01',
      current: false,
      achievements: [
        'Led a team of 5 developers to rebuild the company\'s flagship product using React and TypeScript, resulting in a 40% improvement in performance.',
        'Implemented responsive design principles, ensuring optimal user experience across all devices and increasing mobile conversion rates by 25%.',
        'Architected and built a component library used across multiple products, reducing development time for new features by 30%.'
      ]
    },
    {
      id: uuidv4(),
      role: 'Frontend Developer',
      company: 'WebSolutions Co.',
      startDate: '2017-07-01',
      endDate: '2020-02-01',
      current: false,
      achievements: [
        'Developed interactive data visualization dashboards using D3.js, providing clients with real-time analytics.',
        'Optimized website loading times by 60% through code splitting, lazy loading, and asset optimization.',
        'Collaborated with UX designers to implement user-centric designs, improving user satisfaction ratings by 35%.'
      ]
    }
  ],
  education: [
    {
      id: uuidv4(),
      degree: 'Master of Computer Science',
      institute: 'University of Technology',
      location: 'San Francisco, CA',
      startDate: '2015-09-01',
      endDate: '2017-05-01',
      current: false
    },
    {
      id: uuidv4(),
      degree: 'Bachelor of Science in Web Development',
      institute: 'Digital Arts College',
      location: 'Portland, OR',
      startDate: '2011-09-01',
      endDate: '2015-05-01',
      current: false
    }
  ],
  skills: [
    {
      id: uuidv4(),
      title: 'Frontend Development',
      details: 'React, Vue.js, Angular, TypeScript, JavaScript ES6+, HTML5, CSS3, SASS/SCSS, Tailwind CSS'
    },
    {
      id: uuidv4(),
      title: 'UI/UX Design',
      details: 'Figma, Adobe XD, Responsive Design, Wireframing, Prototyping, User Research'
    },
    {
      id: uuidv4(),
      title: 'Performance Optimization',
      details: 'Code Splitting, Lazy Loading, Bundle Analysis, Core Web Vitals, Lighthouse Auditing'
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: 'E-commerce Platform Redesign',
      company: 'RetailGiant',
      details: [
        'Led complete frontend redesign of a major e-commerce platform serving 2M+ monthly users',
        'Implemented a micro-frontend architecture to enable independent team deployments',
        'Reduced cart abandonment by 18% through streamlined checkout process'
      ]
    },
    {
      id: uuidv4(),
      name: 'Healthcare Dashboard',
      company: 'MediTech Solutions',
      details: [
        'Developed an interactive dashboard for healthcare professionals to monitor patient data',
        'Implemented real-time data visualization with WebSockets and D3.js',
        'Ensured HIPAA compliance through secure data handling practices'
      ]
    }
  ],
  activeTheme: 'nordic',
  sectionConfig: {
    visibility: {
      basicInfo: true,
      summary: true,
      experiences: true,
      education: true,
      skills: true,
      projects: true
    },
    titles: {
      summary: 'Summary',
      experiences: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects'
    },
    order: ['summary', 'experiences', 'education', 'skills', 'projects']
  }
};
