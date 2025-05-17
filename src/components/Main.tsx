import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {


  const avatarUrl = "https://avatars.githubusercontent.com/u/156290661?s=400&u=b605b75d91494d001b86e6ca3fd487b6c3bc146a&v=4"; 

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarUrl} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KayiuTommyLI" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/li-ka-yiu-tommy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tommy Li</h1>
          <p>Experienced Software Engineer, System Analyst and Project Manager</p>
          <p>Specializing in scalable system design and Full Stack Development.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KayiuTommyLI" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/li-ka-yiu-tommy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;