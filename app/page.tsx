import { EnumBtn, EnumCard, EnumText } from '@/src/types/enums';
import { NewsCard, Subscribe } from '@/src/components/blocks';
import { Badge, Btn, Subtitle, Text, Title } from '@/src/components/ui';

const news = {
    id: 254184118,
    title: 'Multiple arrests made in Matthew Perry’s ketamine death amid investigation: report',
    text: 'Mutiple people have been arrested in connection with Matthew Perry’s death, according to TMZ. The outlet reported Thursday that at least one doctor and several drug dealers have been arrested following law enforcement launching an investigation into Perry’s passing. The 54-year-old “Friends” actor, who long struggled with addiction, was found dead in his hot tub in October with ketamine in his system. According to TMZ, law enforcement said they “executed search warrants and seized computers, phones and other electronic equipment” to uncover who supplied Perry with the illegally perscribed ketamine that caused his death. The doctor and dealers who were arrested allegedly helped arrange and deliver the ketamine to Perry. The search warrant reportedly revealed text messages discussing Perry and getting the ketamine to him. The texts also reportedly include discussions about how much Perry was willing to pay for the drug. TMZ also reported that authorities got a search warrant from Charlie Sheen’s ex, Brooke Mueller, who was in a treatment with Perry. However, the outlet noted that Muller “is not connected” to the arrests. This story is developing…',
    summary:
        "At least one doctor and several drug dealers have reportedly been arrested in connection with Matthew Perry's death.",
    url: 'https://nypost.com/2024/08/15/entertainment/multiple-arrests-made-in-matthew-perrys-ketamine-death-amid-investigation/',
    image: 'https://d.newsweek.com/en/full/2450666/breaking-news.jpg',
    publish_date: '2024-08-15 13:58:38',
    authors: ['Alex Stone', 'Meredith Deliso', 'Alexander Mallin', 'Vue Noda', 'Dima Rogkov'],
};

const HomePage = () => {
    return (
        <>
            <section className='relative w-full mb-16'>
                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>Redux Store</Badge>
                    <Badge>Zustand Store</Badge>
                </div>

                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Subtitle className='mb-2 last:mb-0'>Subtitle Page</Subtitle>

                <div className='w-full mb-5 last:mb-0'>
                    <Text textSize={EnumText.large} className='mb-5 last:mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis, explicabo, quidem earum sed
                        voluptas asperiores dicta soluta tempora autem, exercitationem voluptatem minima vitae
                        laboriosam provident libero consequatur quaerat voluptate?
                    </Text>
                    <Text className='mb-5 last:mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis, explicabo, quidem earum sed
                        voluptas asperiores dicta soluta tempora autem, exercitationem voluptatem minima vitae
                        laboriosam provident libero consequatur quaerat voluptate?
                    </Text>
                    <Text textSize={EnumText.small}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis, explicabo, quidem earum sed
                        voluptas asperiores dicta soluta tempora autem, exercitationem voluptatem minima vitae
                        laboriosam provident libero consequatur quaerat voluptate?
                    </Text>
                </div>

                <div className='flex flex-wrap gap-2 w-full mb-5 last:mb-0'>
                    <Btn>Subscribe</Btn>
                    <Btn btnType={EnumBtn.withIcon}>Subscribe</Btn>
                    <Btn btnType={EnumBtn.dark}>Subscribe</Btn>
                    <Btn btnType={EnumBtn.darkWithIcon}>Subscribe</Btn>
                </div>

                {/* <div className='w-full md:w-[50%]'>
                    <NewsCard news={news} cardType={EnumCard.large} className='mb-5 last:mb-0' />
                    <NewsCard news={news} className='mb-5 last:mb-0' />
                    <NewsCard news={news} cardType={EnumCard.small} />
                </div> */}
            </section>

            <Subscribe className='mb-16' />
        </>
    );
};

export default HomePage;
