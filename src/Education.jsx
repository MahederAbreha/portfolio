import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@material-ui/core';
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

function Education() {
    const separatorColor = '#ec407a'; 

    return (
        <Grid item xs={12} md={12} style={{ margin: '100px' }}>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
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
                {experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                         <TimelineOppositeContent sx={{ py: '10px', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Typography variant='h6'>{experience.company}</Typography>
                            <Typography variant='body1'>{experience.date}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
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
            </Timeline>
        </Grid>
    );
}

export default Education;
