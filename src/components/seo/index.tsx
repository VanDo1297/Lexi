import Head from "next/head";

const SEOComponent = ({title, description, shareImages} :
    {title?:string, description?:string, shareImages?:string[]}) =>{

    return(
        <Head>
            <title>{title || "Lexi"}</title>
            <meta name="description" content={description || "Lexi app description"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEOComponent;