import axios from 'axios';

const cockpit = axios.create({
    baseURL: process.env.cockpitBaseUrl
}); // TODO: Do not directly call cockpit. Need to write and API layer to handle this. For now connect directly.

export { cockpit };
