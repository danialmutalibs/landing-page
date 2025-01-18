import { Box, Typography, IconButton } from '@mui/material';
import { shadows } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        color: '#fff', // Text color
        
      }}
    >
    <Box sx={{display: "flex",
              gap: "20px",
    }}>
      <IconButton
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          border: "1.5px solid #007bff",
          borderRadius: "50%",
          color: '#007bff', // Icon color
          '&:hover': {
            color: '#E4405F', // Instagram pink on hover
            borderColor: '#E4405F', // Change border color on hover
            boxShadow: '0 6px 10px rgba(228, 64, 95, 0.5)', // Brighter shadow on hover
            transform: 'scale(1.1)', // Slightly enlarge on hover

          },
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Adds shadow
          
        }}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>

      <IconButton
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          border: "1.5px solid #007bff",
          borderRadius: "50%",
          color: '#007bff', // Icon color
          '&:hover': {
            color: '#E4405F', // LinkedIn pink on hover
            borderColor: '#E4405F', // Change border color on hover
            boxShadow: '0 6px 10px rgba(228, 64, 95, 0.5)', // Brighter shadow on hover
            transform: 'scale(1.1)', // Slightly enlarge on hover

          },
          
          
        }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>

      <IconButton
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          border: "1.5px solid #007bff",
          borderRadius: "50%",
          color: '#007bff', // Icon color
          '&:hover': {
            color: '#E4405F', // LinkedIn pink on hover
            borderColor: '#E4405F', // Change border color on hover
            boxShadow: '0 6px 10px rgba(228, 64, 95, 0.5)', // Brighter shadow on hover
            transform: 'scale(1.1)', // Slightly enlarge on hover

          },
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Adds shadow
          
        }}
      >
        <GitHubIcon fontSize="small" />
      </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;

