import {get} from "./index";

export function getAll() {
    return get(`/api/movieList`)
}