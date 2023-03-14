import { Inter } from 'next/font/google'
import SEOComponent from '@/components/seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <SEOComponent />
            <main className='min-h-screen sm:px-[32px] px-[16px] py-[30px] flex flex-col'>
                <div className="w-full py-[20px] flex sm:items-start items-center flex-col">
                    <img className='md:w-[500px] sm:w-[300px] w-[200px] object-contain' src={'/assets/logo.svg'} alt="" />
                </div>
                <div className="sm:block flex mt-auto sm:mb-[40px]">
                    <div className="flex w-full xl:flex-row flex-col justify-between sm:mt-[40px] mt-[100px] self-end">
                        <div className="flex flex-col sm:text-start text-center xl:pl-[48px] xl:pb-[0] pb-[32px] pl-[16px]">
                            <p className='sm:text-[56px] text-[32px] font-[300] leading-[1em]'>A <span className='italic'>personalized</span>  news feed </p>
                            <p className="sm:text-[56px] text-[32px] font-[300] leading-[1em]">powered by artificial intelligence</p>
                            <p className="sm:text-[20px] text-[15px] leading-[28px] sm:mt-[32px] mt-[16px] sm:mb-[48px] mb-[32px] font-[400]">Download the app to discover the best articles tailored just for you.</p>
                            <div className="flex flex-row sm:justify-start justify-center">
                                <a target={"_blank"} href="https://apps.apple.com/vn/app/lexi-learn-hebrew/id1670276596" className='sm:text-[18px] text-[16px] font-[400] leading-[1em] sm:px-[30px] px-[10px] sm:py-[20px] py-[15px] border-[1px] border-solid border-[#000] flex flex-row items-center'>
                                    <img src={'./assets/apple.svg'} alt="" />
                                    <p className="">App Store</p>
                                </a>
                                <a target={"_blank"} href="https://play.google.com/store/apps/details?id=com.lexi.bohemian" className='sm:text-[18px] text-[16px] font-[400] leading-[1em] sm:px-[30px] px-[10px] sm:py-[20px] py-[15px] border-[1px] border-solid border-[#000] flex flex-row items-center'>
                                    <img src={'./assets/google.svg'} alt="" />
                                    <p className="">Google Play</p>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <img className='sm:block hidden' src={'./assets/home-block.svg'} alt="" />
                            <img className='sm:hidden block w-full' src={'./assets/home-block2.svg'} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between mt-[50px]">
                    <div className="text-[14px] text-start font-[400px]">
                        <a href="mailto:inquiries@artifact.news">inquiries@artifact.news</a>
                    </div>
                    <div className="text-[14px] text-start font-[400px] flex flex-row items-center">
                        <a href="#" className="">Terms of Service</a>
                        <div className="w-[5px] h-[5px] bg-black mx-[15px] rounded-[100%]"></div>
                        <a target={"_blank"} href="https://docs.google.com/document/d/e/2PACX-1vQQ8uTUBMlxy9igFLRrfvdJbeFR2Y-TL1hbMj7IpETQBlo7r2EnclAKHTQxsWX5eBMe2K_nfCZ4KPGr/pub" className="">Privacy Policy</a>
                    </div>
                </div>
            </main>
        </>
    )
}
