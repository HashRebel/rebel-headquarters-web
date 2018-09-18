import axios from 'axios';

export default class CmsApi {
    constructor(baseUrl, apiKey){
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    async getPostBySlug(slug){
        if(!/(.*?)-([a-z])/.test(slug)){
            return {
                error: {
                    type: 'validation',
                    description: 'An invalid slug was provided'
                }
            };
        }

        try {
            const { data } = await axios.post(`${this.baseUrl}/api/collections/get/posts?token=${this.apiKey}`, {
                filter: {
                    slug: slug
                }
            });

            if(data.error) throw { error: data.error };
            if(data.total <= 0) throw { error: { description: 'No entires were found for the given slug' } };

            return { post: data.entries[0] };
        }
        catch(error) {
            return {
                error
            };
        }
    }

    async getDataForResume(){
        try {
            const baseUrl = process.env.cmsBaseUrl;
            const apiKey = process.env.cockpitApiKey;

            const { data } = await axios.get(`${this.baseUrl}/api/singletons/get/resume?token=${this.apiKey}`);

            if(data.error) throw { error: data.error };

            return data;
        }
        catch(error) {
            return {
                error
            };
        }
    }
}
