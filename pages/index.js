import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

function Home({data}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I asked on Twitter the other day how many
          people had created and enforced a performance budget
          for a website they were working on. Not surprisingly,
          the vast majority of people hadn't.
        </p>
        <Link href='/posts/post'>
          <a className={utilStyles.backToHome}>Go to local post</a>
        </Link>
        <ul>
        {
          data.map((item) => (
            <li>{item.gender}</li>
          ))
        }
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://randomuser.me/api/?results=5')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default Home
