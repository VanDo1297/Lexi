import { SEO } from "@/contentful/services/seo/type";

export function findSEOContent(key:string, seos: SEO[]):(SEO|null){
    var result:SEO|null = null;
    seos.forEach(seo => {
        if(seo.internalPage === key){
            result = seo
        }
    })
    return result
}