import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/style/utils.module.scss'

const name = "Random Users"
export const siteTitle = 'Next.js Sample Site'

export default function Layout({children, home}) {
  return  (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {home && (
        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      )}

      <main>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
