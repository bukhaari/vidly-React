import _ from 'lodash';

export function Paginate(items, currentPage, pageSize){
const StartIndex = (currentPage -1) * pageSize
    return _( items).slice(StartIndex).take(pageSize).value();
}