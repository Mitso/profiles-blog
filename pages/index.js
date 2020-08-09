import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout'
import useSWR from 'swr'
import utilStyles from '../public/style/utils.module.scss'

function Home({ resultsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Welcome to the profiles application</h2>
        <h3>Please file a list of random 50 users - emphasis on random</h3>
        <p>Aslo note this is not chached.</p>

        <ul className={utilStyles.list}>
        {resultsData.results.map((user,i) => (

          <li key={i} className={utilStyles.listItem}>
            <div className={utilStyles.listImgWrapper}>
              <img src={user.picture.medium} className={`${utilStyles.borderCircle} ${utilStyles.listImg}`}/>
            </div>
            <h4 className={utilStyles.listName}>{user.name.first} {user.name.last}</h4>
            <div className={utilStyles.details}>
              <h5>Location</h5>
              <p>City: {user.location.city}</p>
              <p>State: {user.location.state}</p>
              <p>Country: {user.location.country}</p>
            </div>
            <Link href="/profiles/profile">
              <h4><a className={utilStyles.backToHome}>Profile</a></h4>
            </Link>
          </li>
        ))}

      </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const resultsData = await res.json()
  return {
    props: {
      resultsData,
    }
  }
}

export default Home
