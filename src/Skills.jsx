// import React from 'react';
// import { Typography, Card, CardContent, Grid, Box, Paper } from '@material-ui/core';

// const logos = {
//     Languages: [
//         { src: '/logo/java.svg', label: 'Java' },
//         { src: '/logo/javascript.svg', label: 'JavaScript' },
//         { src: '/logo/html.svg', label: 'HTML' },
//     ],
//     Web: [
//         { src: '/logo/bootstrap.svg', label: 'Bootstrap' },
//         { src: '/logo/jquery.svg', label: 'jQuery' },
//         { src: '/logo/react.svg', label: 'React' },
//         { src: '/logo/css.svg', label: 'CSS' }
//     ],
//     Databases: [
//         { src: '/logo/mongodb.svg', label: 'MongoDB' },
//         { src: '/logo/mysql.svg', label: 'MySQL' },
//         { src: '/logo/postgresql.svg', label: 'PostgreSQL' },
//         { src: '/logo/dynamodb.svg', label: 'DynamoDB' }
//     ],
//     Deployment: [
//         { src: '/logo/aws.svg', label: 'AWS' },
//         { src: '/logo/docker.svg', label: 'Docker' },
//         { src: '/logo/jenkins.svg', label: 'Jenkins' },
//         { src: '/logo/linux.svg', label: 'Linux' },
//         { src: '/logo/tomcat.svg', label: 'Tomcat' }
//     ],
//     Frameworks: [
//         { src: '/logo/spring.svg', label: 'Spring' },
//         { src: '/logo/node.svg', label: 'Node' },
//         { src: '/logo/hibernate.svg', label: 'Hibernate' },
//     ],
// }

// const IconSize = '10rem';

// const cardStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     borderRadius: '50%',
//     width: IconSize,
//     height: IconSize,
//     padding: '1rem',
//     margin: '1rem 0',
// };

// const LogoContainer = ({ logos }) => {
//     return (
//         <Grid container spacing={2}>
//             {logos.map((logo, index) => (
//                 <Grid item key={logo.label + index} xs={6} sm={4} md={2}>
//                     <Card elevation={20} style={cardStyle}>
//                         <img loading='lazy' type="image/svg+xml" src={logo.src} height="50%" width="50%" alt={logo.label} />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="h2" fontFamily="monospace">
//                                 {logo.label}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// const LogoName = ({ logoItems, label }) => {
//     return (
//         <>
//             <Typography variant='h4'>{label}</Typography>
//             <LogoContainer logos={logoItems} />
//         </>
//     );
// };

// const Skills = () => {
//     return (
//         <div id='technology'>
//             <Paper square elevation={0}  >
//                 <Box fontWeight='large'>
//                     <Typography variant='h3' >
//                         Skills
//                     </Typography>
//                 </Box>
//             </Paper>
//             <LogoName logoItems={logos.Languages} label='Languages'/>
//             <LogoName logoItems={logos.Web} label='Web'/>
//             <LogoName logoItems={logos.Databases} label='Databases'/>
//             <LogoName logoItems={logos.Deployment} label='Deployment'/>
//             <LogoName logoItems={logos.Frameworks} label='Frameworks'/>
//         </div>
//     );
// };

// export default Skills;

import React from 'react';
import { Typography, Card, CardContent, Grid, Box, Paper } from '@material-ui/core';

const logos = {
        Languages: [
            { src: '/logo/java.svg', label: 'Java' },
            { src: '/logo/javascript.svg', label: 'JavaScript' },
            { src: '/logo/html.svg', label: 'HTML' },
        ],
        Web: [
            { src: '/logo/bootstrap.svg', label: 'Bootstrap' },
            { src: '/logo/jquery.svg', label: 'jQuery' },
            { src: '/logo/react.svg', label: 'React' },
            { src: '/logo/css.svg', label: 'CSS' }
        ],
        Databases: [
            { src: '/logo/mongodb.svg', label: 'MongoDB' },
            { src: '/logo/mysql.svg', label: 'MySQL' },
            { src: '/logo/postgresql.svg', label: 'PostgreSQL' },
            { src: '/logo/dynamodb.svg', label: 'DynamoDB' }
        ],
        Deployment: [
            { src: '/logo/aws.svg', label: 'AWS' },
            { src: '/logo/docker.svg', label: 'Docker' },
            { src: '/logo/jenkins.svg', label: 'Jenkins' },
            { src: '/logo/linux.svg', label: 'Linux' },
            { src: '/logo/tomcat.svg', label: 'Tomcat' }
        ],
        Frameworks: [
            { src: '/logo/spring.svg', label: 'Spring' },
            { src: '/logo/node.svg', label: 'Node' },
            { src: '/logo/hibernate.svg', label: 'Hibernate' },
        ],
    }

const IconSize = '8rem';

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '50%',
  width: IconSize,
  height: IconSize,
  padding: '1rem',
  margin: '1rem 0',
  backgroundColor: '#f5f5f5', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const categoryHeadingStyle = {
  marginBottom: '1rem',
};

const containerStyle = {
  padding: '2rem',
  
};

const LogoContainer = ({ logos }) => {
  return (
    <Grid container spacing={2}>
      {logos.map((logo, index) => (
        <Grid item key={logo.label + index} xs={6} sm={4} md={3}>
          <Card elevation={20} style={cardStyle}>
            <img
              loading='lazy'
              type='image/svg+xml'
              src={logo.src}
              height='50%'
              width='50%'
              alt={logo.label}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h6'
                component='h2'
                fontFamily='monospace'
                color='textSecondary'
              >
                {logo.label}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const LogoName = ({ logoItems, label }) => {
  return (
    <div style={categoryHeadingStyle}>
      <Typography variant='h4' >{label}</Typography>
      <LogoContainer logos={logoItems} />
    </div>
  );
};

const Skills = () => {
  return (
    <div id='technology' style={containerStyle}>
      <Paper square elevation={0}>
        <Box fontWeight='large'>
          <Typography variant='h3' align='center' > Skills</Typography>
        </Box>
      </Paper>
      <LogoName logoItems={logos.Languages} label='Languages' />
      <LogoName logoItems={logos.Web} label='Web' />
      <LogoName logoItems={logos.Databases} label='Databases' />
      <LogoName logoItems={logos.Deployment} label='Deployment' />
      <LogoName logoItems={logos.Frameworks} label='Frameworks' />
    </div>
  );
};

export default Skills;

