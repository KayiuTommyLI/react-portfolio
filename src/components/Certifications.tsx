import React from "react";
// import styles or use inline
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

function Certifications() {
  return (
    <div id="certifications" className="container" style={{ textAlign: 'center', padding: '50px 10%'}}>
      <h1>Certifications</h1>
      <div style={{ marginTop: '20px' }}>
        <FontAwesomeIcon icon={faCertificate} size="2x" style={{ marginBottom: '10px' }} />
        <h3>Professional Scrum Master™ I (PSM I)</h3>
        <p>Scrum.org - Issued: May 2025</p> {/* Note: Date is current month/year */}
      </div>
    </div>
  );
}

export default Certifications;