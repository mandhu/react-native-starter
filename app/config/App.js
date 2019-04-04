import { Platform } from 'react-native';

const dev_api_url = Platform.OS === 'ios' ? 'http://localhost:8000/api/' : 'http://10.0.2.2:8000/api/',
const prod_api_url = 'https://www.explanple.com/api/';

const api_url = __DEV__ ? dev_api_url : prod_api_url;

export default {
    name: 'App Name',
    api_url,
    timezone: 'UTC',
    locale: 'en',
    key: '6Lc9_5EUAAAAAGexujmM3oogebF0mEAKum'
};