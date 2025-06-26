import React from "react";
import { Card, CardContent, Typography, Grid, Box, Link, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

// Import your downloaded certification images
import awsCppBadge from '../assets/images/aws_cloud_practioner_logo.png'; // Update path as needed
import psmBadge from '../assets/images/psm1-logo.png'; // Update path as needed

// Define an interface for certification data
interface CertificationInfo {
  id: string;
  badgeImage: string; // Path to the badge image
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credlyLink: string; // Credly verification link
  validationNumber?: string;
}

const certificationsData: CertificationInfo[] = [
  {
    id: 'aws-cpp',
    badgeImage: awsCppBadge,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: 'May 21, 2025',
    expiryDate: 'May 21, 2028',
    credlyLink: 'https://www.credly.com/badges/c473f852-4f09-4292-89c4-cd7ad00bd7a1/linked_in_profile',
    validationNumber: '9dfd417a4fb848ca85397c3353eeb575',
  },
  {
    id: 'psm1',
    badgeImage: psmBadge,
    title: 'Professional Scrum Master™ I (PSM I)',
    issuer: 'Scrum.org',
    issueDate: 'May 10, 2025',
    credlyLink: 'https://www.credly.com/badges/6f58f7df-fb7b-475f-80ff-1ce3de20eee5/linked_in_profile',
  },
];

function Certifications() {
  const theme = useTheme();
  return (
    <div id="certifications" className="bg-wallpaper">
      <div className="projects-container">
        
        <h1>Certifications</h1>
        <Grid container spacing={4} justifyContent="center">
          {certificationsData.map((cert) => (
            <Grid item key={cert.id} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  color: 'text.primary',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow: (theme) => theme.shadows[2],
                  borderRadius: '8px',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[6],
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px' }}>
                  <Link 
                    href={cert.credlyLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      marginBottom: '16px',
                      display: 'block',
                      '&:hover': {
                        opacity: 0.9,
                      }
                    }}
                  >
                    <Box 
                      component="img" 
                      src={cert.badgeImage} 
                      alt={`${cert.title} badge`}
                      sx={{
                        width: '120px', // Adjust size as needed
                        height: '120px', // Adjust size as needed
                        objectFit: 'contain',
                      }}
                    />
                  </Link>
                  
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: '600' }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '4px' }}>
                    Issued: {cert.issueDate}
                  </Typography>
                  {cert.expiryDate && (
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                      Expires: {cert.expiryDate}
                    </Typography>
                  )}
                  <Link
                    href={cert.credlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontWeight: 'medium',
                      color: theme.palette.mode === 'dark'
                             ? theme.palette.primary.light
                             : theme.palette.primary.main,
                      textDecorationColor: (themeLocal) => alpha(theme.palette.mode === 'dark'
                             ? themeLocal.palette.primary.light
                             : themeLocal.palette.primary.main, 0.4),
                       '&:hover': {
                          textDecorationColor: theme.palette.mode === 'dark'
                             ? theme.palette.primary.light
                             : theme.palette.primary.main,
                       }
                    }}
                  >
                    Verify on Credly
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Certifications;