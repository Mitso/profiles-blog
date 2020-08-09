import fetch from 'isomorphic-unfetch'

export async function fetchRandomUsers() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const resultsData = await res.json().results

  return resultsData
}
