import { Container, Typography, Box, Button, Grid, Paper, IconButton, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <>
      <Box id="home" sx={{ pt: 4 }}>  {/* Reduced from pt: 8 */}
        <Container>
          <Box sx={{
            minHeight: '90vh',  // Reduced from 100vh
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <Avatar
              alt="Abhishek Sharma"
              src="/IMG_2335.jpeg" // Add your image in the public folder
              sx={{
                width: 200,
                height: 200,
                mb: 4,
                border: '3px solid',
                borderColor: 'primary.main',
                boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
              }}
            />
            <Typography variant="h2" gutterBottom>
              Hello, I'm Abhishek
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Software Developer 
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
              I'm passionate about creating innovative solutions and building amazing software.
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* Move skills section outside of home container */}
      <Box id="skills" sx={{ py: 8, minHeight: '100vh' }}>
        <Container>
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Skills
          </Typography>
          <Grid container spacing={4}>
            {/* Frontend box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',  // Ensure the border effect doesn't overflow
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',  // Default border
                  transition: 'border-image 0.3s ease-in-out',  // Smooth transition
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',  // Lighting effect on border
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Frontend</Typography>
                <Typography>React, Typescript, HTML, CSS, and JavaScript</Typography>
              </Paper>
            </Grid>

            {/* Backend box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Backend</Typography>
                <Typography>Java, SpringBoot, WebAPIs, SQL/NoSQL</Typography>
              </Paper>
            </Grid>

            {/* DevOps box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">DevOps</Typography>
                <Typography>Docker, Kubernetes, DataDog, Prometheus, Splunk</Typography>
              </Paper>
            </Grid>

            {/* Cloud box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Cloud</Typography>
                <Typography>Azure, AWS</Typography>
              </Paper>
            </Grid>

            {/* System box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">System</Typography>
                <Typography>Shell scripting, Electron, VsCode Developer APIs</Typography>
              </Paper>
            </Grid>

            {/* Testing box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Testing</Typography>
                <Typography>Jest, Mockito</Typography>
              </Paper>
            </Grid>

            {/* Version Control box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Version Control</Typography>
                <Typography>Git/Github</Typography>
              </Paper>
            </Grid>

            {/* Automation box */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#2d2d2d',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1,
                  border: '2px solid transparent',
                  transition: 'border-image 0.3s ease-in-out',
                },
                '&:hover::before': {
                  borderImage: 'linear-gradient(45deg, #ff0099, #00ff99, #00ccff, #ff0099) 1',
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">Automation</Typography>
                <Typography>Python, Bash</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="experience" sx={{ minHeight: '90vh', py: 6 }}>  {/* Reduced padding and height */}
        <Container>
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Experience
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                backgroundColor: '#2d2d2d',
                '&:hover': {
                  backgroundColor: '#363636',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}>
                <Typography variant="h5" color="primary" gutterBottom>Qualcomm</Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom>Senior Engineer | Apr 2024 - Present</Typography>
                <Typography variant="body1"><ul><li><p>Designed and developed a feature-rich IDE to boost developer productivity, streamline workflows and optimise the development experience for a wide range of users.</p></li><li><p>Implemented critical features like <strong>Wi-Fi connectivity, advanced workspace management, and seamless device selection</strong>, enhancing the development experience.</p></li><li><p>Modernized architecture, reducing technical debt, ensuring application reliability through root cause analysis and managing the complete development lifecycle</p></li><li><p>Tech Stack Used: <strong>Typescript, React, Angular, Bash, VSCODE Developer APIs, ADB shell</strong></p></li></ul>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                backgroundColor: '#2d2d2d',
                '&:hover': {
                  backgroundColor: '#363636',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}>
                <Typography variant="h5" color="primary" gutterBottom>Apptio</Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom>Software Development Engineer II | Oct 2023 - March 2024</Typography>
                <Typography variant="body1">
                    <hr></hr>
                <ul><li><p>Working on the customer-facing Studio application which lets you create and edit complex dashboards. Developed, designed and led new features for <strong>Apptio's market-leading Cost Transparency</strong> Product. Tech used: <strong>Typescript, Java, JSON, RESTful APIs, Redux/React, React-grid-layout, AWS, Docker, Prometheus and Kubernetes</strong></p></li><li><p>Played a vital role in the strategic initiative to migrate the application's frontend from <strong>GWT to React</strong>, implementing architectural improvements and ensuring code quality. Developed <strong>RESTful APIs</strong> in Java for backend functionality </p></li><li><p>Built and managed Datadog observability solutions, optimizing real-time monitoring with dashboards and alerts to maintain a &gt;99.8% network success rate, earning cross-product recognition.</p></li></ul>
                </Typography>
                <hr></hr>
                <Typography variant="subtitle1" color="secondary" gutterBottom>Software Development Engineer I | Dec 2021 - Sep 2023</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                backgroundColor: '#2d2d2d',
                '&:hover': {
                  backgroundColor: '#363636',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}>
                <Typography variant="h5" color="primary" gutterBottom>IBM</Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom>Associate Developer | Jan 2021 - Nov 2021</Typography>
                <Typography variant="body1">
                <ul><li><p>Built mass mailer draft functionality (<strong>Spring Boot/Angular)</strong> and ensured the reliability of nine enterprise Azure applications</p></li></ul>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects section - temporarily hidden */}
      {/* <Box id="projects" sx={{ minHeight: '90vh', py: 6 }}>  {/* Reduced padding and height */}
        {/* <Container>
          <Typography variant="h3" gutterBottom align="center">
            Projects
          </Typography>
          {/* Add your projects content here */}

      
      <Box id="contact" sx={{ minHeight: '90vh', py: 6, display: 'flex', alignItems: 'center' }}>  {/* Reduced padding and height */}
        <Container>
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Contact
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 4,
            mt: 3 
          }}>
            <IconButton
              component="a"
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              sx={{ 
                width: '60px',
                height: '60px',
                border: '2px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  '& svg': {
                    color: 'background.default'
                  }
                }
              }}
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/your-username"
              target="_blank"
              sx={{ 
                width: '60px',
                height: '60px',
                border: '2px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  '& svg': {
                    color: 'background.default'
                  }
                }
              }}
            >
              <GitHubIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;