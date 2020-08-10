import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../../public/style/utils.module.scss'
import { useRouter } from 'next/router'

function User(profileData) {
  const router = useRouter()
  const { id } = router.query

  console.log();
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <section>
        {profileData.profileData.results.map((user,i) => (
          <h4 key={i} className={utilStyles.listName}>{user.name.first} {user.name.last}</h4>
        ))}
      </section>
    </Layout>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const userData = await res.json()
  const paths = userData.results.map(function(user,i) {
    return {
      params: { id: i.toString() },
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('Passed Params',params,'EOF')
  const res = await fetch(`https://randomuser.me/api/?results=50?${params.id}`)
  const profileData = await res.json()
  return {
    props: {
      profileData
    }
  }
}


export default User
