/**
 * Created by Administrator on 2017/12/22.
 */
import {get} from './index';
export function userLikes(){
    return get('/api/userLikes');
}