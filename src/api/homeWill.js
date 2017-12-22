import {get,post} from './index';
export function getWill() {
    return get('/api/movieList?showing=1&offset=0&limit=20')
}
export function getSome(offset=0,limit=5) {
    return get(`/api/movieList?showing=1&offset=${offset}&limit=${limit}`);
}
export function getLike(id) {
    return get(`/api/like?id=${id}`);
}