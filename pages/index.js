import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

function Home({ posts }) {
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
        <ul className={utilStyles.list}>
          {posts.results.map((item,i) => (
            <li key={i}>{item.name.first}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

export default Home
