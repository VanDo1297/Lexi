import { getSEO } from "@/contentful/services/seo";
import { SEO } from "@/contentful/services/seo/type";
import { findSEOContent } from "@/utils";
import Head from "next/head";

export async function getStaticProps() {

    const seoContent = await getSEO();

    return {
        props: {
            seoContent: seoContent
        },
    }
}

interface IProps {
    key:string,
    seoContent?: SEO[] | null,
}

const SEOComponent = (props: IProps) =>{
    const seo = props.seoContent ? findSEOContent(props.key, props.seoContent) : null;
    return( 
        <Head>
            <title>{seo ? seo.pageTitle : "Lexi"}</title>
            <meta name="description" content={seo ? seo.pageDescription : "Lexi app description"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:title" content={seo ? seo.pageTitle : "Lexi"} />
            <meta property="og:description" content={seo ? seo.pageDescription : "Lexi app description"} />
            <meta property="og:image" content={seo ? "https"+ seo.shareImages : "/assets/logo.png"} />

            <meta property="twitter:image" content={seo ? "https"+ seo.shareImages : "/assets/logo.png"}  />
            <meta property="image" content={seo ? "https"+ seo.shareImages : "/assets/logo.png"}  />
            <meta name="og:image" content={seo ? "https"+ seo.shareImages : "/assets/logo.png"}  />
            <meta name="twitter:image" content={seo ? "https"+ seo.shareImages : "/assets/logo.png"}  />
        </Head>
    )
}

export default SEOComponent;