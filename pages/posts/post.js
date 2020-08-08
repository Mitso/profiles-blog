import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <section>
      <h1>First Post</h1>
      <p>
        Until recently, I also hadn't setup an official
        performance budget and enforced it. This isn’t to say that
        I never did performance audits. I frequently use tools
        like PageSpeed Insights and take the feedback to make improvements.
        But what I had never done was set a list of metrics that I needed
        the site to meet, and enforce them using some automated tool.
      </p>
      </section>

    </Layout>
  )
}
