import fetch from 'isomorphic-unfetch'

export function fetchRandomUsers() {
  const apiData =  fetch('https://randomuser.me/api/?results=50&seed=somethingfun')
    .then( res => res.json())

  return apiData;
}
