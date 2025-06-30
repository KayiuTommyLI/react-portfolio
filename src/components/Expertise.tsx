import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons'; // Added faJava, faAws
import { faDatabase, faCode, faBrain, faVial, faGears } from '@fortawesome/free-solid-svg-icons'; // Added more solid icons
import '../assets/styles/Expertise.scss';
import { Chip } from '@mui/material';

const fullStackWebDevSkills = [
    "React (v18/v19)",
    "Vite",
    "NestJS (v10/v11)",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "React Router DOM (v6/v7)",
    "JSP",
    "Jquery",
    "JSON", // Relevant to web communication
    "XML"   // Relevant to web communication
];

const backendApiSkills = [
    "Java",
    "Spring Boot",
    "Python",           // Also in ML, but relevant here for backend
    "NestJS (v10/v11)", // Repeated for backend emphasis
    "Node.js",          // Repeated for backend emphasis
    "C++",              // Can be used for high-performance backend components
    "C",                // Can be used for systems-level backend programming
    "RESTful APIs",
    "SQL",              // Foundational for backend
    "Struts2",
    "Apache Tomcat",
    "Multithreading",
    "Object-Oriented Programming (OOP)", // Foundational concept,
    "PyMuPDF",
    "JSON Processing",
    "File Upload APIs"
];

const databaseTechSkills = [
    "MySQL",
    "PostgreSQL",
    "Database Design/Modeling",
    "Database Maintenance",
    "TypeORM"
];

const devopsCloudSkills = [
    "AWS Certified Cloud Practitioner",
    "AWS ECS",
    "AWS Fargate",
    "AWS Lambda",
    "AWS API Gateway", 
    "AWS RDS",
    "AWS ALB", 
    "AWS ECR", 
    "AWS ACM", 
    "AWS VPC", 
    "AWS EC2",
    "AWS IAM",
    "AWS CloudWatch Logs",
    "Docker",
    "Docker Compose", 
    "Multi-Stage Docker Builds", 
    "Container Image Optimization", 
    "Container Security Practices (Non-Root Users)", 
    "Container Health Checks", 
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "GitHub Pages",
    "Linux/Windows Server Administration",
    "Alpine Linux", 
    "Bash",
    "Windows Batch",
    "Namecheap (DNS)"
];

const mlDataScienceSkills = [
    "Python",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "MATLAB", // Also listed under Languages, emphasized here for ML/DS
    "NLTK",
    "Transformers Library (Hugging Face)",
    "Google Gemini AI",
    "Natural Language Processing", 
    "Prompt Engineering",
    "Data Mining",
    "Data Analysis",
    "Model Evaluation",
    "Feature Engineering",
    "Geographic Information Systems (GIS)", // From Geospatial section
    "ArcGIS Pro",                         // From Geospatial section
    "GeoPandas",                          // From Geospatial section
    "GDAL/OGR",                           // From Geospatial section
    "Satellite Positioning (GNSS)",       // From Geospatial section
    "Photogrammetry"                      // From Geospatial section
];

const softwareQaAndPracticesSkills = [
    "Automation Testing (SOAP UI)",
    "TDD Software Engineering Principles",
    "Software Testing / QA",
    "Reproducible Builds (npm ci)", 
    "Dependency Management",
    "Configuration Management", 
    "SIT",
    "UAT",
    "Jest",
    "TLS 1.3",                              // From Security section
    "Certificate and Keystore Management",  // From Security section
    "bcrypt (Password Hashing)",            // From Security section
    "Firmware Development",                 // From Hardware/Embedded
    "DLL Development",                      // From Hardware/Embedded
    "Circuit Design",                       // From Hardware/Embedded
    "Computer Architecture",                // From Hardware/Embedded
    "Git",                                  // From Version Control
    "GitHub",                               // From Version Control
    "SVN",                                  // From Version Control
    "Material UI (MUI)",                    // From UI/UX
    "UI/UX Design",                         // From UI/UX
    "Networking",                           // From Other Concepts
    "Digital Image Processing",             // From Other Concepts
    "Signal Processing",                    // From Other Concepts
    "Tcl/Tk",                                // From Languages, might fit here if used for tooling/scripting in QA
    "ATS Optimization", 
    "Content Validation", 
    "Error Handling & Recovery" 
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            {/* This will create a 3-column grid. With 6 items, it will be 2 rows of 3. */}
            <div className="skills-grid">

                {/* Section 1: Full-Stack Web Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full-Stack Web Development</h3>
                    <p>Building robust and scalable end-to-end web applications using modern frameworks and languages.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {fullStackWebDevSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 2: Backend & API Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/> {/* Ensure faServer is imported */}
                    <h3>Backend & API Development</h3>
                    <p>Designing and implementing secure, scalable backend systems and RESTful APIs with a focus on performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backendApiSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 3: Database Technologies */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Technologies</h3>
                    <p>Proficient in database design, modeling, maintenance, and optimization using SQL and NoSQL solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {databaseTechSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 4: DevOps & Cloud Infrastructure */}
                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>DevOps & Cloud Infrastructure</h3>
                    <p>Experienced in cloud deployment (AWS), containerization (Docker), and CI/CD pipeline automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devopsCloudSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 5: Machine Learning & Data Science */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning & Data Science</h3>
                    <p>Applying ML techniques and data analysis for model development, geospatial analysis, and deriving insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {mlDataScienceSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 6: Software Engineering & QA Practices */}
                <div className="skill">
                    <FontAwesomeIcon icon={faVial} size="3x"/> {/* Ensure faVial or your chosen icon is imported */}
                    <h3>Software Engineering & QA</h3>
                    <p>Committed to TDD, robust testing, security best practices, and effective version control.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {softwareQaAndPracticesSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;