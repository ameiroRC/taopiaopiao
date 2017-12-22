import {get,post} from './index';
export function getCinema() {
    return get('/api/cinemas');
}
export function getFilmCinema(id) {
    return get(`/api/cinemasId?id=${id}`);
}