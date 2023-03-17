import { Image } from "@/contentful/types/image";
import Head from "next/head";


const SEOComponent = ({title, description, shareImage} :{title?:string,description?:string, shareImage?:Image | null}) =>{
   
    return( 
        <Head>
            <title>{title || "Lexi"}</title>
            <meta name="description" content={description || "Lexi app description"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={title || "Lexi"} />
            <meta property="og:description" content={description || "Lexi app description"} />
            {shareImage && <>
                <meta property="og:type" content="website" />
                <meta property="og:image" content={"https:"+ shareImage.url} />
                <meta property="og:image:secure_url" content={"https:"+shareImage.url} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content={shareImage.width+""} />
                <meta property="og:image:height" content={shareImage.height+""} />
                <meta property="og:image:alt" content="This is image" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={"https:"+ shareImage.url}  />
                <meta property="image"  content={"https:"+ shareImage.url} />
                <meta name="image" content={"https:"+ shareImage.url}  />
                <meta name="og:image"  content={"https:"+ shareImage.url}  />
                <meta name="twitter:image"  content={"https:"+ shareImage.url} />
            </>}
        </Head>
    )
}

export default SEOComponent;

