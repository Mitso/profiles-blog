import { useContext } from 'react';
import DataContext from './components/DataContext';

import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout'
import utilStyles from '../public/style/utils.module.scss'


function Home() {
  const { data } = useContext(DataContext);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.content}>
        <div className={utilStyles.contentTopics}>
          <h2 className={utilStyles.headingMd}>Welcome to the profiles application</h2>
          <h3>Please find a list of random 50 users</h3>
        </div>
        <ul className={utilStyles.list}>
          {data.results.map((user,i) => (
            <li key={i} className={utilStyles.listItem}>
              <div className={utilStyles.listImgWrapper}>
                <img src={user.picture.medium} className={`${utilStyles.borderCircle} ${utilStyles.listImg}`}/>
              </div>
              <h4 className={utilStyles.listName}>{user.name.first} {user.name.last}</h4>
              <div className={utilStyles.listDetails}>
                <p className={utilStyles.listLabel}><span>City:</span> {user.location.city}, {user.location.state}</p>
                <p className={utilStyles.listLabel}><span>Country:</span> {user.location.country}</p>
              </div>
              <Link href="/profiles/[id]" as={`/profiles/${user.login.uuid}`}>
                <a className={utilStyles.primaryButton}>View Profile</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export default Home;
