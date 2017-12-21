import {get,post} from './index';
export function getRank() {
    return get('/api/movieList');
}