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
    style: { background: 'rgb(108, 117, 125)', color: 'white' } 
  },
  education: { 
    icon: faGraduationCap, 
    style: { background: 'rgb(108, 117, 125)', color: 'white' } 
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
      <div className="items-container timeline-container">
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

// Timeline Data - Updated work entries
const timelineData: TimelineItem[] = [
  {
    type: 'education',
    date: 'Sep 2023 - Feb 2025',
    title: 'Master of Engineering in Geomatics Engineering',
    subtitle: 'University of Calgary',
    location: 'Calgary, AB',
    description: 'Achieved a GPA of <strong><span class="timeline-metric">3.9/4.0</span></strong> with <strong><span class="timeline-metric">4 A+ grades</span></strong> in advanced courses. Specialized in Machine Learning, Data Mining, GIS, and GNSS technologies. Extensively used Python (PyTorch, NumPy, Pandas, Scikit-learn) for deep learning projects and spatial data analysis.',
    logo: uofclogo,
    brandColor: '#D80032'
  },
  {
    type: 'work',
    date: 'Sep 2022 - Aug 2023',
    title: 'Contract System Analyst',
    subtitle: 'CL Technical Service Limited',
    location: 'Hong Kong',
    description: 'Served as technical consultant for HKSAR Housing Authority, managing systems for <strong><span class="timeline-metric">818,000 public housing units</span></strong> serving <strong><span class="timeline-metric">2.1M+ residents</span></strong>. Led enhancement projects with <strong><span class="timeline-metric">99.9% SLA compliance</span></strong> and mentored <strong><span class="timeline-metric">10-person vendor team</span></strong>. Maintained ISO 9001 quality standards.',
    logo: cltechnicalservicelogo,
    brandColor: '#E30613'
  },
  {
    type: 'work',
    date: 'Apr 2020 - Sep 2022',
    title: 'Project Manager',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Led front-end device team of <strong><span class="timeline-metric">8 engineers (2 direct reports)</span></strong>. Engineered EOD system (Spring Boot, PostgreSQL, Docker) reducing processing time by <strong><span class="timeline-metric">80-85%</span></strong>. Managed <strong><span class="timeline-metric">190,000+ acceptance points</span></strong> and earned <strong><span class="timeline-metric">merit awards</span></strong> in innovation competitions.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Apr 2017 - Mar 2020',
    title: 'Assistant Project Manager',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Enhanced Fare Table System supporting HK government scheme covering <strong><span class="timeline-metric">98% of HK citizens</span></strong>. Developed OSDX with TLS 1.3 for <strong><span class="timeline-metric">5,000+ merchants</span></strong>. Successfully deployed NRR enhancements to <strong><span class="timeline-metric">40 locations</span></strong> including 25 tertiary institutions.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Oct 2014 - Mar 2017',
    title: 'Senior System Engineer (Front-End Device Team)',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Developed Fare Table System (Java, MySQL, Spring) for <strong><span class="timeline-metric">4,000+ vehicles</span></strong>, reducing processing time by <strong><span class="timeline-metric">71%</span></strong>. Enhanced <strong><span class="timeline-metric">190,000+ acceptance points</span></strong> and supported HK government\'s <strong><span class="timeline-metric">$2 flat fare scheme</span></strong>.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'education',
    date: 'Sep 2011 - Nov 2014',
    title: 'Master of Science in Information Technology',
    subtitle: 'The Hong Kong Polytechnic University',
    location: 'Hong Kong',
    description: 'Comprehensive graduate program covering Database Systems, Data Mining, Object-Oriented Programming, and Artificial Intelligence. Developed strong foundation in <strong><span class="timeline-metric">SQL, Java, C++</span></strong> and software engineering methodologies with focus on web technologies and financial computing.',
    logo: polyulogo,
    brandColor: '#A00000'
  },
  {
    type: 'work',
    date: 'Oct 2013 - Oct 2014',
    title: 'System Engineer (Front-End Device Team)',
    subtitle: 'Octopus Cards Limited',
    location: 'Hong Kong',
    description: 'Contributed to system processing <strong><span class="timeline-metric">15 million daily transactions</span></strong> worth <strong><span class="timeline-metric">HK$300M</span></strong>. Developed automation tools improving testing efficiency by <strong><span class="timeline-metric">10%</span></strong>. Maintained front-end devices across <strong><span class="timeline-metric">190,000+ acceptance points</span></strong>. Promoted to Senior Engineer within first year.',
    logo: octopuslogo,
    brandColor: '#F58220'
  },
  {
    type: 'work',
    date: 'Jan 2013 - Oct 2013',
    title: 'Electronic Engineer I',
    subtitle: 'ASMPT Technology Hong Kong Limited',
    location: 'Hong Kong',
    description: 'Maintained multi-threaded C++ software for die-bonding machines (valued at <strong><span class="timeline-metric">HK$1M each</span></strong>) deployed to <strong><span class="timeline-metric">100+ global factories</span></strong>. Provided field support across <strong><span class="timeline-metric">APAC</span></strong>. Enhanced software performance and reliability, contributing to global manufacturing efficiency.',
    logo: asmptlogo,
    brandColor: '#005BAC'
  },
  {
    type: 'work',
    date: 'Aug 2010 - Dec 2012',
    title: 'Electronic Engineer II',
    subtitle: 'ASMPT Technology Hong Kong Limited',
    location: 'Hong Kong',
    description: 'Developed and maintained C++ software (OOP, MVC) for automated die-bonding machines. Functioned as <strong><span class="timeline-metric">sole software engineer</span></strong> in 6-person multidisciplinary team. Enhanced performance across <strong><span class="timeline-metric">3-4 machine models</span></strong> with global deployment.',
    logo: asmptlogo,
    brandColor: '#005BAC'
  },
  {
    type: 'education',
    date: 'Sep 2006 - Nov 2010',
    title: 'Bachelor of Engineering in Electronic Engineering',
    subtitle: 'The Hong Kong University of Science and Technology',
    location: 'Hong Kong',
    description: '<strong><span class="timeline-metric">Second Class Honors (Division I)</span></strong> with <strong><span class="timeline-metric">Dean\'s List recognition (Spring 2009-10)</span></strong>. Strong performance in technical courses with multiple A+ grades. Mastered C++, Java, MATLAB, and web development technologies. Completed comprehensive final year project series.',
    logo: hkustlogo,
    brandColor: '#003A70'
  },
  {
    type: 'work',
    date: 'Jun 2008 - May 2009',
    title: 'Engineering Trainee',
    subtitle: 'Solomon Systech Limited',
    location: 'Hong Kong',
    description: 'Developed GUI for IC floor planning (Tcl/Tk) earning <strong><span class="timeline-metric">monthly team award</span></strong>. Built web-based info system (JSP, MySQL) and schematic generator (C++). Contributed to CMOS design leading to <strong><span class="timeline-metric">A+ grade</span></strong> in advanced VLSI course.',
    logo: solomonsystechlogo,
    brandColor: '#00AEEF'
  }
];

export default Timeline;