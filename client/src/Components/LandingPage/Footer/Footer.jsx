// import React from 'react';
// import './Footer.css'
// function Footer() {

//     return <>
//         <footer>
//             <div>
//                 <div className="footer-content">
//                     <div className="contact">
//                         <div>
//                             <i className="fa-solid fa-phone" />
//                             <p>+92-323-3263278</p>
//                         </div>
//                         <div className="email-icon">
//                             <a href="mailto:acadist.me@gmail.com"><i className="fa-solid fa-envelope" /></a>
//                             <p>acadist.me@gmail.com</p>
//                         </div>
//                     </div>
//                     <div className="moreinfo">
//                         <ul>
//                             <li><a href="#home">Home</a></li>
//                             <li><a href="#contact">Contact Us</a></li>
//                             <li><a href="#about-us">About Us</a></li>
//                             <li><a href>Jobs</a></li>
//                             {/* <li><a href="">Privacy</a></li>
//                           <li><a href="">Terms</a></li> */}
//                         </ul>
//                     </div>
//                     <div className="social-media">
//                         <a href="https://www.facebook.com/acadist.me" target="_blank">
//                             <i className="fa-brands fa-facebook-f social-btn" />
//                         </a>
//                         <a href="https://www.instagram.com/acadist.me" target="_blank">
//                             <i className="fa-brands fa-instagram social-btn" />
//                         </a>
//                         <a href="https://www.linkedin.com/company/acadist" target="_blank">
//                             <i className="fa-brands fa-linkedin-in social-btn" />
//                         </a>
//                         <a href="https://chat.whatsapp.com/LDouf0nYSdEBldNBeFO2d2" target="_blank">
//                             <i className="fa-brands fa-whatsapp" />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="copyright">
//                     <p>©Acadist-2022 | all rights reserved</p>
//                 </div>
//             </div></footer>

//     </>;
// };

// export default Footer;
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "wheat",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                marginTop: 2,

            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h4">
                            Acadist
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
