import React from 'react'
import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '/app/globals.css';
import '@fontsource/open-sans/300.css'; // Light 300
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css'; // Bold 700
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Email from '@/components/Email';
import Footer from '@/components/Footer';


const page = () => {
  return (
  <Box>
      <Box sx={{justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: "50px",
                marginBottom: "50px",
      }}>
        <Image 
          src="/images/logo.svg"
          alt="logo"
          height={25}
          width={85}/>
      </Box>
       <Typography variant="h4"
                   sx={{fontFamily: "Open Sans, Arial, sans-serif",
                        fontWeight: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        color: "#d1d6de",
                        marginBottom: "25px"
                   }}>We are launching <span style={{
                                                   fontWeight: 'bold',
                                                   color: "#030303",
                   }}>&nbsp;soon!</span>
          
       </Typography>
        <Typography sx={{justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        fontFamily: "Open Sans, Arial, sans-serif",
                        fontWeight: "400",
                        color: "#565e58",
                        marginBottom: "25px",
                        }}>Subscribe and get notified
        </Typography>
        <Email />
        <Box sx={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "25px",
        }} >
        <Image src= "/images/illustration-dashboard.png"
           alt= "image-dashboard"
           height= {350}
           width= {600}
           />
        </Box>
        

        <Footer />
  </Box>
      
  )
}

export default page
