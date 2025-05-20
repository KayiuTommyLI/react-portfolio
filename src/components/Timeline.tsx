import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// Import logos
import uofclogo from '../assets/images/uofc-logo.png';
import cltechnicalservicelogo from '../assets/images/cltechnicalservice-logo.png';
import octopuslogo from '../assets/images/octopus-logo.png';
import polyulogo from '../assets/images/polyu-logo.png';
import asmptlogo from '../assets/images/asmpt-logo.png';
import hkustlogo from '../assets/images/hkust-logo.svg';
import solomonsystechlogo from '../assets/images/solomonsystech-logo.jpg';

import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

// Types and constants
type TimelineType = 'work' | 'education';

interface TimelineItem {
  type: TimelineType;
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  logo: string;
  brandColor: string;
}

// Configuration
const iconConfig = {
  work: { 
    icon: faBriefcase, 
    style: { background: '#5000ca', color: 'white' } 
  },
  education: { 
    icon: faGraduationCap, 
    style: { background: '#007bff', color: 'white' } 
  }
};

// Timeline Card Component
const TimelineCard = ({ item }: { item: TimelineItem }) => {
  const { type, date, title, subtitle, location, description, logo, brandColor } = item;
  
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={date}
      iconStyle={iconConfig[type].style}
      icon={<FontAwesomeIcon icon={iconConfig[type].icon} />}
      contentStyle={{ padding: '0px', position: 'relative' }} // contentStyle on VerticalTimelineElement
      contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
    >
      {/* Header */}
      <div 
        className="timeline-card-header" 
        style={{ backgroundColor: brandColor }}
      >
        <h4 className="timeline-header-company-name">{subtitle}</h4>
        {/* Logo MOVED INSIDE HEADER */}
        {logo && (
          <div className="logo-image-container">
            <img src={logo} alt={`${subtitle} logo`} className="timeline-logo" />
          </div>
        )}
      </div>
      
      {/* Logo div REMOVED from here as it's now inside the header */}
      
      {/* Content */}
      <div className="timeline-card-body">
        <h3 className="timeline-body-title">{title}</h3>
        
        {location && (
          <div className="timeline-body-location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <span>{location}</span>
          </div>
        )}
        
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </VerticalTimelineElement>
  );
};

// Main Timeline Component
const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

// Timeline Data - Now at the end for better organization
const timelineData: TimelineItem[] = [
  {
    type: 'education',
    date: 'Sep 2023 - Feb 2025',
    title: 'Master of Engineering in Geomatics Engineering',
    subtitle: 'University of Calgary',
    location: 'Calgary, AB',
    description: 'Achieved a GPA of <strong><span class="timeline-metric">3.9/4.0</span></strong>. Focused on Machine Learning, Data Mining, GIS, and Python (PyTorch, NumPy, Pandas, Scikit-learn).',
    logo: uofclogo,
    brandColor: '#D80032'
  },
  {
    type: 'work',
    date: 'Sep 2022 - Aug 2023',
    title: 'Contract System Analyst',
    subtitle: 'CL Technical Service Limited',
    location: 'Hong Kong',
    description: 'Served as an outsourced System Analyst for HKSAR Housing Authority, collaborating within an <strong><span class="timeline-metric">8-person team</span></strong> to monitor <strong><span class="timeline-metric">6 distinct systems</span></strong>. Led system enhancement projects, developed specification documents, and ensured ISO 9001 compliance.',
    logo: cltechnicalservicelogo,
    brandColor: '#E30613'
  },
  {
    type: 'work',
    date: 'Apr 2020 - Sep 2022',
    title: 'Project Manager',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Led a front-end device projects subgroup of <strong><span class="timeline-metric">8 (managing 2 direct reports)</span></strong>. Engineered and deployed the EOD system (Spring Boot, PostgreSQL, Docker). Managed full SDLC and earned <strong><span class="timeline-metric">merit awards</span></strong> in OCL\'s innovation competitions (2017, 2020).',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Apr 2017 - Mar 2020',
    title: 'Assistant Project Manager',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Enhanced Fare Table System (FTS) supporting HK government\'s scheme (covering <strong><span class="timeline-metric">99.9% of HK citizens</span></strong>). Developed Octopus Secure Data Exchange (OSDX) with TLS 1.3 for <strong><span class="timeline-metric">5,000+ merchants</span></strong>. Enhanced New Retail Reader (NRR).',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Oct 2014 - Mar 2017',
    title: 'Senior System Engineer (Front-End Device Team)',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Advanced card reader development (Java, C++, C). Developed Fare Table System (FTS) for <strong><span class="timeline-metric">4,000+ vehicles</span></strong>, supporting HK government\'s <strong><span class="timeline-metric">$2 flat fare scheme</span></strong>. Modified DLLs and developed automation testing tools.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'education',
    date: 'Sep 2011 - Nov 2014',
    title: 'Master of Science in Information Technology',
    subtitle: 'The Hong Kong Polytechnic University',
    location: 'Hong Kong',
    description: 'Key Areas: Database Systems, Data Mining, Object-Oriented Programming, Artificial Intelligence, Web Technologies. Skills Gained: SQL, Java, C++.',
    logo: polyulogo,
    brandColor: '#A00000'
  },
  {
    type: 'work',
    date: 'Oct 2013 - Sep 2014',
    title: 'System Engineer (Front-End Device Team)',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Contributed to a system processing <strong><span class="timeline-metric">15 million daily transactions</span></strong>. Focused on testing and maintaining front-end devices. Developed automation tools (C++, Java, Python) to optimize testing efficiency.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Jan 2013 - Oct 2013',
    title: 'Electronic Engineer I',
    subtitle: 'ASMPT Technology Hong Kong Limited',
    location: 'Hong Kong',
    description: 'Maintained multi-threaded C++ software for die-bonding machines deployed to <strong><span class="timeline-metric">100+ factories</span></strong>. Improved performance across <strong><span class="timeline-metric">3-4 models</span></strong>. Provided global field support. Promoted in Jan 2013.',
    logo: asmptlogo,
    brandColor: '#005BAC'
  },
  {
    type: 'work',
    date: 'Aug 2010 - Dec 2012',
    title: 'Electronic Engineer II',
    subtitle: 'ASMPT Technology Hong Kong Limited',
    location: 'Hong Kong',
    description: 'Developed and maintained C++ software (OOP, MVC) for AD830U/AD830UR die-bonding machines (valued at <strong><span class="timeline-metric">HKD 1M each</span></strong>). Sole software engineer in a 6-person team, managing software releases and customer support.',
    logo: asmptlogo,
    brandColor: '#005BAC'
  },
  {
    type: 'education',
    date: 'Sep 2006 - Nov 2010',
    title: 'Bachelor of Engineering in Electronic Engineering',
    subtitle: 'The Hong Kong University of Science and Technology',
    location: 'Hong Kong',
    description: 'Second Class Honors (Division 1). <strong><span class="timeline-metric">Dean\'s List (Spring 2009-10)</span></strong>. Skills: C++, C, Java, Assembly, MATLAB, Web Dev. Leave of Absence: Sep 2008 - Jun 2009 for internship.',
    logo: hkustlogo,
    brandColor: '#003A70'
  },
  {
    type: 'work',
    date: 'Jun 2008 - May 2009',
    title: 'Engineering Trainee',
    subtitle: 'Solomon Systech Limited',
    location: 'Hong Kong',
    description: 'In a 15-person team, developed a GUI for IC floor planning (Tcl/Tk) receiving a <strong><span class="timeline-metric">monthly team award</span></strong>, a web-based info system (JSP, MySQL), and a schematic generator (Tcl/Tk, C++). Gained experience in layout and physical verification scripting.',
    logo: solomonsystechlogo,
    brandColor: '#00AEEF'
  }
];

export default Timeline;