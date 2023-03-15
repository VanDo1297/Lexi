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
            <meta property="og:type" content="website" />
            {shareImage && <>
                <meta property="og:image" content={"https:"+ shareImage} />
                <meta property="twitter:image" content={"https:"+ shareImage}  />
                <meta property="image"  content={"https:"+ shareImage} />
                <meta name="og:image"  content={"https:"+ shareImage}  />
                <meta name="twitter:image"  content={"https:"+ shareImage} />
                <meta property="og:url"  content={"https:"+ shareImage} ></meta>
            </>}
        </Head>
    )
}

export default SEOComponent;