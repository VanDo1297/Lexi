import {contentfulClient} from '../../client';
import { formatSEO } from './mapping';
import { SEOResponse } from './type';

const getSEO = async () => {
    try{
        const response = await contentfulClient.getEntries<SEOResponse>({
            content_type: 'lexiSeo',
        });
        return response.items ? formatSEO(response.items) : null;
    }catch(e){
        return null;
    }
}

export { getSEO };

