import fetch from 'isomorphic-unfetch'

export async function fetchRandomUsers() {
  const res = await fetch('https://randomuser.me/api/?results=50&seed=somethingfun')
  const resultsData = await res.json()
}
