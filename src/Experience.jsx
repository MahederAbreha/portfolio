import React from 'react';
import { Grid  } from '@mui/material';
import { Typography } from '@material-ui/core';
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const experiences = [
    {
        title: 'Software Developer',
        company: 'Institute for Healthcare Improvement',
        description: "Developed meticulously crafted and maintainable code using SOLID principles, leading to a remarkable 30% reduction in bug reports. Collaborated seamlessly with the front-end team, ensuring the integration between systems was smooth and enhancing the overall user experience. Diligently reviewed and updated requirements documentation, significantly contributing to expedited development timelines. Expertly crafted platform-independent, object-oriented, and client-server applications. Implemented cutting-edge AWS cloud services such as EC2, S3, RDS, and Lambda, guaranteeing both high availability and top-notch security. This implementation resulted in a substantial decrease in downtime, bolstered by robust backup solutions.",
        date: '2020 - 2022'
    },
    {
        title: 'Software Engineer',
        company: 'WebPro',
        description: "Engineered and deployed robust RESTful APIs with Spring, leveraging an advanced caching strategy that significantly enhanced API response efficiency. Led a proficient team in conceptualizing and implementing a customer feedback feature, sparking a substantial surge in user engagement, underlining our impactful collaboration. Drove end-to-end development initiatives, meticulously analyzing, rigorously testing, and seamlessly deploying solutions, ensuring unwavering adherence to project timelines. Actively engaged in Agile SDLC phases, consistently delivering high-quality, scalable code that not only met but exceeded project milestones. Empowered by a tech stack encompassing Java, Spring (MVC, Security, Boot, Cloud, Data), MySQL, Hibernate, and REST, our achievements underscored a commitment to excellence in every facet of the development process.",
        date: '2017 - 2019'
    },
];

function Experience() {
    const separatorColor = '#ec407a';

    return (
        <Grid container item xs={12} justifyContent="center" style={{ marginTop: '50px' }}>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector style={{ backgroundColor: separatorColor }} />
                        <TimelineDot style={{ backgroundColor: separatorColor }}>
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector style={{ backgroundColor: separatorColor }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" component="span">
                            Work Experience
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                {experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{ py: '10px', px: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>{experience.company}</Typography>
                            <Typography variant='body1'>{experience.date}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector style={{ backgroundColor: separatorColor }} />
                            <TimelineDot style={{ backgroundColor: separatorColor }} />
                            <TimelineConnector style={{ backgroundColor: separatorColor }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant='h4'>{experience.title}</Typography>
                            <Typography variant='body1'>{experience.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Grid>
    );
}

export default Experience;
