import React from "react";
// import '@fortawesome/free-regular-svg-icons'; // Only if you use regular icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const workIconStyle = { background: '#5000ca', color: 'white' }; // Keep template's purple for work
  const schoolIconStyle = { background: '#007bff', color: 'white' }; // A distinct blue for education

  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>

          {/* Education: University of Calgary */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2023 - Feb 2025"
            iconStyle={schoolIconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Engineering in Geomatics Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Calgary, Calgary, AB</h4>
            <p>
              Achieved a GPA of <strong><span className="timeline-metric">3.9/4.0</span></strong>. Focused on Machine Learning, Data Mining, GIS, and Python (PyTorch, NumPy, Pandas).
            </p>
          </VerticalTimelineElement>

          {/* Work: CL Technical Service Limited */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - Aug 2023"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Contract System Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">CL Technical Service Limited, Hong Kong</h4>
            <p>
              Served as an outsourced System Analyst for HKSAR Housing Authority, collaborating within an <strong><span className="timeline-metric">8-person team</span></strong> to monitor <strong><span className="timeline-metric">6 distinct systems</span></strong> including a worker check-in system. Led system enhancement projects, developed specification documents, and ensured ISO 9001 compliance.
            </p>
          </VerticalTimelineElement>

          {/* Work: Octopus Cards Limited - Project Manager */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2020 - Sep 2022"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited / Octopus Holdings Limited, Hong Kong</h4>
            <p>
              Led a front-end device projects subgroup of <strong><span className="timeline-metric">8 (managing 2 direct reports)</span></strong>. Engineered and deployed the EOD system (Spring Boot, PostgreSQL, Docker), replacing a manual process. Managed full SDLC for multiple projects and earned <strong><span className="timeline-metric">merit awards</span> </strong> in OCL's innovation competitions (2017, 2020).
            </p>
          </VerticalTimelineElement>

          {/* Work: Octopus Cards Limited - Assistant Project Manager */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2017 - Mar 2020"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited / Octopus Holdings Limited, Hong Kong</h4>
            <p>
              Enhanced Fare Table System (FTS) supporting HK government's Public Transportation Scheme (covering <strong><span className="timeline-metric">99.9% of HK citizens</span></strong>). Developed Octopus Secure Data Exchange (OSDX) using TLS 1.3 for secure POS settlements with <strong><span className="timeline-metric">5,000+ merchants</span></strong>. Enhanced New Retail Reader (NRR) for KMB Fare Saver.
            </p>
          </VerticalTimelineElement>

           {/* Work: Octopus Cards Limited - Senior System Engineer */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2014 - Mar 2017"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior System Engineer (Front-End Device Team)</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited / Octopus Holdings Limited, Hong Kong</h4>
            <p>
              Advanced card reader development (Java, C++, C). Developed Fare Table System (FTS) for Multipurpose Octopus Processors used by over <strong><span className="timeline-metric">4,000 vehicles</span></strong>, supporting HK government's <strong><span className="timeline-metric">$2 flat fare scheme</span></strong>. Modified DLLs and developed automation testing tools.
            </p>
          </VerticalTimelineElement>

          {/* Education: The Hong Kong Polytechnic University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2011 - Nov 2014"
            iconStyle={schoolIconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science in Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">The Hong Kong Polytechnic University, Hong Kong</h4>
            <p>
              Key Areas: Database Systems, Data Mining, Object-Oriented Programming, Artificial Intelligence, Web Technologies. Skills Gained: SQL, Java, C++.
            </p>
          </VerticalTimelineElement>

          {/* Work: Octopus Cards Limited - System Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2013 - Sep 2014"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Engineer (Front-End Device Team)</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited / Octopus Holdings Limited, Hong Kong</h4>
            <p>
              Contributed to a system processing <strong><span className="timeline-metric">15 million daily transactions</span></strong>. Focused on testing and maintaining front-end devices (Octopus Service Points, KMB readers, POP readers). Developed automation tools (C++, Java, Python) to optimize testing efficiency.
            </p>
          </VerticalTimelineElement>

          {/* Work: ASMPT Semiconductor Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2010 - Oct 2013"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Electronic Engineer I / II</h3>
            <h4 className="vertical-timeline-element-subtitle">ASMPT Semiconductor Solutions, Hong Kong</h4>
            <p>
              Maintained C++ software for die-bonding machines (valued at <strong><span className="timeline-metric">HKD 1M each</span></strong>, deployed to <strong><span className="timeline-metric">100+ factories globally</span></strong>). Improved performance across <strong><span className="timeline-metric">3-4 models</span></strong> as sole software engineer in a 6-person team. Provided global field support and user training.
            </p>
          </VerticalTimelineElement>

          {/* Education: HKUST */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2006 - Nov 2010"
            iconStyle={schoolIconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering in Electronic Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">The Hong Kong University of Science and Technology, Hong Kong</h4>
            <p>
              Second Class Honors (Division 1) <strong><span className="timeline-metric">Dean's List (Spring 2009-10)</span></strong>. Foundational skills in C++, C, Java, Assembly, MATLAB, and Web Development.
            </p>
          </VerticalTimelineElement>

          {/* Work: Solomon Systech Limited - Engineering Trainee */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2008 - May 2009"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Solomon Systech Limited, Hong Kong</h4>
            <p>
              In a 15-person team, developed a GUI for IC floor planning (Tcl/Tk) which received a <strong><span className="timeline-metric">monthly team award</span></strong>, a web-based info system (JSP, MySQL), and a schematic generator (Tcl/Tk, C++).
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;