import { Works } from '@/models';
import { Box, Container, Typography } from '@mui/material';
import WorkList from '../work/work-list';



export function FeatureWorks() {
    //call API to get recent posts
    const workList: Works[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createAt: '1692000489216',
            updateAt: '1692000489216',
            tagList: ['Dashboard'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
            fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            thumbnailUrl: 'https://res.cloudinary.com/dt1ufhjfc/image/upload/v1692004794/learn-nexjs/item1_a2bmk5.jpg'
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createAt: '1692000489216',
            updateAt: '1692000489216',
            tagList: ['Illustration'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
            fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            thumbnailUrl: 'https://res.cloudinary.com/dt1ufhjfc/image/upload/v1692004794/learn-nexjs/item2_eoxfrb.jpg'
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            createAt: '1692000489216',
            updateAt: '1692000489216',
            tagList: ['Typography'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
            fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            thumbnailUrl: 'https://res.cloudinary.com/dt1ufhjfc/image/upload/v1692004794/learn-nexjs/item3_sdcuhr.jpg'
        }
    ];


    return (
        <Box component="section" pt={2} pb={4}>
            <Container>
                <Typography variant='h6' mb={4}>Feature Works</Typography>
                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
