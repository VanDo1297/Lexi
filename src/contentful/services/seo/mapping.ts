import { Image, ImageType } from "@/contentful/types/image";
import { Entry } from "contentful";
import { SEO, SEOResponse } from "./type";

const formatImage = (img: ImageType) => {
    return {
        height : img.fields.file.details.image.height,
        width : img.fields.file.details.image.width,
        url :  img.fields.file.url
    }
}

export const formatSEO = (seos: Entry<SEOResponse>[]) :  SEO[]  => {
    if(seos && seos.length > 0){
        var results : SEO[] = [];
        results = seos.map(seo => {
            console.log(seo);
            return {
                internalPage: seo.fields.internalPage,
                pageTitle: seo.fields.pageTitle,
                pageDescription: seo.fields.pageDescription,
                shareImages: formatImage(seo.fields.shareImages)
            }
        })
        return results;
    }else{
        return []
    }
}
   