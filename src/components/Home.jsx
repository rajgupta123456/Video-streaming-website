import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
   
};

const Home = () => {
   
    return (
       
        <div>
            <MyCarousel />

            <Container maxWidth={'container.xl'} minHeight={'100vh'} padding={"16"} >
                <Heading textTransform={'uppercase'} paddingTop={'2'} width={'fit-content'} borderBottom={'2px solid'}
                    m="auto">
                    Services
                </Heading>

                <Stack
                    height="full"
                    padding={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'justify'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
                        tempora deleniti quod, est eos veniam autem asperiores rem, nam
                        laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
                        at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
                        sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
                        Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
                        modi soluta ullam voluptatum unde repellat in molestias quod?
                        Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
                        velit culpa maiores. Inventore esse illum excepturi dolores est
                        natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
                        adipisci minima hic, nam provident quo aperiam quasi vel?
                        Dignissimos accusantium aliquid aut vel explicabo voluptatum
                        molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
                        omnis officiis autem dolorum!
                    </Text>
                </Stack>

            </Container>
        </div>
    );
};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        
    >
        <Box w="full" h={'100vh'} >
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} opacity={0.7} marginTop={180}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'} >
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} opacity={0.6} marginTop={-200}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'} >
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} opacity={0.45} marginTop={-150}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w="full" h={'100vh'} >
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} opacity={0.45} marginTop={150}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);











export default Home;


