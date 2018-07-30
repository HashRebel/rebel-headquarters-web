import axios from 'axios';

async function getPostBySlug(slug){

    if(!/(.*?)-([a-z])/.test(slug)){
        return {
            error: {
                type: 'validation',
                description: 'An invalid slug was provided'
            }
        };
    }

    try {
        const baseUrl = process.env.cockpitBaseUrl;
        const apiKey = process.env.cockpitApiKey;

        const { data } = await axios.post(`${baseUrl}/api/collections/get/posts?token=${apiKey}`, {
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

export default{ getPostBySlug };
