import { ImageType,Image } from "@/contentful/types/image";

export type SEO = {
    internalPage:string;
    pageTitle: string;
    pageDescription: string
    shareImages: Image;
}
export type SEOResponse  = {
   
    internalPage:string,
    pageTitle:string,
    pageDescription:string,
    shareImages:ImageType
   
}

