import { Inter } from 'next/font/google'
import SEOComponent from '@/components/seo'
import { getSEO } from '@/contentful/services/seo'
import { SEO } from '@/contentful/services/seo/type';
import { findSEOContent } from '@/utils';
export async function getStaticProps() {

    const seoContent = await getSEO();

    return {
        props: {
            seoContent: seoContent
        },
    }
}

interface IProps {
    seoContent?: SEO[] | null,
}
const SEO_KEY ="Home"
export default function Home(props:IProps) {

    const seo = props.seoContent ? findSEOContent(SEO_KEY, props.seoContent) : null;
    
    return (
        <>
            {seo  ? <SEOComponent 
                title={seo.pageTitle}  description={seo.pageDescription} shareImage={seo.shareImages}
            /> : <SEOComponent />}
            <main className='min-h-screen sm:px-[32px] px-[16px] py-[30px] flex flex-col'>
                <div className="w-full py-[20px] flex sm:items-start items-center flex-col">
                    <img className='md:w-[500px] sm:w-[300px] w-[200px] object-contain' src={'/assets/logo.svg'} alt="" />
                </div>
                <div className="sm:block flex mt-auto sm:mb-[40px]">
                    <div className="flex w-full xl:flex-row flex-col justify-between sm:mt-[40px] mt-[100px] self-end">
                        <div className="flex flex-col sm:text-start text-center xl:pl-[48px] xl:pb-[0] pb-[32px] sm:pl-[16px]">
                            <p className='sm:text-[56px] text-[32px] font-[300] leading-[1em]'>A <span className='italic'>personalized</span> language learning experience powered by artificial intelligence.  </p>
                            <p className="sm:text-[56px] text-[32px] font-[300] leading-[1em]">Revolutionizing Language Learning for a Connected World </p>

                            <p className="sm:text-[20px] text-[15px] sm:mt-[32px] mt-[16px] sm:mb-[48px] mb-[32px] font-[400] whitespace-pre-line leading-[24px]">{`
                                 I. Introduction

                                 Lexi is a dynamic, adaptive language learning product that empowers users to learn new languages seamlessly and effectively. Our cutting-edge technology makes language learning an enjoyable and rewarding experience. Our brand personality and mascot embody the spirit of curiosity, adaptability, and constant growth.
                                 
                                 II. Brand Personality
                                 
                                 Adaptive: Lexi is constantly learning and evolving to meet the unique needs of each user, ensuring a personalized and effective learning experience.
                                 Empowering: Lexi instills confidence in users by providing the necessary tools and resources to conquer their language learning journey.
                                 Curious: Lexi encourages users to explore and discover new cultures, perspectives, and languages with a sense of wonder and excitement.
                                 Supportive: Lexi is committed to the success of users, providing guidance, motivation, and encouragement every step of the way.
                                 Approachable: Lexi makes language learning accessible to all, breaking down barriers and offering an engaging and enjoyable experience.
                            `}</p>
                           
                            <p className="sm:text-[20px] text-[15px] leading-[28px] sm:mt-[32px] mt-[16px] sm:mb-[48px] mb-[32px] font-[400]">Download the app to discover the best articles tailored just for you.</p>
                            <div className="flex sm:flex-row flex-col sm:justify-start justify-center">
                                <a target={"_blank"} href="https://apps.apple.com/vn/app/lexi-learn-hebrew/id1670276596" className='border-[1px] border-solid border-[#000] flex flex-row items-center rounded-[10px] p-[5px] sm:mr-[10px] justify-center'>
                                    <img className='w-[200px]' src={'./assets/app-store-badge.png'} alt="" />
                                </a>
                                <a target={"_blank"} href="https://play.google.com/store/apps/details?id=com.lexi.bohemian" className='sm:mt-[0px] mt-[10px] border-[1px] border-solid border-[#000] flex flex-row items-center rounded-[10px] p-[5px] justify-center'>
                                    <img className='w-[200px]' src={'./assets/google-play-badge.png'} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="sm:min-w-[500px] flex mt-[auto]">
                            <img className='sm:block hidden' src={'./assets/home-block.svg'} alt="" />
                            <img className='sm:hidden block w-full' src={'./assets/home-block2.svg'} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-between mt-[50px]">
                    <div className="text-[14px] text-start font-[400px]">
                        <a href="mailto:lexi@bohemian.cc">lexi@bohemian.cc</a>
                    </div>
                    <div className="text-[14px] text-start font-[400px] flex flex-row items-center">
                        <a target={"_blank"} href="https://docs.google.com/document/d/e/2PACX-1vQQ8uTUBMlxy9igFLRrfvdJbeFR2Y-TL1hbMj7IpETQBlo7r2EnclAKHTQxsWX5eBMe2K_nfCZ4KPGr/pub" className="">Terms of Service</a>
                        <div className="w-[5px] h-[5px] bg-black mx-[15px] rounded-[100%]"></div>
                        <a target={"_blank"} href="https://docs.google.com/document/d/e/2PACX-1vQQ8uTUBMlxy9igFLRrfvdJbeFR2Y-TL1hbMj7IpETQBlo7r2EnclAKHTQxsWX5eBMe2K_nfCZ4KPGr/pub" className="">Privacy Policy</a>
                    </div>
                </div>
            </main>
        </>
    )
}
