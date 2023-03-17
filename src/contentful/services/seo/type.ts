import { ImageType,Image } from "@/contentful/types/image";

export type SEO = {
    internalPage:string;
    pageTitle: string;
    pageDescription: string
    shareImages: Image | null;
}
export type SEOResponse  = {
   
    internalPage:string,
    pageTitle:string,
    pageDescription:string,
    shareImages:ImageType
   
}

