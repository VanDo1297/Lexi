import {contentfulClient} from '../../client';
import { formatSEO } from './mapping';
import { SEO, SEOResponse } from './type';

const getSEO = async () => {
    try{
        const response = await contentfulClient.getEntries<SEOResponse>({
            content_type: 'lexiSeo',
        });
        if(response.items){
            return formatSEO(response.items)
        }
        return null;
    }catch(e){
        return null;
    }
}

export { getSEO };

