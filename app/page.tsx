import { Badge, BtnLink, Subtitle, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>Redux Store</Badge>
                    <Badge>Zustand Store</Badge>
                </div>

                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Subtitle className='mb-2 last:mb-0'>Subtitle Page</Subtitle>
                <Text className='mb-5 last:mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis, explicabo, quidem earum sed
                    voluptas asperiores dicta soluta tempora autem, exercitationem voluptatem minima vitae laboriosam
                    provident libero consequatur quaerat voluptate?
                </Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href='/theme'>Theme Page</BtnLink>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
