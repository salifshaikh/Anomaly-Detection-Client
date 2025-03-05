import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'Features',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Services',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Future of Digital Innovation',
    location: '',
    description: `Continuing to push technological boundaries by incorporating cutting-edge frameworks, AI enhancements, and seamless digital experiences.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2025 - Beyond',
  },
  {
    title: 'Expanding Front-End Innovations',
    location: 'Online',
    description: `Developed high-quality front-end solutions, enhancing UI/UX for clients in multiple industries. Introduced scalable, interactive, and responsive design principles.`,
    icon: React.createElement(BookIcon),
    date: 'Sep 2022',
  },
  {
    title: 'Foundation & Vision',
    location: 'Mumbai',
    description: `Anomaly was founded with the vision to revolutionize web experiences through cutting-edge technology and creative problem-solving.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jul 2021',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'AnomalyDetect AI',
    description:
      'A powerful AI-driven anomaly detection system for real-time monitoring and predictive analytics, ensuring system reliability and security.',
    tags: [
      'React',
      'Next.js',
      'TensorFlow',
      'Python',
      'FastAPI',
      'Tailwind',
      'Framer Motion',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/yourcompany/anomaly-detect-ai',
  },
  {
    title: 'SmartCity Connect',
    description: `An innovative platform designed for smart city management, featuring real-time updates on city events, issue reporting, and interactive maps.`,
    tags: [
      'React',
      'Next.js',
      'Leaflet.js',
      'Express.js',
      'MongoDB',
      'Tailwind',
      'REST API',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/yourcompany/smartcity-connect',
  },
  {
    title: 'Alumni Nexus',
    description: `A full-fledged alumni networking platform that enables professional connections, job postings, mentorship programs, and event management.`,
    tags: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Cloudinary',
      'Tailwind',
    ],
    imageUrl: auditMasterImg,
    link: 'https://yourcompany.com/alumni-nexus',
  },
  {
    title: 'VisionGuard Surveillance',
    description:
      'An AI-powered real-time surveillance system that detects unusual activities and sends instant alerts for security monitoring.',
    tags: [
      'React',
      'Next.js',
      'OpenCV',
      'YOLOv8',
      'FastAPI',
      'WebSockets',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/yourcompany/visionguard-surveillance',
  },
  {
    title: 'CivicVoice Feedback Hub',
    description:
      'A citizen engagement platform allowing residents to submit feedback, report issues, and track government responses efficiently.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'GraphQL'],
    imageUrl: campwithusImg,
    link: 'https://github.com/yourcompany/civicvoice',
  },
] as const;

export const skillsData = [
  ['Machine Learning', '/svgs/javascript-js.svg'],
  ['Deep Learning', '/svgs/typescript-icon.svg'],
  ['Anomaly Detection', '/svgs/react.svg'],
  ['Edge Computing', '/svgs/nextjs.svg'],
  ['IoT Sensors', '/svgs/node-js.svg'],
  ['Time-Series Analysis', '/svgs/express-original.svg'],
  ['Predictive Maintenance', '/svgs/tailwind-css.svg'],
  ['Python', '/svgs/framer.svg'],
  ['TensorFlow', '/svgs/shadcnui.svg'],
  ['PyTorch', '/svgs/brand-headlessui.svg'],
  ['OpenCV', '/svgs/redux-original.svg'],
  ['Scikit-Learn', '/svgs/file-type-light-prisma.svg'],
  ['NumPy', '/svgs/mongodb-original.svg'],
  ['Pandas', '/svgs/postgresql.svg'],
  ['MATLAB', '/svgs/MySQL.svg'],
  ['Kafka', '/svgs/react-query-seeklogo.svg'],
  ['Grafana', '/svgs/db-table-svgrepo-com.svg'],
  ['Prometheus', '/svgs/cloudinary.svg'],
  ['InfluxDB', '/svgs/Docker.svg'],
  ['AWS IoT', '/svgs/clerk.svg'],
  ['Azure IoT', '/svgs/axios.svg'],
  ['Google Cloud AI', '/svgs/file-type-html.svg'],
  ['Docker', '/svgs/file-type-css.svg'],
  ['Kubernetes', '/svgs/Sass.svg'],
  ['MLOps', '/svgs/git.svg'],
  ['ETL Pipelines', '/svgs/github.svg'],
  ['Django', '/svgs/etc.svg'],
] as const;
