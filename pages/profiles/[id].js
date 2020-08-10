import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../../public/style/utils.module.scss'

function User(profileData) {
  console.log('Data:',profileData);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <section></section>
    </Layout>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const userData = await res.json()
  const paths = userData.results.map((user) => ({
    params: {
      id: user.id.value
    },
  }))
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  //https://randomuser.me/api/?results=50?id.value=${params.id}
  const res = await fetch(`https://randomuser.me/api/?results=50?id.value=${params.id}`)
  const profileData = await res.json()
  return {
    props: {
      profileData
    }
  }
}


export default User
