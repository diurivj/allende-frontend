import {apiUrl} from './apiUrl';

export const getDists = () => {
    return fetch(apiUrl + '/distribuidores')
        .then(r => r.json())
        .then(r => r)
};

export const newDist = (obj) => {
  return fetch(apiUrl + '/signup', {
    method:'POST',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type':'application/json'})
  })
  .then(v => v.json())
  .then(r => { return r;});
}


