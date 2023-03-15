import Head from "next/head";


const SEOComponent = ({title, description, shareImage} :{title?:string,description?:string, shareImage?:string}) =>{
   
    return( 
        <Head>
            <title>{title || "Lexi"}</title>
            <meta name="description" content={description || "Lexi app description"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:title" content={title || "Lexi"} />
            <meta property="og:description" content={description || "Lexi app description"} />
            
            {shareImage && <>
                <meta property="og:image" content={"https:"+ shareImage} />
                <meta property="twitter:image" content={"https:"+ shareImage}  />
                <meta property="image"  content={"https:"+ shareImage} />
                <meta name="og:image"  content={"https:"+ shareImage}  />
                <meta name="twitter:image"  content={"https:"+ shareImage} />
                <meta property="og:url"  content={"https:"+ shareImage} ></meta>
            </>}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
        </Head>
    )
}

export default SEOComponent;