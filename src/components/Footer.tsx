import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Optional: If you want to add email/phone in footer too
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/KayiuTommyLI" target="_blank" rel="noreferrer" aria-label="Tommy LI's GitHub Profile">
          <GitHubIcon/>
        </a>
        <a href="https://linkedin.com/in/li-ka-yiu-tommy" target="_blank" rel="noreferrer" aria-label="Tommy LI's LinkedIn Profile">
          <LinkedInIcon/>
        </a>

      </div>
      <p>
        &copy; {new Date().getFullYear()} Tommy LI. All rights reserved.
      </p>
      <p style={{ fontSize: '0.7em', marginTop: '5px' }}>
        Inspired by a template from <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a>.
      </p>
    </footer>
  );
}

export default Footer;