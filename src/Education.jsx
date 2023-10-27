import React from 'react';
import { Grid } from '@mui/material';
import { Container, Typography } from '@material-ui/core';
import SchoolIcon from '@mui/icons-material/School';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const experiences = [
    {
        title: "Msc. Computer Science",
        company: 'Maharishi Internatiional University',
        description: "Fairfield, IA, US",
        date: '2022 - 2025'
    },
    {
        title: 'Bsc. Engineering',
        company: 'Addis Ababa Science and Technology University',
        description: "Addis Ababa, Ethiopia",
        date: '2012 - 2017'
    },
];
const separatorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 0 0 0',

}
function Education() {
    const separatorColor = '#ec407a';
    

    return (
        <Container > 
        <Grid item xs={12} md={12} style={{ margin: '100px', display: 'flex', justifyContent: 'center' }} >
            <Timeline>

                <TimelineItem>
                    <TimelineSeparator >
                        <TimelineConnector style={{ backgroundColor: separatorColor }} />
                        <TimelineDot style={{ backgroundColor: separatorColor }}>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector style={{ backgroundColor: separatorColor }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h6" component="span">
                            Education
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem style={separatorStyle}> 
                {experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                         <TimelineOppositeContent sx={{ py: '10px', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Typography variant='h6'>{experience.company}</Typography>
                            <Typography variant='body1'>{experience.date}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineConnector style={{ backgroundColor: separatorColor }} />
                            <TimelineDot style={{ backgroundColor: separatorColor }} />
                            <TimelineConnector style={{ backgroundColor: separatorColor }} />
                        </TimelineSeparator>   
                        <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant='h4'>{experience.title}</Typography>
                            <Typography variant='body1'>{experience.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
                </TimelineItem>
            </Timeline>
        </Grid>
        </Container>
    );
}

export default Education;

// import React from 'react';
// import { Container, Typography, Grid } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import Timeline from '@mui/lab/Timeline';
// import TimelineOppositeContent, {
//     timelineOppositeContentClasses,
// } from '@mui/lab/TimelineOppositeContent';

// const experiences = [
//     {
//         title: "Msc. Computer Science",
//         company: 'Maharishi Internatiional University',
//         description: "Fairfield, IA, US",
//         date: '2022 - 2025'
//     },
//     {
//         title: 'Bsc. Engineering',
//         company: 'Addis Ababa Science and Technology University',
//         description: "Addis Ababa, Ethiopia",
//         date: '2012 - 2017'
//     },
// ];

// function Education() {
//     return (
//         <Timeline
//             sx={{
//                 [`& .${timelineOppositeContentClasses.root}`]: {
//                     flex: 0.2,
//                 },
//             }}
//         >
//             <TimelineItem>
//                 <TimelineOppositeContent color="textSecondary">
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <SchoolIcon />
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent>Education</TimelineContent>
//             </TimelineItem>
//             <TimelineItem>
//                 <TimelineOppositeContent color="textSecondary">
//                     Addis Ababa Science and Technology University
//                     {/* <br></br> */}
//                     2012 - 2017
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot />
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent>Bsc. Engineering</TimelineContent>
//             </TimelineItem>
//             <TimelineItem>
//                 <TimelineOppositeContent color="textSecondary">
//                     2022 - 2025
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineDot />
//                 </TimelineSeparator>
//                 <TimelineContent>Msc. Computer Science</TimelineContent>
//             </TimelineItem>


//         </Timeline>
//     )
// }
// export default Education;

