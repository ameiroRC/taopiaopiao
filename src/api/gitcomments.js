import {get,post} from './index';
export function getComment(id) {
    return get(`/api/comment?id=${id}`)
}