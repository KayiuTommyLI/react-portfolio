import React from "react";
import '@fortawesome/free-regular-svg-icons'; // This might not be needed if not using regular icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // faGraduationCap for education
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  // Define consistent styles for work and education icons
  const workIconStyle = { background: '#5000ca', color: 'white' }; // Example: Purple background, white icon
  const schoolIconStyle = { background: '#007bff', color: 'white' }; // Example: Blue background, white icon
  // Content styles can also be predefined if you want consistency
  // const contentStyle = { background: 'white', color: 'rgb(39, 40, 34)' };
  // const contentArrowStyle = { borderRight: '7px solid white' };


  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1> {/* Updated title */}
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
              GPA: 3.9/4.0. Key Skills: Machine Learning, Data Mining, GIS, Python (PyTorch, NumPy, Pandas, Scikit-learn), MATLAB, ArcGIS Pro.
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
              Outsourced System Analyst for HKSAR Housing Authority. Monitored 6 systems, led system enhancements, ensured ISO 9001 compliance, stakeholder communication, and user support.
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
              Led a subgroup of 8 (2 direct reports) for front-end device projects. Engineered and deployed EOD system (Spring Boot, PostgreSQL, Docker). Managed full SDLC, championed TDD, and contributed to innovation competitions.
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
              Enhanced Fare Table System (FTS) for Public Transportation Scheme. Developed Octopus Secure Data Exchange (OSDX) with TLS 1.3. Enhanced New Retail Reader (NRR) for KMB Fare Saver.
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
              Advanced card reader development (Java, C++, C). Modified DLLs for vendors. Developed Fare Table System (FTS) for MOPs (Spring, Struts2, MySQL). UI editing, automation testing, and stakeholder presentations.
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
              Key Areas: Database Systems, Data Mining, OOP, AI, Web Technologies. Skills: SQL, Java, C++.
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
              Focused on testing and maintaining front-end devices (Service Points, KMB readers, POP readers). Conducted SIT/UAT. Developed automation tools (C++, Java, Python) and provided debugging support.
            </p>
          </VerticalTimelineElement>

          {/* Work: ASMPT Semiconductor Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2010 - Oct 2013" // Combining both roles here for brevity
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Electronic Engineer I / II</h3> {/* Combined title */}
            <h4 className="vertical-timeline-element-subtitle">ASMPT Semiconductor Solutions, Hong Kong</h4>
            <p>
              Software maintenance and support for die-bonding machines (C++, OOP, MVC). Implemented features to enhance machine efficiency, conducted testing, and provided global field support and user training.
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
            <h4 className="vertical-timeline-element-subtitle">The Hong Kong University of Science and Technology (HKUST), Hong Kong</h4>
            <p>
              Second Class Honors (Division 1). Skills: C++, C, Java, Assembly, MATLAB, Web Dev basics, Networking.
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
              Developed GUI for IC floor planning (Tcl/Tk), web-based information system (JSP, MySQL), and schematic generator (Tcl/Tk, C++). Contributed to layout verification scripts and CMOS design.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;