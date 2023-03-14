import { Inter } from 'next/font/google'
import SEOComponent from '@/components/seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <SEOComponent />
            <main className='h-screen sm:px-[32px] px-[16px] py-[30px] flex flex-col'>
                <div className="w-full py-[20px] lg:h-[40%] sm:h-[30%] sm:min-h-[200px] h-[15%] max-h-[400px] flex sm:items-start flex-col">
                    <img className='h-full object-contain' src={'/assets/logo.svg'} alt="" />
                </div>
                <div className="sm:block flex sm:mt-[50px] mt-auto">
                    <div className="flex xl:flex-row flex-col justify-between sm:mt-[40px] mt-[100px] self-end">
                        <div className="flex flex-col sm:text-start text-center xl:pl-[48px] xl:pb-[0] pb-[32px] pl-[16px]">
                            <p className='sm:text-[56px] text-[32px] font-[300] leading-[1em]'>A <span className='italic'>personalized</span>  news feed </p>
                            <p className="sm:text-[56px] text-[32px] font-[300] leading-[1em]">powered by artificial intelligence</p>
                            <p className="sm:text-[20px] text-[15px] leading-[28px] sm:mt-[32px] mt-[16px] sm:mb-[48px] mb-[32px] font-[400]">Download the app to discover the best articles tailored just for you.</p>
                            <div className="flex flex-row sm:justify-start justify-center">
                                <a href="" className='sm:text-[18px] text-[16px] font-[400] leading-[1em] sm:px-[30px] px-[10px] sm:py-[20px] py-[15px] border-[1px] border-solid border-[#000] flex flex-row items-center'>
                                    <img src={'./assets/apple.svg'} alt="" />
                                    <p className="">App Store</p>
                                </a>
                                <a href="" className='sm:text-[18px] text-[16px] font-[400] leading-[1em] sm:px-[30px] px-[10px] sm:py-[20px] py-[15px] border-[1px] border-solid border-[#000] flex flex-row items-center'>
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
                        <a href="#" className="">Privacy Policy</a>
                    </div>
                </div>
            </main>
        </>
    )
}
